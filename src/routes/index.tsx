import { Routes, Route, useLocation } from "react-router-dom";
import Dock from "../components/dock/Dock";
import { useState } from "react";

const MyRoutes = () => {
  const [sections] = useState<string[]>([
    "home",
    "email",
    "calendar",
    "profile",
    "settings",
  ]);
  const location = useLocation();
  const pathname = location.pathname.split("/").pop();
  return (
    <>
      <div className={`container ${pathname}`}>
        <Routes>
          <Route path="/" element="Home" />
          <Route path="/home" element="Home" />
          <Route path="/profile" element="Profile" />
          <Route path="/settings" element="Settings" />
          <Route path="/email" element="Email" />
          <Route path="/calendar" element="Calendar" />
        </Routes>
      </div>
      <Dock sections={sections} sizes={[60, 75]}/>
    </>
  );
};

export default MyRoutes;
