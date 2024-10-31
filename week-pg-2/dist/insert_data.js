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
function insertData(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, _1.getClient)();
        try {
            const insertDataQuery = `
    INSERT INTO Insta_App (first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4)
    `;
            const res = yield (client === null || client === void 0 ? void 0 : client.query(insertDataQuery, [
                "Haroon",
                "Khanday",
                email,
                "password123",
            ]));
            console.log("success", res === null || res === void 0 ? void 0 : res.rows[1]);
        }
        catch (e) {
            console.log("Something went wrong while inserting the data into the instausers table", e);
        }
        finally {
            client === null || client === void 0 ? void 0 : client.end();
        }
    });
}
insertData("hk3@example.com");
insertData("hk4@example.com");
insertData("hk5@example.com");
insertData("hk6@example.com");
insertData("hk7@example.com");
insertData("hk8@example.com");
insertData("hkddd9@example.com");
insertData("hkddsffna@example.com");
insertData("hksddf@example.com");
insertData("hk9@example.com");
insertData("hk434@example.com");
insertData("hk1213@example.com");
insertData("hk1010@example.com");
insertData("hk10@example.com");
