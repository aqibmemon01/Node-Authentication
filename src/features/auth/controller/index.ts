import { Request, Response } from "express";
import AuthService from "../service";

class AuthController {
  constructor() {
    console.log("Auth Controller Initialized");
  }

  registerBusiness = async (req: Request, res: Response) => {
    const authService = AuthService.getInstance();
    const d = await authService.registerBusiness(req.body);
    res.status(200).send(d);
  };

}
export default new AuthController();
