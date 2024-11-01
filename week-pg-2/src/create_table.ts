import { getClient } from "./index";

async function createTable() {
  const client = await getClient();
  try {
    const createTableQuery = `
    CREATE TABLE Insta_App (
    ID SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
    `;

    const result = await client?.query(createTableQuery);
    console.log("The Result is", result);
  } catch (e) {
    console.log("Something went while creating the instausers Table");
  } finally {
    client?.end();
  }
}
createTable();
