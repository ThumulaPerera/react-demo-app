import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import './App.css';
import LandingPage from "./LandingPage";
import ProtectedPage from "./ProtectedPage";
import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";
import Callback from "./Callback";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isCheckingLoggedInState, setIsCheckingLoggedInState] = useState(true);

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  const checkIsLoggedIn = () => {
    const encodedUserInfo = sessionStorage.getItem("userInfo");
    if (encodedUserInfo !== null) {
      var userInfo = JSON.parse(atob(encodedUserInfo));
      setIsLoggedIn(true);
      setUserInfo(userInfo);
      console.log(userInfo);
    };
    setIsCheckingLoggedInState(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<LandingPage userInfo={userInfo} />} />
        <Route path="/login/callback" element={<Callback />} />
        <Route path="/protected"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} isCheckingLoggedInState={isCheckingLoggedInState}>
              <ProtectedPage />
            </ProtectedRoute>
          } />
        <Route
          path="*"
          element={
            <Navigate to="/" />
          }
        />
      </Routes>
    </Router>
  )
}

export default App;
