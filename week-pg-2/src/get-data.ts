import { getClient } from ".";

async function getUserViaId(userId: number) {
  const client = await getClient();
  try {
    const getQuery = `
      SELECT * FROM Insta_App
      WHERE id = $1
    `;
    const res = await client?.query(getQuery, [userId]);
    console.log("User data:", res?.rows[0]);
  } catch (e) {
    console.log("Error:", e);
  } finally {
    client?.end();
  }
}
getUserViaId(9);
