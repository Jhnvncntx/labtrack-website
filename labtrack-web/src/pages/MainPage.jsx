import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Dashboard } from "../components/Dashboard";
import "./MainPage.css";

export function MainPage() {
  return (
    <div className="main-page-container">
      <div className="sidebar-holder">
        <Sidebar />
      </div>

      <div className="main-header-holder">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}
