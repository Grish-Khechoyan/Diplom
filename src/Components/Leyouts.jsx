import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

export default function Leyouts() {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
}
