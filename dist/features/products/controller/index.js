"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("../service"));
class ProductController {
    constructor() {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log("inside controller");
            const productService = service_1.default.getInstance();
            const d = yield productService.getAll(req.query);
            console.log(d);
            res.send(d);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const productService = service_1.default.getInstance();
            const d = yield productService.create(req.body);
            console.log(d);
            res.status(200).send(d);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const productService = service_1.default.getInstance();
            const d = yield productService.update(req.body);
            console.log(d);
            res.send(d);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const productService = service_1.default.getInstance();
            const d = yield productService.delete(req.body);
            res.send(d);
        });
        console.log("Product Controller Initialized");
    }
}
exports.default = new ProductController();
