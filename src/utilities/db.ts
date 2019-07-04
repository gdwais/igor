
import config from '../config';
import { Client } from 'pg';
import { log, error, alert } from '../utilities/logger';
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
        return await ExecuteQuery(client, sql);
    }

    async insertInto(tableName:string, message:string) {
        const client:Client = new Client(config.postgres);
        const sql:string = `INSERT INTO ${tableName} 
            (text, status) values 
            ('${message}', 'ACTIVE')`;
        await client.connect();
        return await ExecuteQuery(client, sql);
    }

    async setStatus(tableName:string, recordId: number, status: Status) {
        const client:Client = new Client(config.postgres);
        const sql:string = `
            UPDATE ${tableName}
            SET status = '${status}'
            WHERE id=${recordId}`;
        await client.connect();
        return await ExecuteQuery(client, sql);
    }

    async getAllItems(tableName:string) {
        const client:Client = new Client(config.postgres);
        const sql:string = `
            SELECT * FROM ${tableName}`;
        await client.connect();
        return await ExecuteQuery(client, sql);
    }

    async getItemsByStatus(tableName:string, status:Status) {
        const client:Client = new Client(config.postgres);
        const sql:string = `
            SELECT * FROM ${tableName} WHERE status = '${status}'`;
        await client.connect();
        return await ExecuteQuery(client, sql);
    }

    async getLivingItems(tableName:string) {
        const client:Client = new Client(config.postgres);
        const sql:string = `
            SELECT * FROM ${tableName} 
            WHERE status != 'INACTIVE' 
            ORDER BY date_created`;
        await client.connect();
        return await ExecuteQuery(client, sql);
        
    }

    async checkTableExists(tableName:string) {
        const client:Client = new Client(config.postgres);
        const sql:string = `
            SELECT * FROM ${tableName}`;
        client.connect();
        
        let tableExists:boolean = false;
        try {
            const res = await client.query(sql);
            if (res) 
                tableExists = true;
            
        } catch (err) {
            alert(err);
        } finally {
            client.end();
        }
        
        return tableExists;
    }

}

const ExecuteQuery = async (client:Client, sql:string) => {
    let res:any;
    let err:any;
    try {
        res = await client.query(sql);   
    } catch (_err) {
        err = _err;
        error(err);
    } finally {
        client.end();
    }
    
    if (res) {
        return res;
    } else {
        return err;
    }
}
export enum Status {
    Active = 'ACTIVE',
    Pending = 'PENDING',
    InProgress = 'INPROGRESS',
    Completed = 'COMPLETED',
    Inactive = 'INACTIVE'
}


