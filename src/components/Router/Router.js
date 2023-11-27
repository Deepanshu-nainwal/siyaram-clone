import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
// import Header from "../Header/Header";
// import Body from "../Body/Body";

import { Outlet } from "react-router-dom";
function Router(props) {
  const [id, setId] = useState("");
  const idTaker = (data) => {
    setId(data);
    // console.log(id);
  };
  return (
    <div>
      <Navbar takeIdInNavbar={idTaker} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default Router;
