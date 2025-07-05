import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building,
  GraduationCap,
  CreditCard,
  FileText,
  Users,
  Facebook,
  Linkedin,
  Cloud,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const StaffProfile = () => {
  const [activeTab, setActiveTab] = useState("general");

  const staffData = {
    general: {
      staffCode: "0001",
      staffName: "Ananya",
      gender: "Female",
      birthday: "12th July 1994",
      phone: "+919307059006",
      workplace: "Bengaluru Office",
      status: "Full-time",
      jobPosition: "Job Position",
      academicLevel: "B Sc. Graduate",
      hourlyRate: "₹120.00",
      religion: "Hindu",
      nation: "India",
      maritalStatus: "Married",
    },
    related: {
      citizenIdentification: "Aadhar Card",
      dateOfIssue: "03rd May 2012",
      placeOfBirth: "Mumbai",
      currentAddress: "1/2, Half Road, Fullfield, Wonder City, Bengaluru",
      bankAccountNumber: "23498756421Z",
      bankAccountName: "Nallurhalli Branch",
      bankName: "State Bank of India",
      personalTaxCode: "ABCD1234",
    },
    contact: {
      email: "talent@cybercurate.com",
      phone: "+919307059006",
      university: "Oxford University",
      position: "HR Associate",
    },
  };

  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/home");
  };

  const InfoCard = ({ icon: Icon, label, value, fullWidth = false }) => (
    <div
      className={`${fullWidth ? "col-span-2" : ""} bg-gray-50 rounded-2xl p-3`}
    >
      <div className="flex items-center gap-2 mb-1">
        <Icon className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-600">{label}</span>
      </div>
      <p className="text-sm text-gray-900 ml-6">{value}</p>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white mt-10">
      <div className="flex justify-end p-4">
        <button
          onClick={() => setCurrentView("list")}
          className="text-black-400 hover:text-gray-600  bg-secondary/50 rounded-full p-2"
        >
          <X className="cursor-pointer" onClick={handleClose} size={24} />
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-secondary/50 border-primary rounded-2xl shadow-md p-6 border">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <User className="h-12 w-12 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Ananya</h2>

              <div className="flex gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="text-white text-xs">
                    <Facebook />
                  </span>
                </div>
                <div className="w-8 h-8  flex items-center justify-center">
                  <span className="text-white text-xs">
                    <Linkedin />
                  </span>
                </div>
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="text-white text-xs">
                    <Cloud />
                  </span>
                </div>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Mail className="text-white text-xs" />
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {staffData.contact.email}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {staffData.contact.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {staffData.contact.university}
                </span>
              </div>
              <div className="text-sm font-medium text-gray-900">
                {staffData.contact.position}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600">
                  Direct manager:
                </span>
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-secondary/50 rounded-2xl shadow-md border border-primary">
            <div className="">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab("general")}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                    activeTab === "general"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  General information
                </button>
                <button
                  onClick={() => setActiveTab("related")}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                    activeTab === "related"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Related information
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === "general" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoCard
                    icon={FileText}
                    label="Staff code"
                    value={staffData.general.staffCode}
                  />
                  <InfoCard
                    icon={User}
                    label="Staff name"
                    value={staffData.general.staffName}
                  />
                  <InfoCard
                    icon={Users}
                    label="Gender"
                    value={staffData.general.gender}
                  />
                  <InfoCard
                    icon={Calendar}
                    label="Birthday"
                    value={staffData.general.birthday}
                  />
                  <InfoCard
                    icon={Phone}
                    label="Phone"
                    value={staffData.general.phone}
                  />
                  <InfoCard
                    icon={Building}
                    label="Workplace"
                    value={staffData.general.workplace}
                  />
                  <InfoCard
                    icon={FileText}
                    label="Status"
                    value={staffData.general.status}
                  />
                  <InfoCard
                    icon={Building}
                    label="Job position"
                    value={staffData.general.jobPosition}
                  />
                  <InfoCard
                    icon={GraduationCap}
                    label="Academic level"
                    value={staffData.general.academicLevel}
                  />
                  <InfoCard
                    icon={CreditCard}
                    label="Hourly Rate"
                    value={staffData.general.hourlyRate}
                  />
                  <InfoCard
                    icon={FileText}
                    label="Religion"
                    value={staffData.general.religion}
                  />
                  <InfoCard
                    icon={MapPin}
                    label="Nation"
                    value={staffData.general.nation}
                  />
                  <InfoCard
                    icon={Users}
                    label="Marital status"
                    value={staffData.general.maritalStatus}
                    fullWidth
                  />
                </div>
              )}

              {activeTab === "related" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoCard
                    icon={CreditCard}
                    label="Citizen identification"
                    value={staffData.related.citizenIdentification}
                  />
                  <InfoCard
                    icon={Calendar}
                    label="Date of issue"
                    value={staffData.related.dateOfIssue}
                  />
                  <InfoCard
                    icon={MapPin}
                    label="Place of birth"
                    value={staffData.related.placeOfBirth}
                  />
                  <InfoCard
                    icon={MapPin}
                    label="Current address"
                    value={staffData.related.currentAddress}
                    fullWidth
                  />
                  <InfoCard
                    icon={CreditCard}
                    label="Bank account number"
                    value={staffData.related.bankAccountNumber}
                  />
                  <InfoCard
                    icon={Building}
                    label="Bank account name"
                    value={staffData.related.bankAccountName}
                  />
                  <InfoCard
                    icon={Building}
                    label="Bank name"
                    value={staffData.related.bankName}
                  />
                  <InfoCard
                    icon={FileText}
                    label="Personal tax code"
                    value={staffData.related.personalTaxCode}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffProfile;
