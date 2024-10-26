import { Client } from 'pg'
import { DB_URL } from './config';

export const client = new Client({
    connectionString: DB_URL
});

import {client } from 'pg'
import {DB_Client} from './config';

export const client = new Client({

})
