import React from "react";
import LargeCards from "./LargeCards";

export default function Heading({ title }) {
  return (
    <div>
      <h2 className=" text-2xl font-semibold text-slate-50">{title}</h2>
      <LargeCards />
    </div>
  );
}
