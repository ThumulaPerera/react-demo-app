import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Callback from "./Callback";
import Error from "./Error";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

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
  };

  return (
    <Router>
     
      <Routes>
        
        <Route path="/" element={
          <>
             <Navbar isLoggedIn={isLoggedIn} />
             <LandingPage userInfo={userInfo} />
          </>
        }/>

        <Route path="/login/callback" element={<Callback />} />

        <Route path="/error" element={<Error />} />
        
        <Route path="*" element={<Navigate to="/" />}/>
      
      </Routes>
    </Router>
  )
}

export default App;
