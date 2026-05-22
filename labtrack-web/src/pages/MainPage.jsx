import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Dashboard } from "../components/Dashboard";
import "./MainPage.css";

export function MainPage() {
  return (
    <div className="main-page-container">
      <Sidebar>Sidebar</Sidebar>
      <Header>Header</Header>
      <Dashboard>Dashboard</Dashboard>
    </div>
  );
}
