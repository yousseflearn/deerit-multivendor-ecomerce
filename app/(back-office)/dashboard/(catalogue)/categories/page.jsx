import HeadingPage from "@/components/backoffice/HeadingPage";
import TableAction from "@/components/backoffice/TableAction";
import React from "react";

export default function page() {
  return (
    <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
      {/* Heading */}
      <HeadingPage
        title="Categories"
        linkTitle="Add Category"
        hrefTitle="../dashboard/categories/new"
      />
      {/* Table Action */}
      <TableAction />
      {/* Table */}
      <div className="py-6">
        <h2>Table</h2>
      </div>
    </div>
  );
}
