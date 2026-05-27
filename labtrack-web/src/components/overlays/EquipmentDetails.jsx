import "./EquipmentDetails.css";

export function EquipmentDetails({ onCloseOverlay }) {
  return (
    <div className="eq-details-container">
      <div className="eq-details-heading">
        <h2 className="details-heading-title">Add Equipment</h2>
        <p className="details-heading-subtitle">Add Mode</p>
      </div>
      <div className="eq-details-body">
        <label className="eq-details-label">Name</label>
        <input
          name="eq-name"
          className="eq-details-input"
          type="text"
          placeholder="enter equipment name (e.g. Microscope, Glass Tube etc.)"
        />
        <label className="eq-details-label">Category</label>
        <input
          name="eq-category"
          className="eq-details-input"
          type="text"
          placeholder="enter category (e.g. Optics, Measurement etc.)"
        />
        <label className="eq-details-label">Location</label>
        <input
          name="eq-location"
          className="eq-details-input"
          type="text"
          placeholder="enter location (e.g. General Lab, Bio Chemistry etc.)"
        />
        <div className="date-status-eff-container">
          <div className="child-date">
            <label className="eq-details-label">Date Acquired</label>
            <input
              name="eq-dateAcq"
              className="eq-details-input date-picker"
              type="date"
            />
          </div>
          <div className="child-status">
            <label className="eq-details-label">Status</label>
            <select id="eq-dets-status">
              <option value="functional">Functional</option>
              <option value="forRepair">For Repair</option>
              <option value="forReplacement">For Replacement</option>
            </select>
          </div>
          <div className="child-eff">
            <label className="eq-details-label">Efficiency</label>
            <input
              name="eq-eff"
              className="eq-details-input number-input"
              type="number"
            />
          </div>
        </div>
        <div className="eq-details-btn-container">
          <button className="details-btn">Save</button>
          <button className="details-btn" onClick={onCloseOverlay}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
