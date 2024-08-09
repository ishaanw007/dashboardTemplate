import { ShiftTable } from "@/components/Table/Table";
import React from "react";
import Breadcrumb from "@/components/Global/Bredcrumb";

function page() {
  return (
    <>
      <Breadcrumb title="Table" />
      <ShiftTable></ShiftTable>
    </>
  );
}

export default page;
