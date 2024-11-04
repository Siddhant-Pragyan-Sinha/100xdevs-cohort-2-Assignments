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
function doJoinQuery() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, _1.getClient)();
        const doJoinQuery = `
    SELECT Insta_App.id,Insta_App.first_name,Insta_App.last_name,Insta_App.email, addresses.city,addresses.country, addresses.street, addresses.pincode
    FROM Insta_App
    JOIN addresses ON Insta_App.id = addresses.insta_app_id
    WHERE Insta_App.id = $1
    `;
        const res = yield (client === null || client === void 0 ? void 0 : client.query(doJoinQuery, [4]));
        console.log(res === null || res === void 0 ? void 0 : res.rows);
    });
}
doJoinQuery();
