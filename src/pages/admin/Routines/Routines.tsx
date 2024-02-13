import { useState } from "react";
import Button from "../../../components/ui/Button";

const Routines = () => {
  const [selectedClass, setSelectedClass] = useState("");

  const handleSearch = () => {
    console.log("Selected Class:", selectedClass);
  };
  return (
    <div className={`content-wrapper`}>
      <div className="content-header">
        <div>
          <Button name={"Back"} className={"btn-nil"} />
        </div>
        <div className="form-group row align-item center mx-auto">
          <div className="col-md-7">
            <p
              className="font_size float-left"
              style={{ fontSize: "17px", marginRight: "16px" }}
            >
              Class:
            </p>
            <select
              id="student_class"
              required
              className="form-control"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">SELECT</option>
              <option>Six</option>
              <option>Seven</option>
              <option>Eight</option>
              <option>Nine</option>
              <option>Ten</option>
            </select>
          </div>
          <div className="col-md-5">
            <p
              className="font_size  d-block"
              style={{ fontSize: "17px", marginRight: "16px" }}
            >
              Search:
            </p>
            <button onClick={handleSearch} className="btn btn-primary ">
              Search
            </button>
          </div>
        </div>
        <div>
          <table
            border={5}
            cellSpacing={0}
            align="center"
            className="table table-responsive"
          >
            <tbody>
              <tr>
                <td align="center" height={50} width={100}>
                  <br />
                  <b>Day/Period</b>
                  <br />
                </td>
                <td align="center" height={50} width={100}>
                  <b>
                    I<br />
                    9:30-10:20
                  </b>
                </td>
                <td align="center" height={50} width={100}>
                  <b>
                    II
                    <br />
                    10:20-11:10
                  </b>
                </td>
                <td align="center" height={50} width={100}>
                  <b>
                    III
                    <br />
                    11:10-12:00
                  </b>
                </td>
                <td align="center" height={50} width={100}>
                  <b>12:00-12:40</b>
                </td>
                <td align="center" height={50} width={100}>
                  <b>
                    IV
                    <br />
                    12:40-1:30
                  </b>
                </td>
                <td align="center" height={50} width={100}>
                  <b>
                    V<br />
                    1:30-2:20
                  </b>
                </td>
                <td align="center" height={50} width={100}>
                  <b>
                    VI
                    <br />
                    2:20-3:10
                  </b>
                </td>
                <td align="center" height={50} width={100}>
                  <b>
                    VII
                    <br />
                    3:10-4:00
                  </b>
                </td>
              </tr>
              <tr>
                <td align="center" height={50}>
                  <b>Monday</b>
                </td>
                <td align="center" height={50}>
                  Eng
                </td>
                <td align="center" height={50}>
                  Mat
                </td>
                <td align="center" height={50}>
                  Che
                </td>
                <td rowSpan={6} align="center" height={50}>
                  <h2>
                    L<br />U<br />N<br />C<br />H
                  </h2>
                </td>
                <td colSpan={3} align="center" height={50}>
                  LAB
                </td>
                <td align="center" height={50}>
                  Phy
                </td>
              </tr>
              <tr>
                <td align="center" height={50}>
                  <b>Tuesday</b>
                </td>
                <td colSpan={3} align="center" height={50}>
                  LAB
                </td>
                <td align="center" height={50}>
                  Eng
                </td>
                <td align="center" height={50}>
                  Che
                </td>
                <td align="center" height={50}>
                  Mat
                </td>
                <td align="center" height={50}>
                  SPORTS
                </td>
              </tr>
              <tr>
                <td align="center" height={50}>
                  <b>Wednesday</b>
                </td>
                <td align="center" height={50}>
                  Mat
                </td>
                <td align="center" height={50}>
                  phy
                </td>
                <td align="center" height={50}>
                  Eng
                </td>
                <td align="center" height={50}>
                  Che
                </td>
                <td colSpan={3} align="center" height={50}>
                  LIBRARY
                </td>
              </tr>
              <tr>
                <td align="center" height={50}>
                  <b>Thursday</b>
                </td>
                <td align="center" height={50}>
                  Phy
                </td>
                <td align="center" height={50}>
                  Eng
                </td>
                <td align="center" height={50}>
                  Che
                </td>
                <td colSpan={3} align="center" height={50}>
                  LAB
                </td>
                <td align="center" height={50}>
                  Mat
                </td>
              </tr>
              <tr>
                <td align="center" height={50}>
                  <b>Friday</b>
                </td>
                <td colSpan={3} align="center" height={50}>
                  LAB
                </td>
                <td align="center" height={50}>
                  Mat
                </td>
                <td align="center" height={50}>
                  Che
                </td>
                <td align="center" height={50}>
                  Eng
                </td>
                <td align="center" height={50}>
                  Phy
                </td>
              </tr>
              <tr>
                <td align="center" height={50}>
                  <b>Saturday</b>
                </td>
                <td align="center" height={50}>
                  Eng
                </td>
                <td align="center" height={50}>
                  Che
                </td>
                <td align="center" height={50}>
                  Mat
                </td>
                <td colSpan={3} align="center" height={50}>
                  SEMINAR
                </td>
                <td align="center" height={50}>
                  SPORTS
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Routines;
