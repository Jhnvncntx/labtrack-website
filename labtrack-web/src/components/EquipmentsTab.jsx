import equipmentsData from "../data/equipments.js";
import { EquipmentData } from "./EquipmentData";
import "./EquipmentsTab.css";

console.log(equipmentsData);
export function EquipmentsTab() {
  return (
    <div className="equipments-container">
      <div className="search-category-btn-container">
        <input type="text" placeholder="search equipment" />
        <select id="category">
          <option value="">-- Select --</option>
          <option value="functional">Functional</option>
          <option value="forRepair">For Repair</option>
          <option value="forReplacement">For Replacement</option>
        </select>
        <button className="add-eq">+ Add Equipment</button>
      </div>
      <div className="table-container">
        <div className="table-heading">
          <div className="w-5">ID</div>
          <div className="w-25">Name</div>
          <div className="w-10">Category</div>
          <div className="w-10">Location</div>
          <div className="w-10">Date Acquired</div>
          <div className="w-6">Efficiency</div>
          <div className="w-10">Status</div>
          <div className="w-10"></div>
          <div className="w-10"></div>
        </div>
        <div className="table-body">
          {equipmentsData.map((item) => {
            console.log(`eq ${item.id} ${item}`);
            return <EquipmentData key={item.id} item={item} />;
          })}
          <div className="equipment-row">
            <div className="w-5">00001</div>
            <div className="w-25">Microscope</div>
            <div className="w-10">Optics</div>
            <div className="w-10">General Lab</div>
            <div className="w-10">2026-05-26</div>
            <div className="w-5">100.0</div>
            <div className="w-10">Functional</div>
            <div className="w-10">View</div>
            <div className="w-10">Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
}
