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
const _1 = require(".");
function transationForTablesInsertOpration(first_name, last_name, email, password, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, _1.getClient)();
        try {
            yield (client === null || client === void 0 ? void 0 : client.query(`BEGIN`));
            //start Transation
            const insertUser = `
    INSERT INTO Insta_App (first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING id;
    `;
            const userRes = yield (client === null || client === void 0 ? void 0 : client.query(insertUser, [
                first_name,
                last_name,
                email,
                password,
            ]));
            const userId = userRes === null || userRes === void 0 ? void 0 : userRes.rows[0].id;
            // Insert user
            // Insert address using the returned user ID
            const insertAddressText = `
            INSERT INTO addresses (Insta_App_Id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
        `;
            yield (client === null || client === void 0 ? void 0 : client.query(insertAddressText, [
                userId,
                city,
                country,
                street,
                pincode,
            ]));
            // Commit transaction
            yield (client === null || client === void 0 ? void 0 : client.query(`COMMIT`));
            console.log("User and address inserted successfully");
        }
        catch (e) {
            yield (client === null || client === void 0 ? void 0 : client.query("ROLLBACK"));
            // Roll back the transaction on error
            console.error("Error during transaction, rolled back.", e);
            throw e;
        }
        finally {
            yield (client === null || client === void 0 ? void 0 : client.end());
            // Close the client connection
        }
    });
}
transationForTablesInsertOpration("abdul", "ld", "abdul@example.com", "securepassword123", "pak", "pal", "1234 lahor St", "10ft");
