import React from "react";

export default function Heading({ title }) {
  return (
    <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
      {title}
    </h1>
  );
}
