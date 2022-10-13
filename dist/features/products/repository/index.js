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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../../db/index"));
class ProductRepository {
    constructor() {
        this.getAll = (data) => __awaiter(this, void 0, void 0, function* () {
            let { pageNumber = 1, pageSize = 20, businessId = "" } = data;
            const prismaService = index_1.default.getInstance();
            try {
                const response = yield prismaService.products.findMany({
                    take: Number(pageSize),
                    skip: (pageNumber - 1) * pageSize,
                    // where: {
                    //   businessId: businessId,
                    // },
                });
                return response;
            }
            catch (error) {
                console.log(error, "error");
            }
        });
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            console.log("inside repo, create route");
            const prismaService = index_1.default.getInstance();
            try {
                const response = yield prismaService.products.create({
                    data: data,
                });
                return response;
            }
            catch (error) {
                console.log("error", error);
            }
        });
        this.update = (data) => {
            const prismaService = index_1.default.getInstance();
            try {
                const response = prismaService.products.update({
                    data: data,
                    where: {
                        id: data.productId,
                    },
                });
                return response;
            }
            catch (error) {
                console.log(error, "error");
            }
        };
        this.delete = (data) => {
            const prismaService = index_1.default.getInstance();
            try {
                const response = prismaService.products.delete({
                    where: {
                        id: data.productId,
                    },
                });
                return response;
            }
            catch (error) {
                console.log("error", error);
            }
        };
    }
}
_a = ProductRepository;
ProductRepository.getInstance = () => {
    if (_a.productRepository !== undefined) {
        return _a.productRepository;
    }
    _a.productRepository = new ProductRepository();
    return _a.productRepository;
};
exports.default = ProductRepository;
