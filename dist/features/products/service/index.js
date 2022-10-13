"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../repository/index"));
class ProductService {
    constructor() {
        this.getAll = (data) => {
            //Data prep for db.
            console.log("inside service");
            const productRepository = index_1.default.getInstance();
            const d = productRepository.getAll(data);
            return d;
        };
        this.create = (data) => {
            const productRepository = index_1.default.getInstance();
            const d = productRepository.create(data);
            return d;
        };
        this.update = (data) => {
            const productRepository = index_1.default.getInstance();
            const d = productRepository.update(data);
            return d;
        };
        this.delete = (data) => {
            const productRepository = index_1.default.getInstance();
            const d = productRepository.delete(data);
            return d;
        };
    }
}
_a = ProductService;
ProductService.getInstance = () => {
    if (_a.productService !== undefined) {
        return _a.productService;
    }
    _a.productService = new ProductService();
    return _a.productService;
};
exports.default = ProductService;
