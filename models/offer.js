import mongoose, { Schema } from "mongoose";

const locationSchema = new Schema({
  city: String,
  country: String
}, { _id: false });

const descriptionSchema = new Schema({
  title: String,
  content: String
}, { _id: false });

const fieldSchema = new Schema({
  label: String,
  type: {
    type: String,
    enum: ['text', 'textarea', 'select', 'checkbox', 'radio', 'file']
  },
  options: [String],
  required: Boolean
}, { _id: false });

const formSchema = new Schema({
  fields: [fieldSchema]
}, { _id: false });

const offerSchema = new Schema({
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },

  role: String,
  industry: String,
  salary: String,
  jobType: String,    
  jobLevel: String,   
  jobTime: String,  
  experience: String,

  location: locationSchema,
  description: [descriptionSchema],

  form: formSchema,
  isActive: { type: Boolean, default: true }
}, 
{ timestamps: true });

const Offer = mongoose.models.Offer || mongoose.model("Offer", offerSchema);
export default Offer;
