"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controller_1 = __importDefault(require("../controller"));
router.post('/register', (req, res) => {
    // #swagger.tags = ['Auth']
    const { businessName, fullName, address, phone, email, password } = req.body;
    controller_1.default.registerBusiness(req, res);
});
router.post('/signIn', (req, res) => {
    // #swagger.tags = ['Auth']
    const { email, password } = req.body;
    controller_1.default.signIn(req, res);
});
exports.default = router;
