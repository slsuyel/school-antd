import Breadcrumb from "../../../components/ui/Breadcrumb";
import Button from "../../../components/ui/Button";

const ResultLog = () => {
  const data = [
    {
      id: 1,
      class: "Class A",
      group: "Group 1",
      examName: "Midterm",
      subject: "Math",
      year: 2023,
      date: "2023-05-15",
    },
    {
      id: 2,
      class: "Class B",
      group: "Group 2",
      examName: "Final Exam",
      subject: "Science",
      year: 2023,
      date: "2023-12-20",
    },
    // Add more data as needed
  ];
  const handleEnableEdit = (id) => {
    // Implement enable edit functionality here
    console.log("Enable Edit clicked for row id:", id);
  };

  const handleView = (id) => {
    // Implement view functionality here
    console.log("View clicked for row id:", id);
  };

  return (
    <div className="">
      <Breadcrumb />
      <div className="">
        <Button name={"Back"} className={"btn-nil"} />
      </div>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ক্রমিক নং</th>
              <th>শ্রেণি</th>
              <th>গ্রুপ</th>
              <th>পরীক্ষার নাম</th>
              <th>বিষয়</th>
              <th>সাল</th>
              <th>তারিখ</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.class}</td>
                <td>{row.group}</td>
                <td>{row.examName}</td>
                <td>{row.subject}</td>
                <td>{row.year}</td>
                <td>{row.date}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm mr-2"
                    onClick={() => handleEnableEdit(row.id)}
                  >
                    Enable Edit
                  </button>
                  <button
                    className="btn btn-nil btn-sm"
                    onClick={() => handleView(row.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultLog;
