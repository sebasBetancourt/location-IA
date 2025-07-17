const readline = require('readline');
const chalk = require('chalk');
const axios = require('axios');
const { generateOne, generateMany, generateInZone } = require('./helpers/generator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function obtenerBoundingBox(ciudad) {
    const url = `https://nominatim.openstreetmap.org/search.php?q=${ciudad}&format=jsonv2`;
    try {
        const { data } = await axios.get(url);
        if (data.length === 0) {
            console.log(chalk.red("\nNo se encontro la ciudad.\n"));
            return null;
        }
        const boundingBox = data[0].boundingbox;
        return {
            latMin: parseFloat(boundingBox[0]),
            latMax: parseFloat(boundingBox[1]),
            longMin: parseFloat(boundingBox[2]),
            longMax: parseFloat(boundingBox[3])
        };
    } catch (error) {
        console.error(chalk.red("Error al consultar la API:"), error.message);
        return null;
    }
}

function showMenu() {
    console.log(chalk.bold.blue(`
                    *************************************
                    ** Generador de Coordenadas Falsas **
                    *************************************
`));
    console.log(chalk.cyan(`1. Generar una única coordenada falsa.`));
    console.log(chalk.cyan(`2. Generar múltiples coordenadas y guardarlas en un archivo JSON.`));
    console.log(chalk.cyan(`3. Generar múltiples coordenadas en una zona específica.`));
    console.log(chalk.bold.red(`0. Salir`));

    rl.question("\nElige una opción: ", (option) => {
        switch (option) {
            case "1":
                console.log(generateOne());
                showMenu();
                break;
            case "2":
                console.log('Guardando 20 coordenadas en coordenadas.json.');
                console.log(generateMany(20));
                showMenu();
                break;
            case "3":
                rl.question("\n¿Que ciudad de Colombia quieres generar datos? ", async (ciudad) => {
                    const limites = await obtenerBoundingBox(ciudad);
                    if (!limites) {
                        showMenu();
                        return;
                    }
                    console.log(chalk.green(`Generando 10 coordenadas en zona: ${ciudad}\n`));
                    const coordenadas = generateInZone(10, limites.latMin, limites.latMax, limites.longMin, limites.longMax);
                    console.log(coordenadas);
                    showMenu();
                });
                break;
            case "0":
                rl.close();
                break;
            default:
                console.log(chalk.red("Opción no válida"));
                showMenu();
        }
    });
}

showMenu();
