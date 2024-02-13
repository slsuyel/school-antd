import { useState } from "react";
import Button from "../../../components/ui/Button";
import MarksheetInfo from "./MarksheetInfo";

const MarkSheet = () => {
  const [classValue, setClassValue] = useState("");
  const [examType, setExamType] = useState("");
  const [group, setGroup] = useState("");
  const [year, setYear] = useState("");
  const [roll, setRoll] = useState("");

  const handleSearch = () => {
    // Handle search functionality here
  };

  return (
    <div>
      <div className="my-3">
        <Button name={"Back"} className={"btn-nil"} />
      </div>
      <div className="row bg-white  mx-auto">
        <div className="col-md-6">
          <div className="form-group ">
            <label>Class:</label>
            <select
              className="form-control"
              style={{ width: "100%" }}
              value={classValue}
              onChange={(e) => setClassValue(e.target.value)}
            >
              <option value="">SELECT</option>
              <option>Six</option>
              <option>Seven</option>
              <option>Eight</option>
              <option>Nine</option>
              <option>Ten</option>
            </select>
          </div>
        </div>
        {["Nine", "Ten"].includes(classValue) && (
          <div className="col-md-6">
            <div className="form-group">
              <label>Group:</label>
              <select
                id="group"
                className="form-control"
                style={{ width: "100%" }}
                value={group}
                onChange={(e) => setGroup(e.target.value)}
              >
                <option value="">select</option>
                <option>Science</option>
                <option>Humanities</option>
              </select>
            </div>
          </div>
        )}
        <div className="col-md-6">
          <div className="form-group">
            <label>Exam Type:</label>
            <select
              id="ExamType"
              className="form-control"
              style={{ width: "100%" }}
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
            >
              <option value="">select</option>
              <option>Half_yearly_examination</option>
              <option>Half_yearly_evaluation</option>
              <option>Annual Examination</option>
              <option>Annual_assessment</option>
              <option>Model_test_exam</option>
              <option>Pre_selection_examination</option>
              <option>Selective_Exam</option>
              <option>Continuous_assessment</option>
              <option>Summative_Assessment</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Year:</label>
            <select
              id="Subject"
              className="form-control"
              style={{ width: "100%" }}
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">SELECT</option>
              {Array.from({ length: 10 }, (_, i) => 2028 - i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group ">
            <label>Roll:</label>
            <input
              type="number"
              id="date"
              className="form-control"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-3 my">
          <div className="form-group ">
            <input
              type="submit"
              value="Search"
              className="btn btn-warning"
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>

      <MarksheetInfo />
    </div>
  );
};

export default MarkSheet;
