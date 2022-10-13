"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = __importDefault(require("../repository"));
class AuthService {
    constructor() {
        this.registerBusiness = (data) => {
            const authRepository = repository_1.default.getInstance();
            const d = authRepository.registerBusiness(data);
            return d;
        };
    }
}
_a = AuthService;
AuthService.getInstance = () => {
    if (_a.authService !== undefined) {
        return _a.authService;
    }
    _a.authService = new AuthService();
    return _a.authService;
};
exports.default = AuthService;
