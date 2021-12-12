import React from "react";
import { Routes, Route } from "react-router-dom";
import OnboardingForm from "./OnboardingForm";
import Patient from "./Patient";
import PatientsList from "./PatientsList";
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
