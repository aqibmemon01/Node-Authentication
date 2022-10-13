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
class BuisnessController {
    constructor() {
        this.getAll = (request, response) => __awaiter(this, void 0, void 0, function* () {
            console.log("GetAll Business Controller");
            const businessService = service_1.default.getInstance();
            const finalResponse = yield businessService.getAll();
            console.log(finalResponse);
            response.send(finalResponse);
        });
        this.create = (request, response) => __awaiter(this, void 0, void 0, function* () {
            let { name = "aaa", age = 12 } = request.body;
            console.log("create Business Controller");
            const businessService = service_1.default.getInstance();
            const finalResponse = yield businessService.create(request.body);
            console.log(finalResponse);
            response.send(finalResponse);
        });
        this.update = (request, response) => __awaiter(this, void 0, void 0, function* () {
            console.log("update Business Controller");
            const businessService = service_1.default.getInstance();
            const finalResponse = yield businessService.update(request.body);
            console.log(finalResponse);
            response.send(finalResponse);
        });
        this.delete = (request, response) => __awaiter(this, void 0, void 0, function* () {
            console.log("delete Business Controller");
            const businessService = service_1.default.getInstance();
            const finalResponse = yield businessService.delete(request.body);
            console.log(finalResponse);
            response.send(finalResponse);
        });
        console.log("Buisness Controller Initialized");
    }
}
exports.default = new BuisnessController();
