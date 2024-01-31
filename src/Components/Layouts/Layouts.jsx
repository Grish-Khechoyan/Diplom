import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";

export default function Layouts() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div style={{ display: "flex", flex: "1" }}>
        <Aside />
        <div style={{ flex: "2" }}>
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
