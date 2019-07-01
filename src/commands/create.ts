import {Command, flags} from '@oclif/command'
import {log, alert, error} from '../utilities/logger';
import db from '../utilities/db';

// TODO :: expand this so that you can create a new table with a preset number
// of columns OR be able to choose from a list of presets

export default class Create extends Command {
    static description = `
    Create is used to create a new table for logging or metric tracking.  
    Pass a name for the thing you'd like to start tracking along with some basic paramters.
    A new database table is created with a unique identifier, and some base columns
  `;

    static examples = [
        `$ igor create notes 
        `,
        `$ igor create grocery_list
        `
    ]

    static flags = {
        help: flags.help({char: 'h'}),
        list: flags.boolean({char: 'l'})
    }

    static args = [{name: 'table'}]

    async run() {
        const {args, flags} = this.parse(Create)
        
        if (args.table) {
            const tableName:string = args.table.toString();
            
            if (tableName) {
                //check if table exists
                debugger;
                const DB:any = new db();
                let tableExists:boolean = DB.checkTableExists(tableName);
                if (!tableExists) {
                    await DB.createTable(tableName);
                    log(`table ${tableName} created successfully`);
                    log(`add to ${tableName} with commands :: igor add ${tableName} 'some message here'`);
                } else {
                    alert(`table ${tableName} already exists`);
                }
            } else {
                error(`table arg not passed correctly`);
            }
        } else {
            error(`no valid command found`);
        }
    }
}