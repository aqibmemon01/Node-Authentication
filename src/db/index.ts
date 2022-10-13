import { PrismaClient } from "@prisma/client";

class PrismaService {
  constructor() {}

  private static prismaService: PrismaClient;

  static getInstance = () => {
    console.log("Prisma Client Initialized");
    if (this.prismaService !== undefined) {
      return this.prismaService;
    }
    this.prismaService = new PrismaClient();
    return this.prismaService;
  };
}

export default PrismaService;