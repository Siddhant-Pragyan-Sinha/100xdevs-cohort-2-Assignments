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
function createAddressTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, index_1.getClient)();
        if (!client) {
            console.error("Failed to connect to the database.");
            return;
        }
        try {
            const createAddressTableQuery = `
      DROP TABLE IF EXISTS addresses;
      CREATE TABLE IF NOT EXISTS addresses (
        id SERIAL PRIMARY KEY,
        Insta_App_Id INTEGER NOT NULL,
        city VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (Insta_App_Id) REFERENCES Insta_App(ID) ON DELETE CASCADE
      )
    `;
            const res = yield client.query(createAddressTableQuery);
            console.log("Address table created successfully:", res);
        }
        catch (e) {
            console.error("Error creating Address Table:", e);
        }
        finally {
            yield (client === null || client === void 0 ? void 0 : client.end());
            console.log("Database connection closed.");
        }
    });
}
createAddressTable();
