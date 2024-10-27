import { client } from "..";

// Function to create a new todo for a user
export async function createTodo(userId, title, description) {
    const result = await client.query(`
        INSERT INTO todos (user_id, title, description, done) 
        VALUES ($1, $2, $3, $4) 
        RETURNING id, title, description, done;
    `, [userId, title, description, false]);

    return {
        id: result.rows[0].id,
        title: result.rows[0].title,
        description: result.rows[0].description,
        done: result.rows[0].done
    };
}

// Function to mark a todo as done
export async function updateTodo(todoId) {
    const result = await client.query(`
        UPDATE todos 
        SET done = true 
        WHERE id = $1 
        RETURNING id, title, description, done;
    `, [todoId]);

    if (result.rows.length === 0) {
        throw new Error(`Todo with ID ${todoId} not found.`);
    }

    return {
        id: result.rows[0].id,
        title: result.rows[0].title,
        description: result.rows[0].description,
        done: result.rows[0].done
    };
}

// Function to get all todos for a user
export async function getTodos(userId) {
    const result = await client.query(`
        SELECT id, title, description, done 
        FROM todos 
        WHERE user_id = $1;
    `, [userId]);

    return result.rows.map(row => ({
        id: row.id,
        title: row.title,
        description: row.description,
        done: row.done
    }));
}
