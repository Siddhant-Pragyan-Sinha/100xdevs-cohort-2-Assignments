import { getClient } from ".";

async function insertData(email: string) {
  const client = await getClient();
  try {
    const insertDataQuery = `
    INSERT INTO Insta_App (first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4)
    `;

    const res = await client?.query(insertDataQuery, [
      "Haroon",
      "Khanday",
      email,
      "password123",
    ]);
    console.log("success", res?.rows[1]);
  } catch (e) {
    console.log(
      "Something went wrong while inserting the data into the instausers table",
      e
    );
  } finally {
    client?.end();
  }
}
insertData("hk3@example.com");

