import React from "react";
import Link from "next/link";
import Heading from "@/components/backoffice/Heading";

export default function HeadingPage({ title, linkTitle, hrefTitle }) {
  return (
    <div className="tab tab-enter">
      <Heading title={title} />
      <div className="min-w-0 rounded-lg overflow-hidden shadow-xs bg-white dark:bg-gray-800 mb-5">
        <div className="p-4">
          <form className="py-3  grid gap-4 lg:gap-6 xl:gap-6  xl:flex">
            <div className="flex justify-start w-1/2 xl:w-1/2 md:w-full">
              <div className="flex justify-start w-1/2 xl:w-1/2 md:w-full">
                <div className=" lg:flex md:flex flex-grow-0">
                  <div className="flex">
                    <div className="lg:flex-1 md:flex-1 mr-3 sm:flex-none">
                      <button className="border flex justify-center items-center border-gray-300 hover:border-emerald-400 hover:text-emerald-400  dark:text-gray-300 cursor-pointer h-10 w-20 rounded-md focus:outline-none">
                        <span className="text-xs">Export</span>
                      </button>
                    </div>
                    <div className="lg:flex-1 md:flex-1 mr-3 sm:flex-none">
                      <button className="border flex justify-center items-center border-gray-300 hover:border-emerald-400 hover:text-emerald-400  dark:text-gray-300 cursor-pointer h-10 w-20 rounded-md focus:outline-none">
                        <span className="text-xs">Import</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex  md:flex xl:justify-end xl:w-1/2  md:w-full md:justify-start flex-grow-0">
              <div className="w-full md:w-40 lg:w-40 xl:w-40 mr-3 mb-3 lg:mb-0">
                <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2  text-sm  bg-emerald-500 border border-transparent opacity-50  w-full rounded-md h-12 text-gray-600 btn-gray">
                  <span className="mr-2">Bulk Action</span>
                </button>
              </div>
              <div className="w-full md:w-32 lg:w-32 xl:w-32 mr-3 mb-3 lg:mb-0">
                <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white  border border-transparent opacity-50  w-full h-12 bg-red-500 disabled  btn-red">
                  <span className="mr-2">Delete</span>
                </button>
              </div>
              <div className="w-full md:w-48 lg:w-48 xl:w-48">
                <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-12 w-full">
                  <Link className="mr-2" href={hrefTitle}>
                    {linkTitle}
                  </Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
