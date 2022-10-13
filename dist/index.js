"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
// app.use(express.json());
app.use(routes_1.default);
app.use('/doc', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(require('./swagger_output.json')));
const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Listening on port ${port}...`));
