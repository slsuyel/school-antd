import Breadcrumb from "../../../components/ui/Breadcrumb";
import Button from "../../../components/ui/Button";
import StudentSearch from "./StudentSearch";
import Dropdown from "react-bootstrap/Dropdown";

const NewApplications = () => {
  const handleView = (id: number) => {
    console.log(id);
  };

  const handleEdit = (id: number) => {
    console.log(id);
  };

  return (
    <div>
      <Breadcrumb />

      <div className="my-3">
        <Button name={"Back"} to={"/"} className={"btn-nil"} />
      </div>

      <StudentSearch />

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>ছবি</th>
              <th>নাম</th>
              <th>শ্রেণী</th>
              <th>পিতার নাম</th>
              <th>মাতার নাম</th>
              <th>স্কুল</th>
              <th>আবেদনের তারিখ</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>

              <td>image</td>
              <td>Student2</td>
              <td>Class2</td>
              <td>Father2</td>
              <td>Mother2</td>
              <td>School2</td>
              <td>01/02/2024</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Action
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleView(2)}>
                      View
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleEdit(2)}>
                      Edit
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>image</td>
              <td>Student2</td>
              <td>Class2</td>
              <td>Father2</td>
              <td>Mother2</td>
              <td>School2</td>
              <td>01/02/2024</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Action
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleView(2)}>
                      View
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleEdit(2)}>
                      Edit
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>image</td>
              <td>Student2</td>
              <td>Class2</td>
              <td>Father2</td>
              <td>Mother2</td>
              <td>School2</td>
              <td>01/02/2024</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Action
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleView(2)}>
                      View
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleEdit(2)}>
                      Edit
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>image</td>
              <td>Student2</td>
              <td>Class2</td>
              <td>Father2</td>
              <td>Mother2</td>
              <td>School2</td>
              <td>01/02/2024</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Action
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleView(2)}>
                      View
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleEdit(2)}>
                      Edit
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewApplications;
