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
class AuthController {
    constructor() {
        this.registerBusiness = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { businessName, fullName, address, phone, email, password } = req.body;
                // Validate Fields
                if (!(email && password && businessName && fullName && phone)) {
                    return res.status(400).send("All input is required");
                }
                const authService = service_1.default.getInstance();
                const d = yield authService.registerBusiness(req.body);
                res.status(200).send(d);
            }
            catch (err) {
                console.log(err);
                return res.status(409).send({
                    status: false,
                    error: "Something went wrong " + err
                });
            }
        });
        this.signIn = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                // Validate Fields
                if (!(email && password)) {
                    return res.status(400).send("All input is required");
                }
                const authService = service_1.default.getInstance();
                const d = yield authService.signIn(req.body);
                res.status(200).send(d);
            }
            catch (err) {
                console.log(err);
                return res.status(409).send({
                    status: false,
                    error: "Error: " + err
                });
            }
        });
        console.log("Auth Controller Initialized");
    }
}
exports.default = new AuthController();
