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
const repository_1 = __importDefault(require("../repository"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    constructor() {
        this.registerBusiness = (data) => __awaiter(this, void 0, void 0, function* () {
            //Encrypt user password
            const encryptedPassword = yield bcrypt_1.default.hash(data.password, 10);
            // Request add User to Repo
            const authRepository = repository_1.default.getInstance();
            const response = yield authRepository.registerBusiness(Object.assign(Object.assign({}, data), { password: encryptedPassword }));
            // Create token
            const token = jsonwebtoken_1.default.sign({
                business_id: response._id,
                business_key: response.business_key,
                email: data.email
            }, "ItsMySecretKey", { expiresIn: "2h" });
            return Object.assign(Object.assign({}, data), { password: null, token });
        });
        this.signIn = (data) => __awaiter(this, void 0, void 0, function* () {
            // Request get User to Repo
            const authRepository = repository_1.default.getInstance();
            const response = yield authRepository.signIn(data);
            // Encrypt Password 
            const encryptResult = yield bcrypt_1.default.compare(data.password, response.password);
            if (!encryptResult) {
                throw new Error("Invalid Credentials");
            }
            // Create token
            const token = jsonwebtoken_1.default.sign({ business_id: response._id, email: response.email }, "ItsMySecretKey", {
                expiresIn: "2h",
            });
            return Object.assign(Object.assign({}, response), { token });
        });
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
