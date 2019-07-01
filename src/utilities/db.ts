import {log, alert, error} from './logger';
import config from '../../config';
import { Client } from 'pg';

export default class DB {
    client:any;
    constructor() {
        this.client = new Client(config.postgres);
    }

    async createTable(tableName:string) {
        const sql:string = `CREATE TABLE ${tableName} (
            id INT GENERATED ALWAYS AS IDENTITY,
            text TEXT NULL,
            status varchar(10) NOT NULL DEFAULT 'ACTIVE',
            date_created  DATE NOT NULL DEFAULT CURRENT_DATE
        )`;
        
        await this.client.connect()
        const res = await this.client.query(sql);
        this.client.end();
    }

    async insertInto(tableName:string, message:string) {
        const sql:string = `INSERT INTO ${tableName} 
            (text, status) values 
            ('${message}', 'ACTIVE')`;
        await this.client.connect();
        const res = await this.client.query(sql);
        this.client.end();
    }

    async setStatus(tableName:string, recordId: Int, status: Status) {
        const sql:string = `
            UPDATE ${tableName}
            SET status = '${status}'
            WHERE id=${recordId}`;
        await this.client.connect();
        const res = await this.client.query(sql);
        this.client.end();
    }

    async getAllItems(tableName:string) {
        const sql:string = `
            SELECT * FROM ${tableName}`;
        await this.client.connect();
        const res = await this.client.query(sql);
        this.client.end();
    }

    async getItemsByStatus(tableName:string, status:status) {
        const sql:string = `
            SELECT * FROM ${tableName} WHERE status = '${status}'`;
        await this.client.connect();
        const res = await this.client.query(sql);
        this.client.end();
    }

    async getLivingItems(tableName:string) {
        const sql:string = `
            SELECT * FROM ${tableName} 
            WHERE status != 'INACTIVE' 
            ORDER BY date_created`;
        await this.client.connect();
        const res = await this.client.query(sql);
        this.client.end();
    }

    checkTableExists(tableName:string, callback) {
        const sql:String = `
            SELECT * FROM ${tableName}`;
        this.client.connect();
        this.client.query(sql, (err, response) => {
            debugger;
            

        });
        
    }

}


export enum Status {
    Active = 'ACTIVE',
    Pending = 'PENDING',
    InProgress = 'INPROGRESS',
    Completed = 'COMPLETED',
    Inactive = 'INACTIVE'
}


