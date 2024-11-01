import { getClient } from ".";

async function updateDateForAUser(userId: number) {
  const client = await getClient();
  try {
    const updateQuery = `
   UPDATE Insta_App
   SET first_name = $1 ,last_name = $2
   Where id = $3
   `;
    const res = await client?.query(updateQuery, [
      "newNameChanged",
      "newNamechanged23",
      userId,
    ]);
    console.log(res?.rows);
  } catch (e) {
    console.log(e);
  } finally {
    client?.end();
  }
}

updateDateForAUser(9);
