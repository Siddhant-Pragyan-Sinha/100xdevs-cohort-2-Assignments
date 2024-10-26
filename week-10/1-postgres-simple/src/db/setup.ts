// src/db/__tests__/setup.js
import { client } from '../index';

const CREATE_USERS_TABLE = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL
    );
`;

const CREATE_TODOS_TABLE = `
    CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        title VARCHAR(255) NOT NULL,
        description TEXT,
        done BOOLEAN DEFAULT false
    );
`;

const DROP_TODOS_TABLE = `DROP TABLE IF EXISTS todos;`;
const DROP_USERS_TABLE = `DROP TABLE IF EXISTS users;`;

export async function createTables() {
    const clientConnection = await client.connect();
    try {
        await clientConnection.query('BEGIN');
        await clientConnection.query(CREATE_USERS_TABLE);
        await clientConnection.query(CREATE_TODOS_TABLE);
        await clientConnection.query('COMMIT');
    } catch (error) {
        await clientConnection.query('ROLLBACK');
        console.error('Error creating tables:', error);
        throw error;
    } finally {
        clientConnection.release();
    }
}

export async function dropTables() {
    const clientConnection = await client.connect();
    try {
        await clientConnection.query('BEGIN');
        await clientConnection.query(DROP_TODOS_TABLE);
        await clientConnection.query(DROP_USERS_TABLE);
        await clientConnection.query('COMMIT');
    } catch (error) {
        await clientConnection.query('ROLLBACK');
        console.error('Error dropping tables:', error);
        throw error;
    } finally {
        clientConnection.release();
    }
}
