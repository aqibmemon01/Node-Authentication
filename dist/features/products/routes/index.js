"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const controller_1 = __importDefault(require("../controller"));
router.get('/product/getAll', (req, res) => {
    // #swagger.tags = ['Product']
    let { pageNumber, pageSize } = req.query;
    controller_1.default.getAll(req, res);
});
router.post('/product/create', (req, res) => {
    // #swagger.tags = ['Product']
    let { name, description, image, price, businessId, quantity } = req.body;
    controller_1.default.create(req, res);
});
router.put('/product/update', (req, res) => {
    // #swagger.tags = ['Product']
    let { name, description, image, price, businessId, quantity, productId } = req.body;
    controller_1.default.update(req, res);
});
router.delete('/product/delete', (req, res) => {
    // #swagger.tags = ['Product']
    let { productId } = req.query;
    controller_1.default.delete(req, res);
});
exports.default = router;
