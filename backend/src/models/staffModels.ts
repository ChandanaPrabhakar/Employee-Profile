import mongoose, { Document } from "mongoose";

export interface StaffDataInterface extends Document {
  staffCode: string;
  firstName: string;
  lastName: string;
  gender?: string;
  birthday?: string;
  email: string;
  phone?: string;
  workplace?: "Bengaluru Office" | "Hyderabad Office" | "Pune Office" | string;
  status: "Working" | "On Leave" | "Terminated" | string;
  jobPosition:
    | ""
    | "HR Associate"
    | "Software Engineer"
    | "Product Manager"
    | "Designer"
    | string;
  directManager?: "" | "John Doe" | "Jane Smith" | string;
  role?: "Employee" | "Manager" | "Admin" | string;
  academicLevel?:
    | ""
    | "High School"
    | "Bachelor's"
    | "Master's"
    | "PhD"
    | string;
  hourlyRate?: string;
  defaultLanguage?: "System Default" | "English" | "Hindi" | string;
  direction?: "System Default" | "LTR" | "RTL" | string;
  emailSignature?: string;
  otherInformation?: string;
  twilioPhoneNumber?: string;
  isTwilioWhatsAppEnabled?: "Yes" | "No" | string;
  password: string;

  domicile?: string;
  maritalStatus?: string;
  currentAddress?: string;
  nation?: string;
  placeOfBirth?: string;
  religion?: string;
  citizenIdentification?: string;
  dateOfIssue?: string;
  placeOfIssue?: string;
  resident?: string;
  bankAccountNumber?: string;
  bankAccountName?: string;
  bankName?: string;
  personalTaxCode?: string;
  epfNo?: string;
  socialSecurityNo?: string;
  facebook?: string;
  linkedin?: string;
  skype?: string;
}

const StaffProfileSchema = new mongoose.Schema(
  {
    staffCode: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    birthday: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    workplace: {
      type: String,
      enum: ["Bengaluru Office", "Hyderabad Office", "Pune Office"],
    },
    status: {
      type: String,
      enum: ["Working", "On Leave", "Terminated"],
      default: "Working",
      required: true,
    },
    jobPosition: {
      type: String,
      enum: [
        "HR Associate",
        "Software Engineer",
        "Product Manager",
        "Designer",
      ],
      required: true,
    },
    directManager: {
      type: String,
      enum: ["John Doe", "Jane Smith"],
    },
    role: {
      type: String,
      enum: ["Employee", "Manager", "Admin"],
      default: "Employee",
    },
    academicLevel: {
      type: String,
      enum: ["High School", "Bachelor's", "Master's", "PhD"],
    },
    hourlyRate: { type: String, default: "0.00" },
    defaultLanguage: {
      type: String,
      enum: ["System Default", "English", "Hindi"],
      default: "System Default",
    },
    direction: {
      type: String,
      enum: ["System Default", "LTR", "RTL"],
      default: "System Default",
    },
    emailSignature: { type: String },
    otherInformation: { type: String },
    twilioPhoneNumber: { type: String },
    isTwilioWhatsAppEnabled: {
      type: String,
      enum: ["Yes", "No"],
    },
    password: { type: String, required: true },

    domicile: { type: String },
    maritalStatus: { type: String },
    currentAddress: { type: String },
    nation: { type: String },
    placeOfBirth: { type: String },
    religion: { type: String },
    citizenIdentification: { type: String },
    dateOfIssue: { type: String },
    placeOfIssue: { type: String },
    resident: { type: String },
    bankAccountNumber: { type: String },
    bankAccountName: { type: String },
    bankName: { type: String },
    personalTaxCode: { type: String },
    epfNo: { type: String },
    socialSecurityNo: { type: String },
    facebook: { type: String },
    linkedin: { type: String },
    skype: { type: String },
  },
  { timestamps: true }
);

const StaffProfile = mongoose.model<StaffDataInterface>(
  "StaffProfile",
  StaffProfileSchema
);

export default StaffProfile;
