import { useState } from "react";
import Button from "../../../components/ui/Button";
import Breadcrumb from "../../../components/ui/Breadcrumb";
// import Button from "../../../components/ui/Button"

const ApplicationResult = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [groupVisible, setGroupVisible] = useState(false);
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Student A",
      class: "Nine",
      group: "Science",
      fatherName: "Father A",
      motherName: "Mother A",
      address: "Address A",
      applicationDate: "2023-01-01",
    },
    {
      id: 2,
      name: "Student B",
      class: "Ten",
      group: "Humanities",
      fatherName: "Father B",
      motherName: "Mother B",
      address: "Address B",
      applicationDate: "2023-02-15",
    },
    // Add more students as needed
  ]);

  const handleCheckboxChange = (event, studentId) => {
    const updatedStudents = students.map((student) => {
      if (student.id === studentId) {
        return { ...student, isChecked: event.target.checked };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
    setGroupVisible(
      event.target.value === "Nine" || event.target.value === "Ten"
    );
  };

  return (
    <div className={`content-wrapper`}>
      <div className="content-header">
        <Breadcrumb />
        <div className="my-3">
          <Button name={"Back"} className={"btn-nil"} />
        </div>
        <div className="row p-3">
          <div className="col-md-3">
            <div className="form-group student_class">
              <label>Class:</label>
              <select
                value={selectedClass}
                onChange={handleClassChange}
                className="form-control"
                style={{ width: "100%" }}
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
          <div
            className={`col-md-3 ${groupVisible ? "" : "d-none"}`}
            id="groupSelectContainer"
          >
            <div className="form-group">
              <label>Group:</label>
              <select className="form-control" style={{ width: "100%" }}>
                <option value="">select</option>
                <option>Science</option>
                <option>Humanities</option>
              </select>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="form-group student_class ">
              <label className="d-block">Search:</label>
              <input type="submit" value="Search" className="btn btn-nil" />
            </div>
          </div>
        </div>

        <div className="d-flex gap-2 mb-2">
          <button className="btn btn-sm btn-success">Approve</button>
          <button className="btn btn-nil btn-sm text-white">
            Approve List
          </button>
          <button className="btn btn-sm btn-danger">Pending List</button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>ক্রমিক নং</th>
                <th>নাম</th>
                <th>শ্রেণী</th>
                <th>গ্রুপ</th>
                <th>পিতার নাম</th>
                <th>মাতার নাম</th>
                <th>ঠিকানা</th>
                <th>আবেদনের তারিখ</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked
                      onChange={(e) => handleCheckboxChange(e, student.id)}
                    />
                  </td>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                  <td>{student.group}</td>
                  <td>{student.fatherName}</td>
                  <td>{student.motherName}</td>
                  <td>{student.address}</td>
                  <td>{student.applicationDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationResult;
