import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl text-white font-medium">
        hello <br />
        <span className="text-3xl font-semibold">Utkarsh🫡</span>
      </h1>
      <button className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm">
        Logout
      </button>
    </div>
  );
};

export default Header;
