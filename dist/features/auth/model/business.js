"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const businessModelScema = new Schema({
    businessName: { type: String, required: true },
    fullName: { type: String, required: true },
    address: { type: String, default: null },
    phone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
exports.BusinessModel = mongoose_1.default.model("business", businessModelScema);
