import React, { useState } from "react";
import {
  User,
  X,
  Eye,
  EyeOff,
  RotateCcw,
  Facebook,
  Linkedin,
  Cloud,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateStaffProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    staffCode: "",
    firstName: "",
    lastName: "",
    gender: "",
    birthday: "",
    email: "",
    phone: "",
    workplace: "",
    status: "Working",
    jobPosition: "",
    directManager: "",
    role: "Employee",
    academicLevel: "",
    hourlyRate: "",
    defaultLanguage: "System Default",
    direction: "System Default",
    emailSignature: "",
    otherInformation: "",
    twilioPhoneNumber: "",
    isTwilioWhatsAppEnabled: "",
    password: "",
    // Related information
    domicile: "",
    maritalStatus: "",
    currentAddress: "",
    nation: "",
    placeOfBirth: "",
    religion: "",
    citizenIdentification: "",
    dateOfIssue: "",
    placeOfIssue: "",
    resident: "",
    bankAccountNumber: "",
    bankAccountName: "",
    bankName: "",
    personalTaxCode: "",
    epfNo: "",
    socialSecurityNo: "",
    facebook: "",
    linkedin: "",
    skype: "",
  });
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleClose = () => {
    navigate("/home");
  };

  const handleSubmit = () => {
    console.log("Form data saved successfully");
    navigate("/home");
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <input type="checkbox" id="email2fa" />
        <label htmlFor="email2fa" className="text-sm text-gray-600">
          Enable Email Two Factor Authentication
        </label>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
          <User size={40} className="text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Staff code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.staffCode}
            onChange={(e) => handleChange("staffCode", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <select
            value={formData.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">None selected</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Birthday
          </label>
          <input
            type="date"
            value={formData.birthday}
            onChange={(e) => handleChange("birthday", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full px-3 py-2bg-gray-50rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Workplace
          </label>
          <select
            value={formData.workplace}
            onChange={(e) => handleChange("workplace", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">None selected</option>
            <option value="Bengaluru Office">Bengaluru Office</option>
            <option value="Mumbai Office">Mumbai Office</option>
            <option value="Delhi Office">Delhi Office</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.status}
            onChange={(e) => handleChange("status", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Working">Working</option>
            <option value="On Leave">On Leave</option>
            <option value="Terminated">Terminated</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job position <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.jobPosition}
            onChange={(e) => handleChange("jobPosition", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">None selected</option>
            <option value="HR Associate">HR Associate</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Designer">Designer</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Direct manager
          </label>
          <select
            value={formData.directManager}
            onChange={(e) => handleChange("directManager", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">None selected</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Role
          </label>
          <select
            value={formData.role}
            onChange={(e) => handleChange("role", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Employee">Employee</option>
            <option value="Manager">Manager</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Academic level
          </label>
          <select
            value={formData.academicLevel}
            onChange={(e) => handleChange("academicLevel", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Not required</option>
            <option value="High School">High School</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hourly Rate
          </label>
          <div className="relative">
            <input
              type="number"
              value={formData.hourlyRate}
              onChange={(e) => handleChange("hourlyRate", e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
            />
            <span className="absolute right-3 top-2 text-gray-700">₹</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Default Language
          </label>
          <select
            value={formData.defaultLanguage}
            onChange={(e) => handleChange("defaultLanguage", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="System Default">System Default</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Direction
          </label>
          <select
            value={formData.direction}
            onChange={(e) => handleChange("direction", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="System Default">System Default</option>
            <option value="LTR">LTR</option>
            <option value="RTL">RTL</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Signature
          </label>
          <textarea
            value={formData.emailSignature}
            onChange={(e) => handleChange("emailSignature", e.target.value)}
            rows="3"
            className="w-full px-3 py-2 bg-gray-50 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Other information
          </label>
          <textarea
            value={formData.otherInformation}
            onChange={(e) => handleChange("otherInformation", e.target.value)}
            rows="3"
            className="w-full px-3 py-2 bg-gray-50 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Twilio Phone Number
          </label>
          <input
            type="tel"
            value={formData.twilioPhoneNumber}
            onChange={(e) => handleChange("twilioPhoneNumber", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Is twilio number whats app enabled
          </label>
          <select
            value={formData.isTwilioWhatsAppEnabled}
            onChange={(e) =>
              handleChange("isTwilioWhatsAppEnabled", e.target.value)
            }
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">None selected</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="w-full px-3 py-2 pr-20 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute right-5 top-3 flex justify-center items-center">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-700 hover:text-black cursor-pointer "
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Note: if you populate this field, password will be changed on this
            member.
          </p>
        </div>
      </div>
    </div>
  );

  const renderRelatedInfoTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Domicile
          </label>
          <input
            type="text"
            value={formData.domicile}
            onChange={(e) => handleChange("domicile", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Marital status
          </label>
          <select
            value={formData.maritalStatus}
            onChange={(e) => handleChange("maritalStatus", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">None selected</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current address
          </label>
          <input
            type="text"
            value={formData.currentAddress}
            onChange={(e) => handleChange("currentAddress", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nation
          </label>
          <input
            type="text"
            value={formData.nation}
            onChange={(e) => handleChange("nation", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Place of birth
          </label>
          <input
            type="text"
            value={formData.placeOfBirth}
            onChange={(e) => handleChange("placeOfBirth", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Religion
          </label>
          <input
            type="text"
            value={formData.religion}
            onChange={(e) => handleChange("religion", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Citizen identification
          </label>
          <input
            type="text"
            value={formData.citizenIdentification}
            onChange={(e) =>
              handleChange("citizenIdentification", e.target.value)
            }
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of issue
          </label>
          <input
            type="date"
            value={formData.dateOfIssue}
            onChange={(e) => handleChange("dateOfIssue", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Place of issue
          </label>
          <input
            type="text"
            value={formData.placeOfIssue}
            onChange={(e) => handleChange("placeOfIssue", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Resident
          </label>
          <input
            type="text"
            value={formData.resident}
            onChange={(e) => handleChange("resident", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bank account number
          </label>
          <input
            type="text"
            value={formData.bankAccountNumber}
            onChange={(e) => handleChange("bankAccountNumber", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bank account name
          </label>
          <input
            type="text"
            value={formData.bankAccountName}
            onChange={(e) => handleChange("bankAccountName", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bank name
          </label>
          <input
            type="text"
            value={formData.bankName}
            onChange={(e) => handleChange("bankName", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Personal tax code
          </label>
          <input
            type="text"
            value={formData.personalTaxCode}
            onChange={(e) => handleChange("personalTaxCode", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            EPF No
          </label>
          <input
            type="text"
            value={formData.epfNo}
            onChange={(e) => handleChange("epfNo", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Social Security No
          </label>
          <input
            type="text"
            value={formData.socialSecurityNo}
            onChange={(e) => handleChange("socialSecurityNo", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="inline-flex items-center gap-1">
              <div className="w-4 h-4 rounded flex items-center justify-center">
                <span className="text-white text-xs">
                  <Facebook />
                </span>
              </div>
              Facebook
            </span>
          </label>
          <input
            type="text"
            value={formData.facebook}
            onChange={(e) => handleChange("facebook", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="inline-flex items-center gap-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <span className="text-white text-xs">
                  <Linkedin />
                </span>
              </div>
              LinkedIn
            </span>
          </label>
          <input
            type="text"
            value={formData.linkedin}
            onChange={(e) => handleChange("linkedin", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="inline-flex items-center gap-2">
              <div className="w-4 h-4 rounded flex items-center justify-center">
                <span className="text-white text-xs">
                  <Cloud />
                </span>
              </div>
              Skype
            </span>
          </label>
          <input
            type="text"
            value={formData.skype}
            onChange={(e) => handleChange("skype", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center p-4 z-50">
      <div className="bg-secondary/50 backdrop-blur rounded-xl  w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border border-primary rounded-xl px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">
            Create Staff Profile
          </h2>
          <button
            onClick={() => setCurrentView("list")}
            className="text-black-400 hover:text-gray-600 p-2 bg-secondary/50 rounded-full"
          >
            <X className="cursor-pointer" onClick={handleClose} size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab("profile")}
                className={`pb-2 font-medium cursor-pointer ${
                  activeTab === "profile"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab("related")}
                className={`pb-2 font-medium cursor-pointer ${
                  activeTab === "related"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Related information
              </button>
            </div>
          </div>

          {activeTab === "profile" && renderProfileTab()}
          {activeTab === "related" && renderRelatedInfoTab()}

          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={handleClose}
              className="px-4 py-2 text-white bg-primary border border-primary rounded-xl hover:bg-white hover:text-primary cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-white border border-primary text-primary rounded-xl hover:bg-primary hover:text-white cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStaffProfile;
