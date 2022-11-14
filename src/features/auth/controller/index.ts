import { Request, Response } from "express";
import { BusinessModel } from "../model/business";
import AuthService from "../service";

class AuthController {
  constructor() {
    console.log("Auth Controller Initialized");
  }

  registerBusiness = async (req: Request, res: Response) => {
    try {
      const { businessName, fullName, address, phone, email, password } = req.body;
      // Validate Fields
      if (!(email && password && businessName && fullName && phone)) {
        return res.status(400).send("All input is required");
      }

      const authService = AuthService.getInstance();
      const d = await authService.registerBusiness(req.body);
      res.status(200).send(d);
    }
    catch (err: any) {
      console.log(err)
      return res.status(409).send({
        status: false,
        error: "Something went wrong " + err
      });
    }
  };

  signIn = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      // Validate Fields
      if (!(email && password )) {
        return res.status(400).send("All input is required");
      }

      const authService = AuthService.getInstance();
      const d = await authService.signIn(req.body);
      res.status(200).send(d);
    }
    catch (err: any) {
      console.log(err)
      return res.status(409).send({
        status: false,
        error: "Error: " + err
      });
    }
  }

}
export default new AuthController();
