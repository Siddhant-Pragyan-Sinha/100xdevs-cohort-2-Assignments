import { getClient } from ".";

async function doJoinQuery() {
  const client = await getClient();

  const doJoinQuery = `
    SELECT Insta_App.id,Insta_App.first_name,Insta_App.last_name,Insta_App.email, addresses.city,addresses.country, addresses.street, addresses.pincode
    FROM Insta_App
    JOIN addresses ON Insta_App.id = addresses.insta_app_id
    WHERE Insta_App.id = $1
    `;

  const res = await client?.query(doJoinQuery, [4]);
  console.log(res?.rows);
}
doJoinQuery();
