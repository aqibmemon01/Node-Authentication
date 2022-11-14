"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = __importDefault(require("./routes"));
const db_1 = require("./db");
const app = (0, express_1.default)();
// app.use(express.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
app.use('/doc', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(require('./swagger_output.json')));
(0, db_1.InitializeDatabase)();
const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Listening on port ${port}...`));
