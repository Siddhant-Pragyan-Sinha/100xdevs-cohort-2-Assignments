import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const insertQuery = `
   INSERT INTO users (username, password, name) VALUES ($1,$2,$3);
   `;
    return await client.query(insertQuery, [username, password, name]);
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const insertQuery = `
   SELECT * from users WHERE id =$1
   `;
    return await client.query(insertQuery, [userId]);
}
