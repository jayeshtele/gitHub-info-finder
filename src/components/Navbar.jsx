import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar({ value, setValue }) {
  return (
    <div className="navbar flex items-center justify-between space-x-5 bg-[#010409] px-3 sm:px-10">
      <div className="logo flex items-center py-5 ">
        <figure>
          <img className="w-10" src="/assets/gitHubLogo.png" alt="Logo" />
        </figure>
        <p className="ml-5">{value}</p>
      </div>
      <div className="flex w-[50%] space-x-1 rounded-full bg-white px-3 py-2 text-black lg:w-[30%]">
        <SearchIcon className="text-gray-700" />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-transparent text-black placeholder:text-xs focus:outline-none"
          type="text"
          placeholder="Search by username to get details..."
        />
      </div>
    </div>
  );
}
