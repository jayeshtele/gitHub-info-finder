import React from "react";

export default function Error({ message }) {
  return (
    <div className="flex h-[88vh] w-screen items-center justify-center text-center">
      <h1 className="text-bold text-3xl">❌ {message} ❌</h1>
    </div>
  );
}
