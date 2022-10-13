import { IRegisterBusiness } from "../types/types.dto";

interface IAuthRepository {
  registerBusiness: (data: IRegisterBusiness) => void;
}

class AuthRepository implements IAuthRepository {
  constructor() { }

  private static authRepository: AuthRepository;

  static getInstance = () => {
    if (this.authRepository !== undefined) {
      return this.authRepository;
    }
    this.authRepository = new AuthRepository();
    return this.authRepository;
  };

  registerBusiness = async(data: IRegisterBusiness) => {
    console.log("Regiser Business Repo Call")
    return {
      businessName: "Abc"
    }
  }
}

export default AuthRepository;
