import React from "react";
import { Routes, Route } from "react-router-dom";
import OnboardingForm from "./pages/OnboardingForm";
import Patient from "./pages/Patient";
import PatientsList from "./pages/PatientsList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingForm />} />
      <Route path="/patients" element={<PatientsList />} />
      <Route path="/patients/:patientId" element={<Patient />} />
    </Routes>
  );
}

export default App;
