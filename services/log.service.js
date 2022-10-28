import chalk from 'chalk';
import dedent from 'dedent-js'

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + '  ' + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + '  ' + message);
};

const printHelp = () => {
    console.log(
        dedent`

                ${chalk.bgCyan('       HELP       ')}

        без параметров - вывод прогноза погоды
        -s [CITY]  -  выбор города
        -h для вывода помощи
        -t [API_KEY] - для сохранения токена

        `
        );        
};

export { printError, printSuccess, printHelp }