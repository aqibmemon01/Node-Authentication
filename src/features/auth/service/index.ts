import AuthRepository from "../repository";
import { IRegisterBusiness } from "../types/types.dto";

interface IAuthService {
  registerBusiness: (data: IRegisterBusiness) => void;
}

class AuthService implements IAuthService {
  constructor() {}

  private static authService: AuthService;

  static getInstance = () => {
    if (this.authService !== undefined) {
      return this.authService;
    }
    this.authService = new AuthService();
    return this.authService;
  };

  registerBusiness = (data: IRegisterBusiness) => {
    const authRepository = AuthRepository.getInstance();
    const d = authRepository.registerBusiness(data);
    return d;
  };

}

export default AuthService;
