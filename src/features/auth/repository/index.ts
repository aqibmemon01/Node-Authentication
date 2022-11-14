import { BusinessModel } from "../model/business";
import { IRegisterBusiness, ISignIn } from "../types/types.dto";

interface IAuthRepository {
  registerBusiness: (data: IRegisterBusiness) => void;
  signIn: (data: ISignIn) => void;
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
    const { businessName, fullName, address, email, password, phone } = data;
    console.log("Regiser Business Repo Call");
    try{
      const Business = await BusinessModel.create({
        businessName,
        fullName,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password,
        address,
        phone,
        business_key:"",
        server:""
      });
      return Business
    }
    catch(err){
      throw new Error("Error On Business Create " + err)
    }
  }

  signIn = async(data: ISignIn) => {
    const { email, password } = data;
    console.log("SignIn Repo Call");
    try{
      const User =  await BusinessModel.findOne({ email }).lean();
      if(!User){
        throw new Error("User Not Found")
      }
      return User
    }
    catch(err){
      throw new Error("On Business Get =>" + err)
    }
  }
}

export default AuthRepository;
