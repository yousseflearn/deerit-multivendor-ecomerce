import React from "react";
import { DownloadIcon, Search, Trash2 } from "lucide-react";
import Link from "next/link";

export default function TableAction() {
  return (
    <div className="min-w-0 rounded-lg overflow-hidden shadow-xs bg-white dark:bg-gray-800 mb-5">
      <div className="p-4">
        <form className="py-3  grid gap-4 lg:gap-6 xl:gap-6  xl:flex">
          <div className="lg:flex  md:flex xl:justify-end xl:w-1/5  md:w-full md:justify-end flex-grow-0">
            <div className="w-full md:w-32 lg:w-32 xl:w-32 mr-3 mb-3 lg:mb-0">
              <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white  border border-transparent   w-full h-12 bg-emerald-500 disabled  ">
                <DownloadIcon />
                <span className="p-2">Import</span>
              </button>
            </div>
          </div>
          <div className="w-full ">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search className="w-4  text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
                placeholder="Search ..."
                required
              />
            </div>
          </div>
          <div className="lg:flex  md:flex xl:justify-end xl:w-1/5  md:w-full md:justify-end flex-grow-0">
            <div className="w-full md:w-32 lg:w-32 xl:w-32 mr-3 mb-3 lg:mb-0">
              <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white  border border-transparent  w-full h-12 bg-red-500 disabled  btn-red">
                <Trash2 />
                <span>Bulk Delete</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
