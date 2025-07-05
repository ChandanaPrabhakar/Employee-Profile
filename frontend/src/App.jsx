import React from "react";
import Home from "./pages/Home";
import CreateStaffProfile from "./pages/CreateStaffProfile";
import StaffProfile from "./pages/StaffProfile";
import { Route, Routes, Navigate } from "react-router-dom";

const router = (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="*" element={<Navigate to="/home" replace />} />
    <Route path="/create-staff-profile" element={<CreateStaffProfile />} />
    <Route path="/staff-profile" element={<StaffProfile />} />
  </Routes>
);

const App = () => {
  return <div>{router}</div>;
};

export default App;
