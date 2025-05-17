import React from "react";
import { X } from "lucide-react";

export default function FormHeader({ title }) {
  return (
    <div className="flex items-center justify-between py-6 px-12 mx-6 my-4 bg-gray-300 text-gray-500 dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button>
        <X />
      </button>
    </div>
  );
}
