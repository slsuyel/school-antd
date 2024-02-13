import { useState } from "react";
import Button from "../../../components/ui/Button";

const PaymentReports = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = () => {
    // Handle search functionality here
  };

  return (
    <div className={`content-wrapper`}>
      <div className="content-header">
        <div className="my-3">
          <Button className={"btn-nil my-3"} name={"Back"} />
        </div>

        <div className="row bg-white mx-auto">
          <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
            <select
              className="form-control"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">SELECT CLASS</option>
              <option value="all">All</option>
              <option>Six</option>
              <option>Seven</option>
              <option>Eight</option>
              <option>Nine</option>
              <option>Ten</option>
            </select>
          </div>
          <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
            <select
              className="form-control"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">নির্বাচন করুন</option>
              <option value="all">সকল</option>
              <option value="Admission_fee">ভর্তি ফরম ফি</option>
              <option value="session_fee">ভর্তি/সেশন ফি</option>
              <option value="monthly_fee">মাসিক বেতন</option>
              <option value="exam_fee">পরীক্ষার ফি</option>
              <option value="marksheet">মার্কশীট</option>
              <option value="registration_fee">রেজিস্ট্রেশন ফি</option>
              <option value="form_filup_fee">ফরম পূরণ ফি</option>
            </select>
          </div>
          <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
            <input
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
            <button
              type="submit"
              className="btn btn-warning fw-bold text-wrap w-100"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-end mb-4 mx-2">
          <button className="btn btn-nil font-bn text-white">
            <i className="fa-solid fa-download"></i> Report Download
          </button>
        </div>

        <div className="table-responsive">
          <table className="table ">
            <thead>
              <tr>
                <th>SL</th>
                <th>Date</th>
                <th>Transition Id</th>
                <th>Roll</th>
                <th>Name</th>
                <th>Class</th>
                <th>Type</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2024-02-11</td>
                <td>12345</td>
                <td>101</td>
                <td>John Doe</td>
                <td>Ten</td>
                <td>Admission Fee</td>
                <td>Paid</td>
                <td>$500</td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentReports;
