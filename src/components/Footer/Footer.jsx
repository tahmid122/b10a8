import React from "react";

const Footer = () => {
  return (
    <div className="mx-40 py-24">
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-bold text-3xl">Gadget Heaven</h1>
        <p className="font-medium text-base">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <hr className="opacity-50 text-slate-300 my-8" />
      <div className="flex items-start justify-around">
        <div>
          <h3 className="font-bold text-center text-lg mb-4">Services</h3>
          <ul className="text-base opacity-60 text-center space-y-1">
            <li>
              <a href="#">Product Support</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-center text-lg mb-4">Company</h3>
          <ul className="text-base opacity-60 text-center space-y-1">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-center text-lg mb-4">Legal</h3>
          <ul className="text-base opacity-60 text-center space-y-1">
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
