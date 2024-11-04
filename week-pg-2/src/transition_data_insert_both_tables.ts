import { getClient } from ".";

async function transationForTablesInsertOpration(
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  city: string,
  country: string,
  street: string,
  pincode: string
) {
  const client = await getClient();

  try {
    await client?.query(`BEGIN`);
    //start Transation

    const insertUser = `
    INSERT INTO Insta_App (first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING id;
    `;
    const userRes = await client?.query(insertUser, [
      first_name,
      last_name,
      email,
      password,
    ]);
    const userId = userRes?.rows[0].id;
    // Insert user

    // Insert address using the returned user ID
    const insertAddressText = `
            INSERT INTO addresses (Insta_App_Id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
        `;
    await client?.query(insertAddressText, [
      userId,
      city,
      country,
      street,
      pincode,
    ]);

    // Commit transaction
    await client?.query(`COMMIT`);

    console.log("User and address inserted successfully");
  } catch (e) {
    await client?.query("ROLLBACK");
    // Roll back the transaction on error
    console.error("Error during transaction, rolled back.", e);
    throw e;
  } finally {
    await client?.end();
    // Close the client connection
  }
}
transationForTablesInsertOpration(
  "abdul",
  "ld",
  "abdul@example.com",
  "securepassword123",
  "pak",
  "pal",
  "1234 lahor St",
  "10ft"
);
