import { Outlet } from "react-router-dom";
import SideBar from "../../Components/Dashboard/SideBar";
import TopBar from "../../Components/Dashboard/TopBar";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="position-relative ">
      <div className="dashboard d-flex ">
        <SideBar />
        <div className="w-100 ">
          <div className="px-md-3 px-1 mt-2">
            <TopBar />
          </div>
          <div className="px-md-3 px-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
