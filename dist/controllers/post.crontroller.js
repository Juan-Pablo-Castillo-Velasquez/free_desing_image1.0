"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPost = void 0;
const db_1 = require("../db");
async function getPost(req, res) {
    const conn = await (0, db_1.connect)();
    const post = await conn.query("SELECT * FROM patiene ");
    return res.json(post[0]);
}
exports.getPost = getPost;
