import CustomDataTable from "@/components/backoffice/CustomDataTable";
import DashboardCharts from "@/components/backoffice/DashboardCharts";
import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import React from "react";

export default function page() {
  return (
    <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
      <Heading title="dashboard Overview" />
      <div className="tab tab-enter">
        {/* Large Cards */}
        <LargeCards />
        {/* Small Cards */}
        <SmallCards />
        {/* Charts */}
        <DashboardCharts />
      </div>
      {/* DataTables */}
      <CustomDataTable />
    </div>
  );
}
