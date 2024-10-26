import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const insertQuery = `
    INSERT INTO todos (title,description,userId) VALUES ($1,$2,$3);
    `;
    return await client.query(insertQuery,[title,description,userId]);
}   
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
   const insertQuery = `
   UPDATE totdos SET done=true WHERE id =$1
   `;
   return await client.query(insertQuery, [todoId]);
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const insertQuery = `
   SELECT * from todos WHERE userId=$1;
   `;
    return await client.query(insertQuery, [userId]);
}