const readline = require('readline');
const chalk = require('chalk');
const { generarUna, generarMultiples, generarEnZona } = require('./helpers/generator');
const { log } = require('console');

const rl =readline.createInterface({
  input: process.stidin,
  output: process.stdout
})

function showMenu(){
  console.log(chalk.bold.blue(`*************************************
                               ** Generador de Coordenadas Falsas **
                               *************************************\n\n`));
  console.log(chalk.cyan(`1. Generar una única coordenada falsa.\n`));
  console.log(chalk.cyan(`2. Generar múltiples coordenadas y guardarlas en un archivo JSON.\n`));
  console.log(chalk.cyan(`3. Generar múltiples coordenadas en una zona específica.\n`));
  console.log(chalk.bold.red(`0. Salir`));
  rl.question("Elige una opcion : ", (option)=>{

    switch (option){
      case "1":
        console.log("1");
        showMenu();
        break;
      case "2":
        console.log("2");
        showMenu();
        break;
      case "3":
        console.log("3");
        showMenu();
        break;
      case "0":
        rl.close();
        break;
      default:
        console.log("Opcion no valida");
        showMenu();
        
    }

  })
  
  
}

showMenu()