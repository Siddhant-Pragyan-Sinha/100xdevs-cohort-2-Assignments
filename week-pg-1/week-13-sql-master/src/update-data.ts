import { getClient } from "./utils";

async function updateTodo(todoId: number) {
  const client = await getClient();
  try {
    const updateTodoText = `UPDATE todos SET isDone = $1 WHERE id = $2`;
    await client.query(updateTodoText, [true, todoId]);
    console.log(`Todo with ID ${todoId} upate to done!!!`);
  } catch (error) {
    console.log(error);
  } finally {
    client.end();
  }
}

const todoIdToUpdate = 2;
updateTodo(todoIdToUpdate);

async function updateTodoWithDescription(
  todoId: number,
  newDescription: string
) {
  const client = await getClient();
  try {
    const updateTodoText = `UPDATE todos SET description = $1 WHERE id = $2`;
    await client.query(updateTodoText, [newDescription, todoId]);
    console.log(`Todo with ID ${todoId} upate to done!!!`);
  } catch (error) {
    console.log(error);
  } finally {
    client.end();
  }
}

const newDescription = "Haroon Khanday did it";
updateTodoWithDescription(2, newDescription);
