import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const handleCreateStaff = () => {
    navigate("/create-staff-profile");
  };

  const handleViewProfile = () => {
    navigate("/staff-profile");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center mt-10 mb-10 gap-10">
          <h1 className="text-2xl font-semibold">Staff Management</h1>
          <button
            className="border rounded-2xl bg-primary text-white px-3 py-2 cursor-pointer hover:bg-primary-dark transition-colors"
            onClick={handleCreateStaff}
          >
            + Create Staff Profile
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <User size={24} className="text-gray-400" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Ananya</h3>
              <p className="text-sm text-gray-600">
                HR Associate • Bengaluru Office
              </p>
            </div>
          </div>
          <button
            onClick={handleViewProfile}
            className="w-full mt-4 px-4 py-2 bg-primary text-white font-semibold rounded-2xl hover:bg-secondary/50 hover:text-primary border-primary border transition-colors cursor-pointer"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
