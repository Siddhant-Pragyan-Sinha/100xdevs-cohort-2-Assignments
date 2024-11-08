import { getClient } from "../utils";

async function getUserAndTodosSeparateQueries(userId: number) {
  const client = await getClient();
  try {
    // Fetch user details
    const userQuery = `SELECT * FROM users  WHERE id=$1`;
    const userRes = await client.query(userQuery, [userId]);
    const user = userRes.rows[0];
    console.log("User : ", user);

    // Fetch todos for the user
    const todosQuery = ` SELECT * FROM todos Where user_id = $1`;
    const todores = await client.query(todosQuery, [userId]);
    const todos = todores.rows;
    console.log("Todos : ", todos);
  } catch (error) {
    console.log(error);
  } finally {
    client.end();
  }
}

getUserAndTodosSeparateQueries(2);
