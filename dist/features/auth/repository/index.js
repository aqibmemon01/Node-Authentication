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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const business_1 = require("../model/business");
class AuthRepository {
    constructor() {
        this.registerBusiness = (data) => __awaiter(this, void 0, void 0, function* () {
            const { businessName, fullName, address, email, password, phone } = data;
            console.log("Regiser Business Repo Call");
            try {
                const Business = yield business_1.BusinessModel.create({
                    businessName,
                    fullName,
                    email: email.toLowerCase(),
                    password,
                    address,
                    phone
                });
                return Business;
            }
            catch (err) {
                throw new Error("Error On Business Create " + err);
            }
        });
        this.signIn = (data) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = data;
            console.log("SignIn Repo Call");
            try {
                const User = yield business_1.BusinessModel.findOne({ email }).lean();
                if (!User) {
                    throw new Error("User Not Found");
                }
                return User;
            }
            catch (err) {
                throw new Error("On Business Get =>" + err);
            }
        });
    }
}
_a = AuthRepository;
AuthRepository.getInstance = () => {
    if (_a.authRepository !== undefined) {
        return _a.authRepository;
    }
    _a.authRepository = new AuthRepository();
    return _a.authRepository;
};
exports.default = AuthRepository;
