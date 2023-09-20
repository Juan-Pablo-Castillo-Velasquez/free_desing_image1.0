"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const api_controller_1 = require("./controllers/api.controller");
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_controller_1 = require("./controllers/index.controller");
// ...
const app = (0, express_1.default)();
app.set('view cache', false);
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../views'));
app.set('public', path_1.default.join(__dirname, 'public'));
app.set("server", '3000' || "3020");
// Middleware
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
console.log(".");
// ...
// app.use(express)
// Routes
app.use('/', index_routes_1.default);
app.use('/api', api_controller_1.api);
// app.use('/login', login);
// app.use('/entrar', entrar);
app.use('/autos', index_controller_1.autos);
app.use('/about', index_controller_1.about);
app.use('/searchModa', index_controller_1.searchModa);
// Start the server
app.listen(app.get("server"), () => {
    console.log(`server on port  ${app.get("server")}`);
});
