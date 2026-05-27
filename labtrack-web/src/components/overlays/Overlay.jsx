import { EquipmentDetails } from "./EquipmentDetails";
import "./Overlay.css";

export function Overlay({ show, onCloseOverlay }) {
  return (
    <div className={`overlay-container ${show ? "show-overlay" : ""}`}>
      <EquipmentDetails onCloseOverlay={onCloseOverlay} />
      {/* Future Overlay Contents */}
    </div>
  );
}
