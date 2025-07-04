import React, { useState } from 'react';
import { User, X, Eye, EyeOff, RotateCcw, Facebook, Linkedin, MessageCircle, Mail, Phone, GraduationCap, MapPin } from 'lucide-react';

const StaffProfileSystem = () => {
  const [currentView, setCurrentView] = useState('list'); // 'list', 'create', 'profile'
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    staffCode: '',
    firstName: '',
    lastName: '',
    gender: '',
    birthday: '',
    email: '',
    phone: '',
    workplace: '',
    status: 'Working',
    jobPosition: '',
    directManager: '',
    role: 'Employee',
    academicLevel: '',
    hourlyRate: '0.00',
    defaultLanguage: 'System Default',
    direction: 'System Default',
    emailSignature: '',
    otherInformation: '',
    twilioPhoneNumber: '',
    isTwilioWhatsAppEnabled: '',
    password: '',
    // Related information
    domicile: '',
    maritalStatus: '',
    currentAddress: '',
    nation: '',
    placeOfBirth: '',
    religion: '',
    citizenIdentification: '',
    dateOfIssue: '',
    placeOfIssue: '',
    resident: '',
    bankAccountNumber: '',
    bankAccountName: '',
    bankName: '',
    personalTaxCode: '',
    epfNo: '',
    socialSecurityNo: '',
    facebook: '',
    linkedin: '',
    skype: ''
  });

  const [sampleProfile] = useState({
    staffCode: '0001',
    firstName: 'Ananya',
    lastName: 'Sharma',
    gender: 'Female',
    birthday: '12th July 1994',
    email: 'talent@cybercurate.com',
    phone: '+919307059006',
    workplace: 'Bengaluru Office',
    status: 'Full-time',
    jobPosition: 'HR Associate',
    directManager: null,
    role: 'Employee',
    academicLevel: 'B Sc. Graduate',
    hourlyRate: '₹120.00',
    religion: 'Hindu',
    nation: 'India',
    maritalStatus: 'Married',
    citizenIdentification: 'Aadhar Card',
    dateOfIssue: '03rd May 2012',
    placeOfBirth: 'Mumbai',
    currentAddress: '1/2, Half Road, Fullfield, Wonder City, Bengaluru',
    bankAccountNumber: '23498756212',
    bankAccountName: 'Nallurhalli Branch',
    bankName: 'State Bank of India',
    personalTaxCode: 'ABCD1234',
    university: 'Oxford University'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const CreateProfileForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Staff profile Create</h2>
          <button 
            onClick={() => setCurrentView('list')}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-8">
              <button className="pb-2 text-gray-900 border-b-2 border-blue-500 font-medium">
                Profile
              </button>
              <button className="pb-2 text-gray-500 hover:text-gray-700">
                Related information
              </button>
            </div>
          </div>

          {/* Profile Photo and Basic Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <User size={40} className="text-gray-400" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="email2fa" />
                <label htmlFor="email2fa" className="text-sm text-gray-600">
                  Enable Email Two Factor Authentication
                </label>
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
                  onChange={(e) => handleInputChange('staffCode', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">None selected</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Birthday</label>
                <input
                  type="date"
                  value={formData.birthday}
                  onChange={(e) => handleInputChange('birthday', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Workplace</label>
                <select
                  value={formData.workplace}
                  onChange={(e) => handleInputChange('workplace', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  onChange={(e) => handleInputChange('status', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  onChange={(e) => handleInputChange('jobPosition', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">None selected</option>
                  <option value="HR Associate">HR Associate</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="Designer">Designer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Direct manager</label>
                <select
                  value={formData.directManager}
                  onChange={(e) => handleInputChange('directManager', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">None selected</option>
                  <option value="John Doe">John Doe</option>
                  <option value="Jane Smith">Jane Smith</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Employee">Employee</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Academic level</label>
                <select
                  value={formData.academicLevel}
                  onChange={(e) => handleInputChange('academicLevel', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Not required</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate</label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.hourlyRate}
                    onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    step="0.01"
                  />
                  <span className="absolute right-3 top-2 text-gray-400">₹</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Default Language</label>
                <select
                  value={formData.defaultLanguage}
                  onChange={(e) => handleInputChange('defaultLanguage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="System Default">System Default</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Direction</label>
                <select
                  value={formData.direction}
                  onChange={(e) => handleInputChange('direction', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="System Default">System Default</option>
                  <option value="LTR">LTR</option>
                  <option value="RTL">RTL</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Signature</label>
                <textarea
                  value={formData.emailSignature}
                  onChange={(e) => handleInputChange('emailSignature', e.target.value)}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Other information</label>
                <textarea
                  value={formData.otherInformation}
                  onChange={(e) => handleInputChange('otherInformation', e.target.value)}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Twilio Phone Number</label>
                <input
                  type="tel"
                  value={formData.twilioPhoneNumber}
                  onChange={(e) => handleInputChange('twilioPhoneNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Is twilio number whats app enabled</label>
                <select
                  value={formData.isTwilioWhatsAppEnabled}
                  onChange={(e) => handleInputChange('isTwilioWhatsAppEnabled', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full px-3 py-2 pr-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="absolute right-3 top-2 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <RotateCcw size={16} />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Note: if you populate this field, password will be changed on this member.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={() => setCurrentView('list')}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Close
            </button>
            <button
              onClick={() => setCurrentView('profile')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ProfileView = () => (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="text-center mb-6">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={60} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{sampleProfile.firstName}</h2>
              <div className="flex justify-center gap-4 text-blue-600">
                <Facebook size={20} />
                <Linkedin size={20} />
                <MessageCircle size={20} />
                <Mail size={20} />
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gray-400" />
                <span>{sampleProfile.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gray-400" />
                <span>{sampleProfile.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-gray-400" />
                <span>{sampleProfile.university}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                <span>{sampleProfile.jobPosition}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-gray-600">Direct manager:</span>
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={14} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">General information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Staff code</span>
                    <span className="font-medium">{sampleProfile.staffCode}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Staff name</span>
                    <span className="font-medium">{sampleProfile.firstName}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Gender</span>
                    <span className="font-medium">{sampleProfile.gender}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Birthday</span>
                    <span className="font-medium">{sampleProfile.birthday}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Phone</span>
                    <span className="font-medium">{sampleProfile.phone}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Workplace</span>
                    <span className="font-medium">{sampleProfile.workplace}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Status</span>
                    <span className="font-medium">{sampleProfile.status}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Job position</span>
                    <span className="font-medium">{sampleProfile.jobPosition}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Academic level</span>
                    <span className="font-medium">{sampleProfile.academicLevel}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Hourly Rate</span>
                    <span className="font-medium">{sampleProfile.hourlyRate}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Religion</span>
                    <span className="font-medium">{sampleProfile.religion}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Nation</span>
                    <span className="font-medium">{sampleProfile.nation}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Marital status</span>
                    <span className="font-medium">{sampleProfile.maritalStatus}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Related information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Citizen identification</span>
                    <span className="font-medium">{sampleProfile.citizenIdentification}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Date of issue</span>
                    <span className="font-medium">{sampleProfile.dateOfIssue}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Place of birth</span>
                    <span className="font-medium">{sampleProfile.placeOfBirth}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Current address</span>
                    <span className="font-medium">{sampleProfile.currentAddress}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Bank account number</span>
                    <span className="font-medium">{sampleProfile.bankAccountNumber}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Bank account name</span>
                    <span className="font-medium">{sampleProfile.bankAccountName}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Bank name</span>
                    <span className="font-medium">{sampleProfile.bankName}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Personal tax code</span>
                    <span className="font-medium">{sampleProfile.personalTaxCode}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ListView = () => (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Staff Management</h1>
            <button
              onClick={() => setCurrentView('create')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Create New Staff
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Sample Staff Profile</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <User size={24} className="text-gray-400" />
              </div>
              <div>
                <h4 className="font-medium">{sampleProfile.firstName} {sampleProfile.lastName}</h4>
                <p className="text-sm text-gray-600">{sampleProfile.jobPosition} • {sampleProfile.workplace}</p>
              </div>
              <div className="ml-auto">
                <button
                  onClick={() => setCurrentView('profile')}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center py-12 text-gray-500">
            <User size={48} className="mx-auto mb-4 text-gray-300" />
            <p>No additional staff members to display</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === 'list' && <ListView />}
      {currentView === 'create' && <CreateProfileForm />}
      {currentView === 'profile' && <ProfileView />}
    </div>
  );
};

export default StaffProfileSystem;