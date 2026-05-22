import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import bannerImage from "../assets/LabTrackBanner2.png";
import logoutImage from "../assets/Logout.png";
import settingsImage from "../assets/Settings.png";
import dashboardImage from "../assets/Dashboard.png";
import equipmentsImage from "../assets/Equipments.png";
import recordsImage from "../assets/Records.png";
import usersImage from "../assets/Users.png";

export function Sidebar({ activeTab, setActiveTab }) {
  const navigate = useNavigate();

  function gotoLogin() {
    navigate("/");
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-heading-container">
        <img className="header-banner" src={bannerImage} alt="Banner." />
      </div>

      <div className="sidebar-navs-container">
        <div
          className={`sidebar-nav ${activeTab == "dashboard" ? "active-nav" : ""}`}
          onClick={() => setActiveTab("dashboard")}
        >
          <img className="navs-image" src={dashboardImage} />
          <span>Dashboard</span>
        </div>

        <div
          className={`sidebar-nav ${activeTab == "equipments" ? "active-nav" : ""}`}
          onClick={() => setActiveTab("equipments")}
        >
          <img className="navs-image" src={equipmentsImage} />
          <span>Equipments</span>
        </div>

        <div
          className={`sidebar-nav ${activeTab == "records" ? "active-nav" : ""}`}
          onClick={() => setActiveTab("records")}
        >
          <img className="navs-image" src={recordsImage} />
          <span>Records</span>
        </div>

        <div
          className={`sidebar-nav ${activeTab == "users" ? "active-nav" : ""}`}
          onClick={() => setActiveTab("users")}
        >
          <img className="navs-image" src={usersImage} />
          <span>Users</span>
        </div>
      </div>

      <div className="sidebar-footing-container">
        <div className="logout-btn-container" onClick={gotoLogin}>
          <img className="logout-image" src={logoutImage} />
          <span className="logout-text">Exit</span>
        </div>

        <div className="settings-btn-container" onClick={""}>
          <img className="settings-image" src={settingsImage} />
        </div>
      </div>
    </div>
  );
}
