import { useState } from "react";

import Breadcrumb from "../../../components/ui/Breadcrumb";

function AddStaffForm() {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    teacherId: "",
    teacherName: "",
    teacherGender: "",
    teacherEmail: "",
    teacherPassword: "",
    teacherPhoneNumber: "",
    teacherAddress: "",
    teacherPosition: "",
    teacherQualification: "",
    inchargeClass: "",
    teacherDateOfBirth: "",
    teacherJoiningDate: "",
    teacherWorkingHours: "",
    teacherSubjectHandling: "",
    teacherStatus: "",
  });

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Log the form data
    console.log(formData);
    // You can perform additional actions like submitting data to a server here
  };

  return (
    <div className={`content-wrapper`}>
      <div className="content-header">
        <Breadcrumb page={"Add Staffs"} />

        <form className="p-3 py-4 rounded border" onSubmit={handleSubmit}>
          <div className="row mx-auto">
            <div className="col-md-4">
              <div className="form-group">
                <label>Teacher ID:</label>
                <input
                  type="text"
                  name="teacherId"
                  placeholder="Enter Teacher ID"
                  value={formData.teacherId}
                  onChange={handleInputChange}
                  className="form-control "
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Teacher Name:</label>
                <input
                  type="text"
                  name="teacherName"
                  placeholder="Enter Teacher Name"
                  value={formData.teacherName}
                  onChange={handleInputChange}
                  className="form-control "
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Teacher Gender:</label>
                <select
                  name="teacherGender"
                  value={formData.teacherGender}
                  onChange={handleInputChange}
                  className="form-control "
                >
                  <option value="">SELECT</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Teacher Email:</label>
                <input
                  type="email"
                  name="teacherEmail"
                  placeholder="Enter Teacher Email"
                  value={formData.teacherEmail}
                  onChange={handleInputChange}
                  className="form-control "
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Teacher Password:</label>
                <input
                  type="password"
                  name="teacherPassword"
                  placeholder="Enter Teacher Password"
                  value={formData.teacherPassword}
                  onChange={handleInputChange}
                  className="form-control "
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Teacher Phone Number:</label>
                <input
                  type="text"
                  name="teacherPhoneNumber"
                  placeholder="Enter Teacher Phone Number"
                  value={formData.teacherPhoneNumber}
                  onChange={handleInputChange}
                  className="form-control "
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Teacher Address:</label>
                <input
                  type="text"
                  name="teacherAddress"
                  placeholder="Enter Teacher Address"
                  value={formData.teacherAddress}
                  onChange={handleInputChange}
                  className="form-control "
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Teacher Position:</label>
                <select
                  name="teacherPosition"
                  value={formData.teacherPosition}
                  onChange={handleInputChange}
                  className="form-control "
                >
                  <option value="">SELECT</option>
                  <option value="Head Master">Head Master</option>
                  <option value="Assistant Head Master">
                    Assistant Head Master
                  </option>
                  <option value="Assistant Teacher">Assistant Teacher</option>
                  <option value="Office Assistant Cum-Accountant">
                    Office Assistant Cum-Accountant
                  </option>
                  <option value="M.L.S.S.">M.L.S.S.</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Teacher Qualification:</label>
                <input
                  type="text"
                  name="teacherQualification"
                  placeholder="Enter Teacher Qualification"
                  value={formData.teacherQualification}
                  onChange={handleInputChange}
                  className="form-control "
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Incharge Class:</label>
                <select
                  name="inchargeClass"
                  value={formData.inchargeClass}
                  onChange={handleInputChange}
                  className="form-control "
                >
                  <option value="">SELECT</option>
                  <option value="Six">Six</option>
                  <option value="Seven">Seven</option>
                  <option value="Eight">Eight</option>
                  <option value="Nine">Nine</option>
                  <option value="Ten">Ten</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Teacher Date Of Birth:</label>
                <input
                  type="date"
                  name="teacherDateOfBirth"
                  value={formData.teacherDateOfBirth}
                  onChange={handleInputChange}
                  className="form-control  air-datepicker"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Teacher Joining Date:</label>
                <input
                  type="date"
                  name="teacherJoiningDate"
                  value={formData.teacherJoiningDate}
                  onChange={handleInputChange}
                  className="form-control  air-datepicker"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Teacher Working Hours:</label>
                <input
                  type="text"
                  name="teacherWorkingHours"
                  placeholder="Enter Teacher Working Hours"
                  value={formData.teacherWorkingHours}
                  onChange={handleInputChange}
                  className="form-control "
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Teacher Subject Handling:</label>
                <input
                  type="text"
                  name="teacherSubjectHandling"
                  placeholder="Enter Teacher Subject Handling"
                  value={formData.teacherSubjectHandling}
                  onChange={handleInputChange}
                  className="form-control "
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Teacher Status:</label>
                <select
                  name="teacherStatus"
                  value={formData.teacherStatus}
                  onChange={handleInputChange}
                  className="form-control "
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Reject">Reject</option>
                  <option value="Leave">Leave</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border col-md-3 fileUpload mb-2 py-3">
                <label htmlFor="fileupload" id="fileChoiceLable">
                  <span style={{ textAlign: "center" }}>
                    Click Here to Upload Staff Image <br /> 300x300
                  </span>
                </label>
                <input
                  type="file"
                  id="fileupload"
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className="align-items-center col-md-6 d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-nil rounded rounded-0 rounded-1"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStaffForm;
