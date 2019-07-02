import {Command, flags} from '@oclif/command'
import {log, alert, error} from '../utilities/logger';
import DB from '../utilities/db';
const cTable = require('console.table');

export default class Get extends Command {
  static description = `
      Get is used to list the current active records of a given table.
      
    `;

  static examples = [
    `$ igor print todos
    `,
  ]

  static flags = {
    help: flags.help({char: 'h'})
  }

  static args = [{name: 'table'}]

  async run() {
    const { args } = this.parse(Get)
    const db:DB = new DB();
    if (args.table) {
     const tableName:string = args.table || '';
     const records:any = await db.getAllItems(tableName);
    if (records) {
        console.table(records);
    } else {
        alert('table not found');
    }
    
    } else {
      error(`no valid command found`);
    }
  }
}
