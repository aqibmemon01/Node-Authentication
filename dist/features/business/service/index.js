"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = __importDefault(require("../repository"));
class BusinessService {
    constructor() {
        this.getAll = () => {
            console.log("inside business service getAll");
            const businessRepository = repository_1.default.getInstance();
            const response = businessRepository.getAll();
            return response;
        };
        this.create = (data) => {
            console.log("inside business service create");
            const businessRepository = repository_1.default.getInstance();
            const response = businessRepository.create(data);
            return response;
        };
        this.update = (data) => {
            console.log("inside business service update");
            const businessRepository = repository_1.default.getInstance();
            const response = businessRepository.update(data);
            return response;
        };
        this.delete = (data) => {
            console.log("inside business service remove");
            const businessRepository = repository_1.default.getInstance();
            const response = businessRepository.delete(data);
            return response;
        };
    }
}
_a = BusinessService;
BusinessService.getInstance = () => {
    if (_a.businessService !== undefined) {
        return _a.businessService;
    }
    _a.businessService = new BusinessService();
    return _a.businessService;
};
exports.default = BusinessService;
