import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgresql://users_owner:U8cAvsz6rmWj@ep-delicate-sound-a5fq55s2.us-east-2.aws.neon.tech/users?sslmode=require"
  );
  await client.connect();
  return client;
}

// postgresql://users_owner:U8cAvsz6rmWj@ep-delicate-sound-a5fq55s2.us-east-2.aws.neon.tech/users?sslmode=require
// import { Client } from 'pg';

// export async function getClient() {
//     const client = new Client("postgres://wzsxsnxg:LHZ9Cv4QoZ1zctxapkOq2ch672-o9UQe@trumpet.db.elephantsql.com/wzsxsnxg");
//     await client.connect();
//     return client;
// }
