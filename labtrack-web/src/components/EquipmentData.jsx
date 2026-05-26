import "./EquipmentsTab.css";

export function EquipmentData({ item }) {
  return (
    <>
      <div className="equipment-row">
        <div className="w-5">{String(item.id).padStart(5, "0")}</div>
        <div className="w-25">{item.name}</div>
        <div className="w-10">{item.category}</div>
        <div className="w-10">{item.location}</div>
        <div className="w-10">{item.dateAcquired}</div>
        <div className="w-5">{item.efficiencyRate}</div>
        <div className="w-10">{item.status}</div>
        <div className="w-10">View</div>
        <div className="w-10">Delete</div>
      </div>
      {console.log(`Equipment ${item.id} has been added.`)}
    </>
  );
}
