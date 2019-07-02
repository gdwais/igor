
import config from '../../config';
import { Client } from 'pg';

export default class DB {
    
    constructor() {
        
    }

    async createTable(tableName:string) {
        const client:Client = new Client(config.postgres);
        const sql:string = `CREATE TABLE ${tableName} (
            id INT GENERATED ALWAYS AS IDENTITY,
            text TEXT NULL,
            status varchar(10) NOT NULL DEFAULT 'ACTIVE',
            date_created  DATE NOT NULL DEFAULT CURRENT_DATE
        )`;
        
        await client.connect()
        const res = await client.query(sql);
        client.end();
    }

    async insertInto(tableName:string, message:string) {
        const client:Client = new Client(config.postgres);
        const sql:string = `INSERT INTO ${tableName} 
            (text, status) values 
            ('${message}', 'ACTIVE')`;
        await client.connect();
        const res = await client.query(sql);
        client.end();
    }

    async setStatus(tableName:string, recordId: Int, status: Status) {
        const client:Client = new Client(config.postgres);
        const sql:string = `
            UPDATE ${tableName}
            SET status = '${status}'
            WHERE id=${recordId}`;
        await client.connect();
        const res = await client.query(sql);
        client.end();
    }

    async getAllItems(tableName:string) {
        const client:Client = new Client(config.postgres);
        const sql:string = `
            SELECT * FROM ${tableName}`;
        await client.connect();
        const res = await client.query(sql);
        client.end();
    }

    async getItemsByStatus(tableName:string, status:Status) {
        const client:Client = new Client(config.postgres);
        const sql:string = `
            SELECT * FROM ${tableName} WHERE status = '${status}'`;
        await client.connect();
        const res = await client.query(sql);
        client.end();
    }

    async getLivingItems(tableName:string) {
        const client:Client = new Client(config.postgres);
        const sql:string = `
            SELECT * FROM ${tableName} 
            WHERE status != 'INACTIVE' 
            ORDER BY date_created`;
        await client.connect();
        const res = await client.query(sql);
        client.end();
    }

    checkTableExists(tableName:string):boolean {
        const client:Client = new Client(config.postgres);
        const sql:string = `
            SELECT * FROM ${tableName}`;
        client.connect();
        const res = await client.query(sql);
        debugger;
        let tableExists:boolean = false;
        client.end();
        return tableExists;
    }

}


export enum Status {
    Active = 'ACTIVE',
    Pending = 'PENDING',
    InProgress = 'INPROGRESS',
    Completed = 'COMPLETED',
    Inactive = 'INACTIVE'
}


