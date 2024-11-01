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
function getUserViaId(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, _1.getClient)();
        try {
            const getQuery = `
      SELECT * FROM Insta_App
      WHERE id = $1
    `;
            const res = yield (client === null || client === void 0 ? void 0 : client.query(getQuery, [userId]));
            console.log("User data:", res === null || res === void 0 ? void 0 : res.rows[0]);
        }
        catch (e) {
            console.log("Error:", e);
        }
        finally {
            client === null || client === void 0 ? void 0 : client.end();
        }
    });
}
getUserViaId(9);
