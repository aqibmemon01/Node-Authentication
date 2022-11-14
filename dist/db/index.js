"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitializeDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoDB_1 = require("./mongoDB");
const InitializeDatabase = () => {
    mongoose_1.default.connect(mongoDB_1.db_config.mongourl).then((data) => {
        console.log('MongoDB Connected...');
    }).catch((err) => console.log(err));
};
exports.InitializeDatabase = InitializeDatabase;
