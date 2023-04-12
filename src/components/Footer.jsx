import React from "react";
import footerside1 from "./images/footerside-02.png";
const Footer = () => {
  return (
    <div className="footer-bg bg-cover flex items-center text-white p-8  gap-2 bg-center  h-[100vh]">
      <div className="w-3/6 relative">
        <img src={footerside1} alt="footerside1" className="relative" />
        <p className="absolute top-0 text-4xl font-bold">
          KCB
        </p>
      </div>
      <div className="w-1/6">vbknlm</div>
      <div className="w-1/6">vbknlm</div>
    </div>
  );
};

export default Footer;
