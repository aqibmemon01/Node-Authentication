"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./features/auth/routes/index"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use('/auth/api', index_1.default);
exports.default = router;
