import { Client } from "pg";
export async function getClient() {
  const client = new Client(
    "postgresql://users_owner:U8cAvsz6rmWj@ep-delicate-sound-a5fq55s2.us-east-2.aws.neon.tech/users?sslmode=require"
  );
  try {
    await client.connect();
    console.log("Database connect successfully");
    return client;
  } catch (e) {
    console.log("Could not connect to the Database");
  }
}
// getClient();  for test purpose
