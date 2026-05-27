import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Dashboard } from "../components/Dashboard";
import { EquipmentsTab } from "../components/EquipmentsTab";
import { Records } from "../components/Records";
import { Users } from "../components/Users";
import { Overlay } from "../components/overlays/Overlay";
import "./MainPage.css";

export function MainPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderMainContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "equipments":
        return <EquipmentsTab />;
      case "records":
        return <Records />;
      case "users":
        return <Users />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <div className="main-page-container">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Header activeTab={activeTab} />
        <div className="main-container">{renderMainContent()}</div>
      </div>
      <Overlay />
    </>
  );
}
