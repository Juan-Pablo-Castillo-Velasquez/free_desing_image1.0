"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
const router = (0, express_1.Router)();
router.get('/', index_controller_1.helloWorld);
// router.get('/login',login )
// router.get("/entrar",entrar)
router.get("/autos", index_controller_1.autos);
router.get("/about", index_controller_1.about);
router.get("/searchModa", index_controller_1.searchModa);
exports.default = router;
