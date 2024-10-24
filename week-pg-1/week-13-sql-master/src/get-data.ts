
import { getClient } from "./utils";

//getting all users in the data
async function getUsers() {
  const client = await getClient();
  try {
    const selectUsersText = `SELECT * FROM users`;
    const userResponse = await client.query(selectUsersText);
    console.log("Users:");
    for (let user of userResponse.rows) {
      console.log(`ID : ${user.id} , Email : ${user.email}`);
    }
  } catch {
    console.log("something went wrong");
  } finally {
    client.end();
  }
}
getUsers();

//get user via emails only
async function getUserFromEmail(email: string) {
  const client = await getClient();
  try {
    const selectUsersText = `SELECT * FROM users WHERE email = $1`;
    const userResponse = await client.query(selectUsersText, [email]);

    console.log("Single User Details");

    if (userResponse.rows.length === 0) {
      console.log("No user found with the given email.");
      return;
    }

    for (let user of userResponse.rows) {
      console.log(`ID: ${user.id}, Email: ${user.email}`);
    }
  } catch (error) {
    console.error("Something went wrong:", error);
  } finally {
    await client.end();
  }
}
getUserFromEmail("example1@email.com");

async function getTodosForUser(userId: number) {
  const client = await getClient();

  try {
    const selectTodosText = `SELECT * FROM todos WHERE user_id = $1`;
    const todoRes = await client.query(selectTodosText, [userId]);
    console.log(`Todos for  user ID ${userId}:`);

    if (todoRes.rows.length === 0) {
      console.log("No todos.");
      return;
    }
    for (let todo of todoRes.rows) {
      console.log(
        `ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description} , isDone: ${todo.isDone}`
      );
    }
  } catch (error) {
    console.error("Something went wrong:", error);
  } finally {
    await client.end();
  }
}
const userIdToFetch = 2;
getTodosForUser(userIdToFetch);
