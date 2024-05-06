import React, { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/user/home/Home";
import SignUp from "../pages/user/auth/SignUp/SignUp.jsx";
import Login from "../pages/user/auth/Login/Login.jsx";
import Dashboard from "../pages/admin/Dashboard/Dashboard.jsx";
import Context from "../context/context.jsx";
import { Spin } from "antd";
import AdminTrip from "../pages/admin/AdminTrip/AdminTrip.js";
export default function HomeRoute() {
  const { user,loading } = useContext(Context);
  const navigate = useNavigate();
  const NotFoundPage = () => {
    return (
      <div style={{height:"100vh"}}className="d-flex flex-column gap-3  justify-content-center align-items-center">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      </div>
    );
  };
  const chkAuth = ( component, isAdminRoute) => {
    if(loading){
      return <div className="d-flex justify-content-center align-items-center" style={{height:"90vh"}}><Spin></Spin></div>
    }
    if (user) {
      if (isAdminRoute && user?.role !== "admin") {
        return <NotFoundPage/>;
      } else {

        return component;
      }
    } else {
      console.log(user)
      return <NotFoundPage/>;
    }
};

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={chkAuth(<Dashboard />,true)} />
      <Route path="/admin/addtrip" element={chkAuth(<AdminTrip/>,true)} />

    </Routes>
  );
}
