import React from "react";

export default function Heading({ title }) {
  return (
    <div className="tab-enter">
      <h2 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
        {title}
      </h2>
    </div>
  );
}
