import { useState } from "react";
import Button from "../../../components/ui/Button";

const Attendance = () => {
  const [view, setView] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleViewChange = (event) => {
    setView(event.target.value);
  };

  const handleDateChange = (event) => {
    console.log(selectedDate);
    setSelectedDate(event.target.value);
  };
  return (
    <div className={`content-wrapper`}>
      <div className="content-header">
        <div>
          <Button name={"Back"} className={"btn-nil"} />
        </div>

        <div className=" my-5">
          <div className="row mx-auto">
            <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
              <label>Class :</label>
              <select className="form-control" style={{ width: "100%" }}>
                <option value="">SELECT</option>
                <option>Six</option>
                <option>Seven</option>
                <option>Eight</option>
                <option>Nine</option>
                <option>Ten</option>
              </select>
            </div>
            <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
              <label>View :</label>
              <select
                className="form-control"
                style={{ width: "100%" }}
                onChange={handleViewChange}
              >
                <option value="">select</option>
                <option>Monthly</option>
                <option>Daily</option>
              </select>
            </div>
            {view === "Monthly" && (
              <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                <label>Month:</label>
                <input
                  type="month"
                  className="form-control"
                  style={{ width: "100%" }}
                />
              </div>
            )}
            {view === "Daily" && (
              <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                <label>Date:</label>
                <input
                  type="date"
                  className="form-control"
                  style={{ width: "100%" }}
                  onChange={handleDateChange}
                />
              </div>
            )}
            <div
              className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group "
              style={{ marginTop: "11px" }}
            >
              <label className="d-block mb-0" htmlFor="">
                Filter
              </label>

              <button type="submit" className="btn btn-warning text-wrap">
                Filter
              </button>
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table bs-table table-striped table-bordered text-nowrap ">
            <thead>
              <tr>
                <th>রোল</th>
                <th>নাম</th>
                {[...Array(30)].map((_, index) => (
                  <th key={index}>
                    {index + 1 < 10 ? `০${index + 1}` : `${index + 1}`}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>জনক</td>
                {[...Array(30)].map((_, index) => (
                  <td key={index}>{"Data"}</td>
                ))}
              </tr>
              <tr>
                <td>2</td>
                <td>ববি</td>
                {[...Array(30)].map((_, index) => (
                  <td key={index}>{"Data"}</td>
                ))}
              </tr>
              <tr>
                <td>2</td>
                <td>ববি</td>
                {[...Array(30)].map((_, index) => (
                  <td key={index}>{"Data"}</td>
                ))}
              </tr>
              <tr>
                <td>2</td>
                <td>ববি</td>
                {[...Array(30)].map((_, index) => (
                  <td key={index}>{"Data"}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
