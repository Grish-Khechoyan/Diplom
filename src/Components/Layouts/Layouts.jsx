import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";

export default function Layouts() {
  return (
    <div style={{ display: "flex" ,flex:"1" }} >
      
      <Aside />

      <div style={{ flex: "2", backgroundColor: "#161D30",}}>
        <Navbar />
        <Outlet />
        {/* <Header /> */}
      </div>
    </div>
  );
}
