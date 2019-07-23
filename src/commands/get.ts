import {Command, flags} from '@oclif/command'
import {log, alert, error} from '../utilities/logger';
import DB from '../utilities/db';
const Table = require('cli-table');

export default class Get extends Command {
  static description = `
      Get is used to list the current active records of a given table.
      
    `;

  static examples = [
    `$ igor print todos
    `,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    all: flags.boolean({char: 'a'})
  }

  static args = [{
      name: 'table', 
      required: false, 
      description: `name of the table you'd like to create`
    }
]

  async run() {
    const { args, flags } = this.parse(Get)
    const db:DB = new DB();
    debugger;
    if (flags && flags.all === true) {
      const tableNames:any = db.getAllTableNames();
      const tableNameTable:any = new Table({
        head: Object.keys(tableNames[0])
      , colWidths: [40]
      });
      for (let names of tableNames) {
        tableNameTable.push(Object.values(names));
      }
      let tableDump:string = `${tableNameTable.toString()}`;
        log(tableDump);   
    } else if (args.table) {
      const tableName:string = args.table || '';
      const response:any = await db.getLivingItems(tableName);

      if (response && response.rows && response.rows.length > 0) {
        
        const records:{ id: number, text:string, status:string, date_created:Date }[] = response.rows;
        const table:any = new Table({
          head: Object.keys(records[0])
        , colWidths: [10, 100, 10, 40]
        });

        for(let rec of records) {
          table.push(Object.values(rec));
        }
        let stringifyTable:string = `${table.toString()}`;
        log(stringifyTable);
      } else {
          alert('table not found');
      }
    } else {
      error(`no valid command found`);
    }
  }
}
