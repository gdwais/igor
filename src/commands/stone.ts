// commands related to stone ent billing, hour reporting ex.

import {Command, flags} from '@oclif/command';
import {log, alert, error} from '../utilities/logger';

/**
 * TODO:
 * integrate with asana
 * auto generate timesheets
 * auto update timesheets
 * auto generate invoices from hours reports
 * send hours via email
 * send invoices via email
 */

//
export default class Stone extends Command {
    static description = `
        contains a variety of actions - all related to
        billing, invoicing for Stone side work
    `;

    static flags = {
        help: flags.help({char: 'h'}),
        month: flags.string({char: 'm'})

    }

    static args = [
        {
            name: 'action',
            required: true,
            description: 'the action you would like to perform',
            options: [ 'generate_hours', 'generate_invoice', ]
        }
    ];

    async run() {
        const { args, flags } = this.parse(Stone);

    }


}