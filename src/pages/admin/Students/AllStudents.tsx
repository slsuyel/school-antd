/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from "../../../components/ui/Button";

import StudentSearch from "./StudentSearch";

const AllStudents = () => {
  const studentData = [];

  const handleView = (id: string) => {
    console.log(id);
  };

  const handleEdit = (id: string) => {
    console.log(id);
  };

  return (
    <div className={`content-wrapper`}>
      <div className="content-header  ">
        <div className="">
          <div className="my-3">
            <Button
              name={"Back"}
              to={"/dashboard/staff/all-staffs"}
              className={"btn-nil"}
            />
          </div>
        </div>

        <StudentSearch />

        <div className="table-responsive">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th>#</th>
                <th>ছবি</th>
                <th>নাম</th>
                <th>শ্রেণী</th>
                <th>পিতার নাম</th>
                <th>মাতার নাম</th>
                <th>উপবৃত্তি</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={`https://tepriganjhighschool.edu.bd/public/${student.StudentPicture}`}
                      alt={student.StudentName}
                      style={{ width: "40px" }}
                      className="rounded-circle"
                    />
                  </td>
                  <td>{student.StudentName}</td>
                  <td>{student.StudentClass}</td>
                  <td>{student.StudentFatherName}</td>
                  <td>{student.StudentMotherName}</td>
                  <td>{student.stipend}</td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id={`dropdownMenuButton${index}`}
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Action
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby={`dropdownMenuButton${index}`}
                      >
                        <button
                          className="dropdown-item"
                          onClick={() => handleView(student.id)}
                        >
                          View
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={() => handleEdit(student.id)}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
