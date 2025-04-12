"use client";
import React, { useState } from "react";
import data from "../../data";

export default function CustomDataTable() {
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = [currentPage - 1] * PAGE_SIZE;
  const lastIndex = startIndex + PAGE_SIZE;
  const currentDisplayedData = data.slice(startIndex, lastIndex);
  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  const startIndexPage = startIndex + 1;
  const endIndexPage = Math.min(startIndex + PAGE_SIZE, data.length);

  return (
    <>
      <h2 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
        Recent Orders
      </h2>
      {/* Table */}

      <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg mb-8">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  INVOICE
                </th>
                <th scope="col" className="px-6 py-3">
                  ORDER TIME
                </th>
                <th scope="col" className="px-6 py-3">
                  CUSTOMER NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  METHOD
                </th>
                <th scope="col" className="px-6 py-3">
                  AMOUNT
                </th>
                <th scope="col" className="px-6 py-3">
                  STATUS
                </th>
                <th scope="col" className="px-6 py-3">
                  ACTION
                </th>
                <th scope="col" className="px-6 py-3">
                  INVOICE
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 text-gray-800 dark:text-gray-400 dark:bg-gray-900">
              {currentDisplayedData.map((item, i) => {
                return (
                  <tr key={i} className="px-4 py-2">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <span className="font-semibold uppercase text-xs">
                        {item.invoice}
                      </span>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <span className="text-sm">{item.orderTime}</span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="text-sm">{item.customerName}</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">
                        {item.method}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">
                        {item.amount}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-xs">
                      <span className="font-serif">
                        <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                          {item.status}
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <select className="block w-full  border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-8">
                        <option value="status" hidden="">
                          Delivered
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-right flex justify-end">
                      <div className="flex justify-between items-center">
                        <button
                          type="button"
                          className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                        >
                          <p data-tooltip-id="receipt" className="text-xl">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="6 9 6 2 18 2 18 9"></polyline>
                              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                              <rect x="6" y="14" width="12" height="8"></rect>
                            </svg>
                          </p>
                        </button>
                        <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                          <a href="/order/67d8162fc956c500038d0232">
                            <p data-tooltip-id="view" className="text-xl">
                              <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line
                                  x1="21"
                                  y1="21"
                                  x2="16.65"
                                  y2="16.65"
                                ></line>
                                <line x1="11" y1="8" x2="11" y2="14"></line>
                                <line x1="8" y1="11" x2="14" y2="11"></line>
                              </svg>
                            </p>
                            <div
                              id="view"
                              role="tooltip"
                              className="react-tooltip core-styles-module_tooltip__3vRRp styles-module_tooltip__mnnfp styles-module_dark__xNqje react-tooltip__place-left core-styles-module_closing__sGnxF react-tooltip__closing"
                            >
                              <div className="react-tooltip-arrow core-styles-module_arrow__cvMwQ styles-module_arrow__K0L3T"></div>
                            </div>
                          </a>
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div
          className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white text-gray-500 dark:text-gray-400 dark:bg-gray-800"
          aria-label="Table navigation"
        >
          <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
            <span className="flex items-center font-semibold tracking-wide uppercase">
              {" "}
              Showing {startIndexPage}-{endIndexPage} of {data.length}{" "}
            </span>
          </div>
          <div className="flex mt-2 sm:mt-auto sm:justify-end">
            {" "}
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => {
                return (
                  <li key={index}>
                    <button
                      onClick={() => setCurrentPage(index + 1)}
                      disabled={currentPage === index + 1}
                      className={
                        currentPage === index + 1
                          ? "flex items-center justify-center px-3 h-8 leading-tight text-white bg-blue-500 border border-blue-200 hover:bg-blue-700 hover:text-white dark:bg-emerald-600 dark:border-emerald-700 dark:text-white dark:hover:bg-emerald-600 dark:hover:text-white"
                          : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }
                    >
                      {index + 1}
                    </button>
                  </li>
                );
              })}

              <li>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
