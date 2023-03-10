import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Administrador({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-800">
        <AdminNavbar />
        {/* Header */}
        <br />
        <div className="px-2 md:px-10 mx-auto w-full ">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
