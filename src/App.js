import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import LandingPage from "./LandingPage";
import ProtectedPage from "./ProtectedPage";
import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";

const userInfoEndpoint = "/auth/userinfo";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isCheckingLoggedInState, setIsCheckingLoggedInState] = useState(true);

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  const checkIsLoggedIn = async () => {
    console.log("Checking logged in status");
    fetch(userInfoEndpoint)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("API returned an error. Status: "
            + response.status
            + "("
            + response.statusText
            + ")");
        }
        return response.json();
      })
      .then(jsonData => {
        setIsLoggedIn(true);
        setUserInfo(jsonData);
        setIsCheckingLoggedInState(false);
        console.log(userInfo)
        console.log("Checking logged in status complete");
      })
      .catch(error => {
        setIsCheckingLoggedInState(false);
        console.log("Error fetching logged in status");
        console.log(error);
      })
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<LandingPage userInfo={userInfo} />} />
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
