import equipmentsData from "../data/equipments.js";
import { EquipmentData } from "./EquipmentData";
import { Overlay } from "./overlays/Overlay.jsx";
import "./EquipmentsTab.css";
import { useState } from "react";

console.log(equipmentsData);
export function EquipmentsTab() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  // const [items, setItems] = useState(equipmentsData);
  const [showOverlay, setShowOverlay] = useState(false);

  const equipments = equipmentsData.filter((item) => {
    const searchInput = search.toLowerCase();
    const searchResult =
      item.name.toLowerCase().includes(searchInput) ||
      item.category.toLowerCase().includes(searchInput);
    const selectedCategory = category ? item.status === category : true;
    return searchResult && selectedCategory;
  });

  function addEquipment() {
    // const newItem = {
    //   id: 1,
    //   name: "Inverted Fluorescence Scope",
    //   category: "Optics",
    //   location: "Dark Room",
    //   dateAcquired: "2023-01-15",
    //   efficiencyRate: 98.5,
    //   status: "functional",
    //   totalUsageHours: 120.5,
    // };
    setShowOverlay(true);

    // setItems([...items, newItem]);
  }

  return (
    <div className="equipments-container">
      <div className="search-category-btn-container">
        <input
          className="eq-search-input"
          type="text"
          placeholder="search equipment"
          onChange={(e) => setSearch(e.target.value)}
        />
        {console.log(search)}
        <select id="status" onChange={(e) => setCategory(e.target.value)}>
          {console.log(category)}
          <option value="">-- All Status --</option>
          <option value="functional">Functional</option>
          <option value="forRepair">For Repair</option>
          <option value="forReplacement">For Replacement</option>
          <option value="inUse">In Use</option>
        </select>
        <button className="add-eq" onClick={addEquipment}>
          + Add Equipment
        </button>
      </div>
      <div className="table-container">
        <div className="table-heading">
          <div className="w-5">ID</div>
          <div className="w-25">Name</div>
          <div className="w-10">Category</div>
          <div className="w-15">Location</div>
          <div className="w-10">Date Acquired</div>
          <div className="w-6">Efficiency</div>
          <div className="w-11">Status</div>
          <div className="w-7"></div>
          <div className="w-7"></div>
          <div className="2"></div>
        </div>
        <div className="table-body">
          {equipments.map((item) => {
            return <EquipmentData key={item.id} item={item} />;
          })}
        </div>
      </div>
      <Overlay
        show={showOverlay}
        onCloseOverlay={() => setShowOverlay(false)}
      />
      ;
    </div>
  );
}
