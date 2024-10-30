import { getClient } from "./utils";

async function createEntries() {
  const client = await getClient();

  try {
    const insertUserText = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id`;
    const userValues = ["example10111@email.com", "hashed_password_here"];
    let response = await client.query(insertUserText, userValues);

    if (response.rows.length === 0) {
      throw new Error("User insertion failed. No ID returned.");
    }

    const insertTodoText = `INSERT INTO todos (title, description, user_id, isDone) VALUES ($1, $2, $3, $4) RETURNING id`;
    const todoValues = ["example1011", "example10111", response.rows[0].id, false];
    await client.query(insertTodoText, todoValues);

    console.log("Entries created!");
  } catch (error) {
    console.error("Error creating entries:", error);
  } finally {
    await client.end(); 
  }
}

createEntries();

