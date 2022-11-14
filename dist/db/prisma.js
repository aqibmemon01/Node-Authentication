"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class PrismaService {
    constructor() { }
}
_a = PrismaService;
PrismaService.getInstance = () => {
    console.log("Prisma Client Initialized");
    if (_a.prismaService !== undefined) {
        return _a.prismaService;
    }
    _a.prismaService = new client_1.PrismaClient();
    return _a.prismaService;
};
exports.default = PrismaService;
