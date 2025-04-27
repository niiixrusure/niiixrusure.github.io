import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page";
import ResourcesPage from "./pages/resources";
import AboutUsPage from "./pages/about";
import PersonalityTestPage from "./pages/personality-test";
import CommunityPage from "./pages/community";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/personality-test" element={<PersonalityTestPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </Router>
  );
}
