
import { getClient } from "./utils";

async function doJoinQuery(){
    const client = await getClient();
    
    const doJoinQuery = `
    SELECT Insta_App.id,Insta_App.first_name,Insta_App.last_name,Insta_App.email, 
    `;
}