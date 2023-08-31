import React, { useState } from "react";
import Navbar from "./components/Navbar";
import DetailsCard from "./components/DetailsCard";

export default function App() {
  const [value, setValue] = useState("jayeshtele");

  return (
    <div className="text-white">
      <Navbar value={value} setValue={setValue} />
      <DetailsCard value={value} />
    </div>
  );
}
