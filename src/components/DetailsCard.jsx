import React from "react";

export default function DetailsCard() {
  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <div className="card border-[5px] border-[#010409] p-10 rounded-xl">
        <figure>
          <img
            className="h-[300px] w-[300px] rounded-full border-4 border-[#010409] "
            src={``}
            alt="Avatar"
          />
        </figure>
        <h1 className="text-3xl font-bold mt-5">Name - Jayesh Tele</h1>
        <p className="text-xl font-light my-3">UserName - jayeshtele</p>
        <p className="text-lg">No. of public repos - 16</p>
        <p className="text-lg my-1">No. of public gists  - 16</p>
        <p className="text-lg">Profile created at </p>
      </div>
    </div>
  );
}
