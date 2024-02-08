import { Outlet } from "react-router-dom";
import Aside from "./Aside/Aside";

export default function Layouts() {
  return (
    <div style={{ display: "flex" }}>
      <Aside />

      <div
        style={{
          flex: 1,
          backgroundColor: "#161D30 ",
          height: "100vh",
        }}>
        <Outlet />
      </div>
    </div>
  );
}
