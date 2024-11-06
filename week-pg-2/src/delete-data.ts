import { getClient } from ".";

async function deleteAUserWithId(userId: number) {
  const client = await getClient();
  try {
    const deleteQuery = `
        DELETE FROM Insta_App
        WHERE id = $1
    `;
    const res = await client?.query(deleteQuery, [userId]);
    console.log(res?.rows);
    
  } catch (e) {
    console.log(e);
  } finally {
    client?.end();
  }
}
deleteAUserWithId(17);
