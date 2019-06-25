import chalk from 'chalk';
import pkg from '../../package.json';

const appTag: string = `${pkg.name} :: ${pkg.version} => `;

export const log = (message:string) => {
    console.log(`${chalk.green.underline(appTag)} ${chalk.green(message)}`);
}

export const alert = (message:string, data:any = {}) => {
    console.log(`${chalk.green.underline(appTag)} ${chalk.yellow(message)}`, data);
}

export const error = (message:string, data:any = {}) => {
    console.log(`${chalk.green.underline(appTag)} ${chalk.red.bold(message)}`, data);
}





