import { useState } from "react";
import SearchBox from "../../../components/ui/SearchBox";

const StudentSearch = () => {
  const [classSelection, setClassSelection] = useState("");
  const [statusSelection, setStatusSelection] = useState("");
  const [yearSelection, setYearSelection] = useState("");

  const handleSearch = () => {
    console.log("Class:", classSelection);
    console.log("Status:", statusSelection);
    console.log("Year:", yearSelection);
    // You can perform further actions here, such as making an API call with the selected data
  };

  return (
    <div className="row mx-auto">
      <div className="row col-md-10 mx-auto">
        <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
          <div className="form-group student_class">
            <select
              className="form-control"
              style={{ width: "100%" }}
              value={classSelection}
              onChange={(e) => setClassSelection(e.target.value)}
            >
              <option value="">SELECT</option>
              <option>All</option>
              <option>Six</option>
              <option>Seven</option>
              <option>Eight</option>
              <option>Nine</option>
              <option>Ten</option>
            </select>
          </div>
        </div>
        <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
          <div className="form-group student_class">
            <select
              className="form-control"
              style={{ width: "100%" }}
              value={statusSelection}
              onChange={(e) => setStatusSelection(e.target.value)}
            >
              <option value="">SELECT</option>
              <option value="Active">Active</option>
              <option value="Pending">New Applications</option>
              <option value="Failed">Failed</option>
              <option value="Reject">Reject</option>
              <option value="Approve">Application Approved</option>
              <option value="old">Old Students</option>
            </select>
          </div>
        </div>
        <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
          <div className="form-group student_class">
            <select
              className="form-control"
              style={{ width: "100%" }}
              value={yearSelection}
              onChange={(e) => setYearSelection(e.target.value)}
            >
              <option value="">SELECT</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>
        </div>
        <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
          <button
            type="button"
            className="btn btn-warning text-white"
            onClick={handleSearch}
          >
            SEARCH
          </button>
        </div>
      </div>
      <SearchBox placeholder={"Search By Name"} />
    </div>
  );
};

export default StudentSearch;
