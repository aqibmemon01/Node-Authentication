
export interface IRegisterBusiness {
  businessName: string;
  fullName: string;
  address: string;
  phone: number;
  email: string
  password: string;
  server:string;
  business_key:string
}
export interface ISignIn {
  email: string
  password: string;
}

