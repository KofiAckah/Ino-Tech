import React from "react";
import Logo from "./../Images/Logo.svg";

export default function Head() {
  return (
    <div className="m-7 flex justify-between items-center">
      <img src={Logo} alt="Logo" className="inline-block w-36" />
      <nav className="inline-block">
        <ul className="flex gap-10 text-lg">
          <li className="text-white">Portfolio</li>
          <li className="text-white">Innovation</li>
          <li className="text-white">Contact</li>
        </ul>
      </nav>
      <button className="bg-primary px-3 py-1 rounded-full font-semibold">
        Sign In
      </button>
    </div>
  );
}
