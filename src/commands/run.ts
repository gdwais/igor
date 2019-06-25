import {Command, flags} from '@oclif/command'
import {log, alert, error} from '../utilities/logger';
import * as scripts from "../scripts";
const figlet = require('figlet');

export default class Run extends Command {
  static description = `
      Run is used to run scripts.  
      Pass in the name or the script you want to run OR use "--list" (--l) to see availible scripts
    `;

  static examples = [
    `$ igor run list
      this-script
      some-other-script
      yet-another-script
    `,
    `$ igor run this-script
        this is the output from this-script
    `
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    list: flags.boolean({char: 'l'})
  }

  static args = [{name: 'script'}]

  async run() {
    const {args, flags} = this.parse(Run)
    
    const scriptLibrary:any = scripts;
    if (args.script) {
      const scriptName:string = args.script.toString();
      const scriptToRun = scriptLibrary[scriptName] ? scriptLibrary[scriptName] : undefined;
      if (scriptToRun) {
        await scriptToRun();
      } else {
        alert(`script not found`);
      }
    } else if (flags.list) {
      log(`existing scripts ======= `);
      Object.keys(scripts).forEach(s => alert(`${s}`));
      log(`end existing scripts ======= `);
    } else {
      error(`no valid command found`);
    }
  }
}
