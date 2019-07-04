import chalk from 'chalk';
import pkg from '../../package.json';
import symbols from 'log-symbols';

const appTag: string = `${pkg.name} :: ${pkg.version} => `;

export const log = (message:string) => {
    console.log(`${symbols.success} ${chalk.green.underline(appTag)} \n${message}\n`);
}

export const alert = (message:string, data:any = {}) => {
    console.log(`${symbols.warning} ${chalk.green.underline(appTag)} \n${chalk.yellow(message)}\n`, data);
}

export const error = (message:string, data:any = {}) => {
    console.log(`${symbols.error} ${chalk.green.underline(appTag)} \n${chalk.red(message)}\n`, data);
}