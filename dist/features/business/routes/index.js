"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controller_1 = __importDefault(require("../controller"));
router.get('/business/getAll', (req, res) => {
    // #swagger.tags = ['Business']
    controller_1.default.getAll(req, res);
});
router.post('/business/create', (req, res) => {
    // #swagger.tags = ['Business']
    // let { name, email, password } = req.body;
    controller_1.default.create(req, res);
});
router.put('/business/update', (req, res) => {
    // #swagger.tags = ['Business']
    let { name, email, password, businessId } = req.body;
    controller_1.default.update(req, res);
});
router.delete('/business/delete', (req, res) => {
    // #swagger.tags = ['Business']
    let { businessId } = req.query;
    controller_1.default.delete(req, res);
});
exports.default = router;
