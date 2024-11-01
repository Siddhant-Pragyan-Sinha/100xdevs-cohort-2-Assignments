import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgresql://users_owner:U8cAvsz6rmWj@ep-delicate-sound-a5fq55s2.us-east-2.aws.neon.tech/users?sslmode=require"
  );
  await client.connect();
  return client;
}

