import mongoose, { Schema } from "mongoose";

const descriptionSchema = new Schema({
  title: String,
  content: String
}, { _id: false });

const companySchema = new Schema({
  type: { type: String, default: 'company' },
  email: String,
  password: String,
  banner: String,
  pfp: String,
  name: { type: String, required: true },
  slogan: String,
  city: String,
  country: String,
  shortDesc: String,

  description: [descriptionSchema],

  field: String,
  workType: String,

  contact: {
    email: String,
    address: String,
    phone: String
  }
}, 
{ timestamps: true });

const Company = mongoose.models.Company || mongoose.model("Company", companySchema);
export default Company;
