import "./Header.css";
import userProfile from "../assets/user-profile.png";

export function Header({ activeTab }) {
  const titles = {
    dashboard: "DASHBOARD",
    equipments: "EQUIPMENTS",
    records: "RECORDS",
    users: "USERS",
  };

  return (
    <div className="header-container">
      <div className="header-title-container">
        <h1 className="sub-page-title">{titles[activeTab] || "DASHBOARD"}</h1>
      </div>

      <div className="header-user-info-container">
        <h3 className="user-full-name">Jhon Vincent Adolfo</h3>
        <p className="user-role">Administrator</p>
      </div>

      <div className="header-user-profile-container">
        <img
          className="user-profile-image"
          src={userProfile}
          alt="user profile image"
        />
      </div>
    </div>
  );
}
