import { getClient } from "./index"; 

async function createAddressTable() {
  const client = await getClient();
  if (!client) {
    console.error("Failed to connect to the database.");
    return;
  }

  try {
    const createAddressTableQuery = `
      DROP TABLE IF EXISTS addresses;
      CREATE TABLE IF NOT EXISTS addresses (
        id SERIAL PRIMARY KEY,
        Insta_App_Id INTEGER NOT NULL,
        city VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (Insta_App_Id) REFERENCES Insta_App(ID) ON DELETE CASCADE
      )
    `;
    const res = await client.query(createAddressTableQuery);
    console.log("Address table created successfully:", res);
  } catch (e) {
    console.error("Error creating Address Table:", e);
  } finally {
    await client?.end();
    console.log("Database connection closed.");
  }
}
 createAddressTable();
