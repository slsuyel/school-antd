import { useState } from "react";

import Breadcrumb from "../../../components/ui/Breadcrumb";

const StaffAttendance = () => {
  const [formData, setFormData] = useState({
    view: "",
    date: "",
    dateType: "date",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "view") {
      // If Monthly is selected, set the type of the date input to "month"
      const dateType = value === "Monthly" ? "month" : "date";
      setFormData({ ...formData, view: value, dateType });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={`content-wrapper`}>
      <div className="content-header">
        <Breadcrumb page={" Staff Attendance"} />
        <div className="mx-4">
          <form className="row align-items-center" onSubmit={handleSubmit}>
            <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
              <label htmlFor="view">View:</label>
              <select
                id="view"
                name="view"
                value={formData.view}
                onChange={handleInputChange}
                required
                className="form-control"
              >
                <option value="">Select</option>
                <option value="Monthly">Monthly</option>
                <option value="Daily">Daily</option>
              </select>
            </div>
            <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
              <label htmlFor="date">Date:</label>
              <input
                type={formData.dateType || "date"}
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group customFlex ">
              <label htmlFor="" className="d-block">
                Filter
              </label>
              <button type="submit" className="btn btn-primary btn-block">
                Filter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StaffAttendance;
