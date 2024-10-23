import {client } from 'pg'
import {DB_URL} from './config';

export const client = new Client({
    connectingString: DB_URL
});
