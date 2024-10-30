import { getClient } from "../utils";

// Get all todos for a given user
// Ensure that every user appears at least once (even if they have no todos)

async function getUserAndTodosWithJoin(userId:number) {
  const client = await getClient();
  try {
    const joinQuery = `
      SELECT 
        users.*, 
        todos.title, 
        todos.description, 
        todos.isDone 
      FROM users
      LEFT JOIN todos ON users.id = todos.user_id
      WHERE users.id = $1`;

    const res = await client.query(joinQuery, [userId]);
    const results = res.rows;

    console.log("User and Todos:", results);
  } catch (error) {
    console.error("Error fetching user and todos:", error);
  } finally {
    await client.end(); 
  }
}

getUserAndTodosWithJoin(8);
