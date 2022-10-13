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
const db_1 = __importDefault(require("../../../db"));
class BusinessRepository {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            console.log("inside repo getAll");
            const prismaService = db_1.default.getInstance();
            try {
                const response = yield prismaService.business.findMany();
                return response;
            }
            catch (err) {
                console.log("error Business repo getAll", err);
            }
        });
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            console.log("inside business repo create");
            const prismaService = db_1.default.getInstance();
            try {
                const response = yield prismaService.business.create({
                    data
                });
                return response;
            }
            catch (err) {
                console.log("error Business repo create", err);
            }
        });
        this.update = (data) => __awaiter(this, void 0, void 0, function* () {
            console.log("inside business repo update");
            const prismaService = db_1.default.getInstance();
            try {
                const response = yield prismaService.business.update({
                    data,
                    where: {
                        id: data.businessId
                    }
                });
                return response;
            }
            catch (err) {
                console.log("error Business repo update", err);
            }
        });
        this.delete = (data) => __awaiter(this, void 0, void 0, function* () {
            console.log("inside business repo delete");
            const prismaService = db_1.default.getInstance();
            try {
                const response = yield prismaService.business.delete({
                    where: {
                        id: data.businessId
                    }
                });
                return response;
            }
            catch (err) {
                console.log("error Business repo delete", err);
            }
        });
    }
}
_a = BusinessRepository;
BusinessRepository.getInstance = () => {
    if (_a.businessRepository !== undefined) {
        return _a.businessRepository;
    }
    _a.businessRepository = new BusinessRepository();
    return _a.businessRepository;
};
exports.default = BusinessRepository;
