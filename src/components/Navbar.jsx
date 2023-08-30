import React from "react";

export default function Navbar({value, setValue}) {

  return (
    <div className="navbar flex items-center justify-between bg-[#010409] px-10">
      <div className="logo flex items-center py-4 ">
        <figure>
          <img className="w-10" src="/assets/gitHubLogo.png" alt="Logo" />
        </figure>
        <p className="ml-5">{value}</p>
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-[30%] rounded-full py-2 pl-5 text-black"
        type="text"
        placeholder="Search by username to get details..."
      />
    </div>
  );
}
