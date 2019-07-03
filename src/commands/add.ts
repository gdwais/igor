import {Command, flags} from '@oclif/command'
import {log, alert, error} from '../utilities/logger';
import * as pg from 'pg';

//TODO :: expand this so that you can specify a note to add to a table passed as an argument

export default class Add extends Command {
    static description = `
        Add is used to insert a row in the appropriate table
    `;
    static examples = [];
    static flags = {
        text: flags.string({char: 't'}),
        help: flags.help({char: 'h'})
    }
    static args = [{ name: 'table'}];

    async run() {
        
    }
}