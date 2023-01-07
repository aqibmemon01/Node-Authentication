import mongoose from "mongoose";
const Schema = mongoose.Schema;
import { IRegisterBusiness } from '../types/types.dto'

const businessModelScema = new Schema<IRegisterBusiness>({
    businessName: { type: String, required: true },
    fullName: { type: String, required: true },
    address: { type: String, default: null },
    phone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    server:{ type: String, default: null }, // server URL
    business_key:{ type: String, default: null } // business unique key
});
export const BusinessModel = mongoose.model("business", businessModelScema);
