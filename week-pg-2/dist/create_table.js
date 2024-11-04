"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, index_1.getClient)();
        if (!client) {
            console.error("Failed to connect to the database.");
            return;
        }
        try {
            const createTableQuery = `
      CREATE TABLE IF NOT EXISTS Insta_App (
        ID SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;
            const result = yield client.query(createTableQuery);
            console.log("Insta_App table created:", result);
        }
        catch (e) {
            console.error("Error creating Insta_App table:", e);
        }
        finally {
            yield (client === null || client === void 0 ? void 0 : client.end());
        }
    });
}
createTable();
