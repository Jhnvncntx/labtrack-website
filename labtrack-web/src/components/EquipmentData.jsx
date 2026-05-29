import { formatDate } from "./utils/formatDate";
import "./EquipmentData.css";

export function EquipmentData({ item }) {
  const status = (item) => {
    if (item.status === "functional") return "Functional";
    if (item.status === "forRepair") return "For Repair";
    if (item.status === "forReplacement") return "For Replacement";
    if (item.status === "inUse") return "In Use";
  };
  return (
    <>
      <div className="equipment-row">
        <div className="w-5 eq-id eq-data">
          {String(item.id).padStart(5, "0")}
        </div>
        <div className="w-25 eq-name eq-data">{item.name}</div>
        <div className="w-10 eq-categ eq-data">{item.category}</div>
        <div className="w-15 eq-loc eq-data">{item.location}</div>
        <div className="w-10 eq-dateacq eq-data">
          {formatDate(item.dateAcquired)}
        </div>
        <div className="w-6 eq-eff eq-data">{item.efficiencyRate}</div>
        <div className="w-11 eq-status eq-data">{status(item)}</div>
        <div className="w-7 eq-btn1 eq-btn">View</div>
        <div className="w-7 eq-btn2 eq-btn">Delete</div>
      </div>
    </>
  );
}
