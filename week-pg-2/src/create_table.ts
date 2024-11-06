import { getClient } from "./index";

async function createTable() {
  const client = await getClient();
  if (!client) {
    console.error("Failed to connect to the database.");
    return;
  }

  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS Insta_App (
        ID SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    const result = await client.query(createTableQuery);
    console.log("Insta_App table created:", result);
  } catch (e) {
    console.error("Error creating Insta_App table:", e);
  } finally {
    await client?.end();
  }
}

createTable();
