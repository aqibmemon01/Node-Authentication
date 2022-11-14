import AuthRepository from "../repository";
import { IRegisterBusiness, ISignIn } from "../types/types.dto";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
interface IAuthService {
  registerBusiness: (data: IRegisterBusiness) => void;
  signIn: (data: ISignIn) => void;
}

class AuthService implements IAuthService {
  constructor() { }

  private static authService: AuthService;

  static getInstance = () => {
    if (this.authService !== undefined) {
      return this.authService;
    }
    this.authService = new AuthService();
    return this.authService;
  };

  registerBusiness = async (data: IRegisterBusiness) => {
    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(data.password, 10);

    // Request add User to Repo
    const authRepository = AuthRepository.getInstance();
    const response = await authRepository.registerBusiness({
      ...data,
      password: encryptedPassword
    });

    // Create token
    const token = jwt.sign(
      {
        business_id: response._id,
        email: data.email
      },
      "ItsMySecretKey",
      { expiresIn: "2h" }
    );
    return {
      ...data,
      password: null,
      token
    };
  };

  signIn = async (data: ISignIn) => {
    // Request get User to Repo
    const authRepository = AuthRepository.getInstance();
    const response = await authRepository.signIn(data);
    // Encrypt Password 
    const encryptResult = await bcrypt.compare(data.password, response.password);
    if (!encryptResult) {
      throw new Error("Invalid Credentials")
    }
    // Create token
    const token = jwt.sign(
      { business_id: response._id, email: response.email },
      "ItsMySecretKey",
      {
        expiresIn: "2h",
      }
    );
    return {
      ...response,
      token
    }
  }
}

export default AuthService;
