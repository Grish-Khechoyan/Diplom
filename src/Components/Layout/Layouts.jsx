import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";

export default function Layouts() {
  return (
    <div>
      <Aside />
      <Navbar />
      <Header />
      <Outlet />
    </div>
  );
}
