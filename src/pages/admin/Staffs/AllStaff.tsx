import Breadcrumb from "../../../components/ui/Breadcrumb";
import SearchBox from "../../../components/ui/SearchBox";
import { Dropdown } from "react-bootstrap";

const AllStaff = () => {
  const data = [
    {
      id: 1,
      photo:
        "https://tepriganjhighschool.edu.bd/public/backend/staffs/1688571420____51607.png",
      name: "John Doe",
      incharge: "Mr. Smith",
      class: "10th Grade",
      subject: "Mathematics",
      phone: "123-456-7890",
      email: "john.doe@example.com",
    },
    {
      id: 1,
      photo:
        "https://tepriganjhighschool.edu.bd/public/backend/staffs/1688571420____51607.png",
      name: "John Doe",
      incharge: "Mr. Smith",
      class: "10th Grade",
      subject: "Mathematics",
      phone: "123-456-7890",
      email: "john.doe@example.com",
    },
    {
      id: 1,
      photo:
        "https://tepriganjhighschool.edu.bd/public/backend/staffs/1688571420____51607.png",
      name: "John Doe",
      incharge: "Mr. Smith",
      class: "10th Grade",
      subject: "Mathematics",
      phone: "123-456-7890",
      email: "john.doe@example.com",
    },
    // Add more data objects as needed
  ];

  const handleView = (id) => {
    // Logic to handle view action
    console.log("Viewing staff with id:", id);
  };

  const handleEdit = (id) => {
    // Logic to handle edit action
    console.log("Editing staff with id:", id);
  };

  const handleDelete = (id) => {
    // Logic to handle delete action
    console.log("Deleting staff with id:", id);
  };

  return (
    <div className={`content-wrapper `}>
      <div className="content-header">
        <Breadcrumb page={"Staffs"} />

        <div>
          <SearchBox />
        </div>
        <div className="table-responsive">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th>SL</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Incharge</th>
                <th>Class</th>
                <th>Subject</th>
                <th>Phone</th>
                <th>E-mail</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <img
                      src={item.photo}
                      alt="User"
                      style={{ width: "40px" }}
                      className="rounded-circle"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.incharge}</td>
                  <td>{item.class}</td>
                  <td>{item.subject}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="secondary"
                        id={`dropdownMenuButton${item.id}`}
                      >
                        Action
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleView(item.id)}>
                          View
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleEdit(item.id)}>
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDelete(item.id)}>
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
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

export default AllStaff;
