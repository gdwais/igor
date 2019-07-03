import {Command, flags} from '@oclif/command'
import {log, alert, error} from '../utilities/logger';
import DB from '../utilities/db';

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
        const {args, flags} = this.parse(Add);
        const db:DB = new DB();

        if (args.table && flags.text) {
            try {
                log(`inserting ${flags.text} into ${args.table}`);
                await db.insertInto(args.table, flags.text)
                log(`insert completed successfully`);
            } catch (err) {
                error(err);
            }
        } else {
            alert(`args or flags not configured properly`);
        }

    }
}