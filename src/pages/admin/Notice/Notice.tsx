import { Link } from "react-router-dom";

const Notice = () => {
  console.log("live==>", window.location);

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ক্রমিক নং</th>
              <th className="tablecolhide">শিরোনাম</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="tablecolhide">
                বার্ষিক পরীক্ষা/২৩ এর ফলাফল প্রকাশ
              </td>
              <td className="tablecolhide">
                <Link className="btn btn-success" to={".edit"}>
                  Edit
                </Link>
              </td>
            </tr>
            {/* Repeat the above pattern for other rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notice;
