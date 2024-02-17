import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="mainContainer">
        <div className="todoContainer">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Layout;
