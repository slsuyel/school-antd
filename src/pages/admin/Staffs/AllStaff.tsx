import Button from "../../../components/ui/Button";

import Breadcrumb from "../../../components/ui/Breadcrumb";
import SearchBox from "../../../components/ui/SearchBox";

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
        <div className="d-flex justify-content-between mx-2 my-3">
          <Button name={"Back"} to={"/admin"} className={"btn-md  btn-nil"} />
        </div>
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
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id={`dropdownMenuButton${item.id}`}
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Action
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby={`dropdownMenuButton${item.id}`}
                      >
                        <button
                          className="dropdown-item"
                          onClick={() => handleView(item.id)}
                        >
                          View
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={() => handleEdit(item.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
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

export default AllStaff;
