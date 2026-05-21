import "./Sidebar.css";
import bannerImage from "../assets/LabTrackBanner2.png";

export function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-heading-container">
          <img
            className="header-banner"
            scr={bannerImage}
            alt="This is the banner."
          />
        </div>

        <div className="sidebar-navs-container">
          <div>Dashboard</div>
          <div>Equipments</div>
          <div>Records</div>
          <div>Users</div>
        </div>

        <div className="sidebar-footing-container">
          This is the sidebar footer.
        </div>
      </div>
    </>
  );
}
