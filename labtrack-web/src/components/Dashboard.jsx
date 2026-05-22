import "./Dashboard.css";

export function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-cards-container">
        <div className="dashboard-card">Card 1</div>
        <div className="dashboard-card">Card 2</div>
        <div className="dashboard-card">Card 3</div>
        <div className="dashboard-card">Card 4</div>
        <div className="dashboard-card">Card 5</div>
        <div className="dashboard-card">Card 6</div>
        <div className="dashboard-card">Card 7</div>
        <div className="dashboard-card">Card 8</div>
      </div>

      <div className="dashboard-graphs-container">
        This is the graphs container.
      </div>
    </div>
  );
}
