import React from "react";

export default function Error({ message }) {
  return (
    <div className="w-screen md:w-[70%] lg:[75%] xl:w-[82%] h-screen flex items-center justify-center">
      <h1 className="text-bold text-3xl">❌ {message} ❌</h1>
    </div>
  );
}
