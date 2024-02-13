const MarksheetInfo = () => {
  return (
    <div className="p-3">
      <div className="table-responsive ">
        <table
          className="table table-striped "
          style={{ fontFamily: "bangla,sans-serif", width: "100%" }}
        >
          <tbody>
            <tr>
              <td>Roll No</td>
              <td>1</td>
              <td>Class</td>
              <td>Nine</td>
            </tr>
            <tr>
              <td>Student Id</td>
              <td>12598322082104</td>
              <td>Admission Id</td>
              <td>125983220541</td>
            </tr>
            <tr>
              <td>Name of Student</td>
              <td colSpan={3} style={{ textTransform: "uppercase" }}>
                vobon chandra roy
              </td>
            </tr>
            <tr>
              <td>Father's Name</td>
              <td colSpan={3} style={{ textTransform: "uppercase" }}>
                kali kumar roy
              </td>
            </tr>
            <tr>
              <td>Mother's Name</td>
              <td colSpan={3} style={{ textTransform: "uppercase" }}>
                maya rani
              </td>
            </tr>
            <tr>
              <td>Exam Name</td>
              <td>অর্ধ বার্ষিক পরীক্ষা</td>
              <td>Year</td>
              <td>2023</td>
            </tr>
            <tr>
              <td>Group</td>
              <td>Science</td>
              <td>Type: Regular</td>
              <td>Gender: Male</td>
            </tr>
            <tr>
              <td>Result</td>
              <td>GPA=4.11</td>
              <td>Total Mark</td>
              <td>801</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-responsive mt-4">
        <table className="table table-striped ">
          <thead className="bg-success text-white">
            <tr>
              <th
                className="bg-success fw-light text-center border border-1"
                colSpan={1}
              >
                SUBJECT NAME
              </th>
              <th
                className="bg-success fw-light text-center border border-1"
                colSpan={1}
              >
                THEORY
              </th>
              <th
                className="bg-success fw-light text-center border border-1"
                colSpan={1}
              >
                MCQ
              </th>
              <th
                className="bg-success fw-light text-center border border-1"
                colSpan={1}
              >
                PRAC/CA
              </th>
              <th
                className="bg-success fw-light text-center border border-1"
                colSpan={1}
              >
                TOTAL
              </th>
              <th
                className="bg-success fw-light text-center border border-1"
                colSpan={1}
              >
                GRADE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-success">
              <td className="pl-5 pr-5">
                Bangla-I <br /> Bangla-II
              </td>
              <td className="text-center">
                <span>
                  42 <br /> 57
                </span>
              </td>
              <td className="text-center">
                <span>
                  13 <br /> 14
                </span>
              </td>
              <td className="text-center">
                <span>
                  0 <br /> 0
                </span>
              </td>
              <td className="pl-5 pr-5 text-center">
                <span>126</span>
              </td>
              <td className="pl-5 pr-5 text-center">
                <span>A-</span>
              </td>
            </tr>

            <tr className="table-success">
              <td className="pl-5 pr-5">
                English-I <br /> English-II
              </td>
              <td className="text-center">
                <span>
                  84 <br /> 60
                </span>
              </td>
              <td className="text-center">
                <span>
                  0 <br /> 0
                </span>
              </td>
              <td className="text-center">
                <span>
                  0 <br /> 0
                </span>
              </td>
              <td className="pl-5 pr-5 text-center">
                <span>144</span>
              </td>
              <td className="pl-5 pr-5 text-center">
                <span>A</span>
              </td>
            </tr>
            <tr className="table-success">
              <td className="pl-5 pr-5">Mathematics</td>
              <td className="pl-5 pr-5 text-center">
                <span>30</span>
              </td>
              <td className="pl-5 pr-5 text-center">
                <span>21</span>
              </td>
              <td className="pl-5 pr-5 text-center">
                <span>0</span>
              </td>
              <td className="pl-5 pr-5 text-center">
                <span>51</span>
              </td>
              <td className="pl-5 pr-5 text-center">
                <span>B</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarksheetInfo;
