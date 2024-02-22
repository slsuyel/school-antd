import Breadcrumb from "../../../components/ui/Breadcrumb";
import Button from "../../../components/ui/Button";
import StudentReportSearch from "./StudentReportSearch";

const Reports = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      class: "10",
      fatherName: "David Doe",
      motherName: "Emma Doe",
      address: "123 Main St, City",
    },
    {
      id: 2,
      name: "Jane Smith",
      class: "11",
      fatherName: "Michael Smith",
      motherName: "Sarah Smith",
      address: "456 Elm St, Town",
    },
    {
      id: 3,
      name: "Alice Johnson",
      class: "9",
      fatherName: "Robert Johnson",
      motherName: "Mary Johnson",
      address: "789 Oak St, Village",
    },
  ];
  return (
    <div className={`content-wrapper`}>
      <div className="content-header  ">
        <Breadcrumb />
        <div>
          <Button name={"Back"} className={"btn-nil"} />
        </div>

        <div className="my-3">
          <StudentReportSearch />
        </div>

        <div className="d-flex justify-content-end mb-4 mx-2">
          <button className="btn btn-nil font-bn text-white">
            <i className="fa-solid fa-download"></i> Report Download
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>রোল</th>
                <th>নাম</th>
                <th>শ্রেণী</th>
                <th>পিতার নাম</th>
                <th>মাতার নাম</th>
                <th>ঠিকানা</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.class}</td>
                  <td>{row.fatherName}</td>
                  <td>{row.motherName}</td>
                  <td>{row.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
