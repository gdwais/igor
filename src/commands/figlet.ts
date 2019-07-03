import {Command, flags} from '@oclif/command';
import {log, alert, error} from '../utilities/logger';
const figlet = require('figlet');

export default class Figlet extends Command {
    static description = `
        Implements figlet on whatever command you pass it.
    `;

    static examples = [
        `$ igor figlet -t 'wolves in the throne room fucking rock'`,
        `$ igor figlet -t 'big trouble in little china is my favorite movie`
    ];

    static flags = {
        help: flags.help({char: 'h'}),
        text: flags.string({char: 't'})
    };

    static args = [];

    async run() {
        const {flags} = this.parse(Figlet);
        figlet(flags.text, (err:any, data:any) => {
            if (err) {
                alert('Something went wrong...');
                error(err);
                return;
            }
            log(`\n ${data}`);
        });
    }


}