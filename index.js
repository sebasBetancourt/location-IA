const readline = require('readline');
const chalk = require('chalk');
const { generarUna, generarMultiples, generarEnZona } = require('./helpers/generator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log(chalk.blueBright('\n===== GENERADOR DE COORDENADAS FALSAS ====='));
    console.log('1️⃣  Generar UNA coordenada');
    console.log('2️⃣  Generar VARIAS y guardar en archivo');
    console.log('3️⃣  Generar VARIAS en una ZONA específica (ej: Bogotá)');
    console.log('0️⃣  Salir\n');
    rl.question('Elige una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                console.log(generarUna());
                mostrarMenu();
                break;
            case '2':
                console.log('Generando 10 coordenadas y guardando en coordenadas.json...');
                console.log(generarMultiples(10));
                mostrarMenu();
                break;
            case '3':
                console.log('Generando 5 en zona Bogotá (lat 4.5-4.8 / long -74.2 a -74.0)...');
                console.log(generarEnZona(5, 4.5, 4.8, -74.2, -74.0));
                mostrarMenu();
                break;
            case '0':
                rl.close();
                break;
            default:
                console.log('Opción inválida');
                mostrarMenu();
        }
    });
}

mostrarMenu();
