"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const promise_1 = require("mysql2/promise");
async function connect() {
    try {
        const connection = await (0, promise_1.createPool)({
            database: 'examples',
            host: 'localhost',
            user: 'root',
            password: '',
        });
        return connection;
    }
    catch (error) {
        console.error('Database connection error:', error);
        throw error; // Rethrow the error for proper error handling at a higher level
    }
}
exports.connect = connect;
