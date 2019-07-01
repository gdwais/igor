import {Command, flags} from '@oclif/command';
import {log, alert, error} from '../utilities/logger';
const figlet = require('figlet');

export default class Figlet extends Command {
    static description = `
        Implements figlet on whatever command you pass it.
    `;

    static examples = [
        `$ igor figlet -s "some random text`
    ];

    static flags = {
        help: flags.help({char: 'h'}),
        string: flags.string({char: 's'})
    };

    static args = [];

    async run() {
        const {args, flags} = this.parse(Figlet);

    }


}