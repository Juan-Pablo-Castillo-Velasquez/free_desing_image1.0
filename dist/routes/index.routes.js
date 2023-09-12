"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
const router = (0, express_1.Router)();
router.get('/', index_controller_1.helloWorld);
router.get('/login', index_controller_1.login);
router.get("/entrar", index_controller_1.entrar);
exports.default = router;
