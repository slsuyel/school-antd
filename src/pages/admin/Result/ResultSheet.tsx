import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { useEffect, useState } from "react";
import Breadcrumb from "../../../components/ui/Breadcrumb";

const ResultSheet = () => {
  const [classValue, setClassValue] = useState("");
  const [examType, setExamType] = useState("");
  const [group, setGroup] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [subjectOptions, setSubjectOptions] = useState([]);

  useEffect(() => {
    console.log(classValue);
    if (
      (classValue === "Nine" || classValue === "Ten") &&
      group === "humanities"
    ) {
      setSubjectOptions([
        "বাংলা ১ম",
        "বাংলা ২য়",
        "ইংরেজি ১ম",
        "ইংরেজি ২য়",
        "গণিত",
        "বাংলা ১ম",
        "বাংলা ২য়",
        "ইংরেজি ১ম",
        "ইংরেজি ২য়",
        "গণিত",
        "বিজ্ঞান",
        "ভূগোল ও পরিবেশ",
        "অর্থনীতি",
        "বাংলাদেশ ও বিশ্ব সভ্যতার ইতিহাস",
        "ধর্ম ও নৈতিক শিক্ষা",
        "কৃষি শিক্ষা",
        "তথ্য ও যোগাযোগ প্রযুক্তি",
      ]);
    } else if (
      (classValue === "Nine" || classValue === "Ten") &&
      group === "science"
    ) {
      setSubjectOptions([
        "বাংলা ১ম",
        "বাংলা ২য়",
        "ইংরেজি ১ম",
        "ইংরেজি ২য়",
        "গণিত",
        "পদার্থবিজ্ঞান",
        "রসায়ন",
        "জীব বিজ্ঞান",
        "বাংলাদেশ ও বিশ্ব পরিচয়",
        "ধর্ম ও নৈতিক শিক্ষা",
        "কৃষি শিক্ষা",
        "উচ্চতর গণিত",
        "তথ্য ও যোগাযোগ প্রযুক্তি",
      ]);
    } else {
      setSubjectOptions([
        "বাংলা ১ম",
        "বাংলা ২য়",
        "ইংরেজি ১ম",
        "ইংরেজি ২য়",
        "গণিত",
        "বিজ্ঞান",
        "বাংলাদেশ ও বিশ্ব পরিচয়",
        "ধর্ম ও নৈতিক শিক্ষা",
        "কৃষি শিক্ষা",
        "তথ্য ও যোগাযোগ প্রযুক্তি",
      ]);
    }
  }, [classValue, group]);

  const handleClassChange = (event) => {
    setClassValue(event.target.value);
  };

  const handleGroupChange = (event) => {
    setGroup(event.target.value);
  };

  const handleSearch = () => {
    console.log("Class:", classValue);
    console.log("Exam Type:", examType);
    console.log("Subject:", subject);
    console.log("Date:", date);
    console.log("Group:", group);
  };

  return (
    <div className={`content-wrapper`}>
      <div className="content-header">
        <Breadcrumb />
        <div>
          <Button name={"Back"} className={"btn-nil"} />
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group student_class">
              <label>Class:</label>
              <select
                value={classValue}
                onChange={handleClassChange}
                required
                className="form-control"
                style={{ width: "100%" }}
              >
                <option value="">SELECT</option>
                <option>Six</option>
                <option>Seven</option>
                <option>Eight</option>
                <option>Nine</option>
                <option>Ten</option>
              </select>
            </div>
          </div>
          {["Nine", "Ten"].includes(classValue) && (
            <div className="col-md-3">
              <div className="form-group student_class">
                <label>Group:</label>
                <select
                  value={group}
                  onChange={handleGroupChange}
                  required
                  className="form-control"
                  style={{ width: "100%" }}
                >
                  <option value="">select</option>
                  <option value="science">Science</option>
                  <option value="humanities">Humanities</option>
                </select>
              </div>
            </div>
          )}
          <div className="col-md-3">
            <div className="form-group">
              <label>Exam Type:</label>
              <select
                value={examType}
                onChange={(e) => setExamType(e.target.value)}
                required
                className="form-control"
                style={{ width: "100%" }}
              >
                <option value="">select</option>
                <option value="Half_yearly_examination">
                  অর্ধ বার্ষিক পরীক্ষা
                </option>
                <option value="Half_yearly_evaluation">
                  অর্ধ বার্ষিক মূল্যায়ন
                </option>
                <option value="Annual Examination">বার্ষিক পরীক্ষা</option>
                <option value="Annual_assessment">বার্ষিক মূল্যায়ন</option>
                <option value="Model_test_exam">মডেল টেস্ট পরীক্ষা</option>
                <option value="Pre_selection_examination">
                  প্রাক-নির্বাচনী পরীক্ষা
                </option>
                <option value="Selective_Exam">নির্বাচনী পরীক্ষা</option>
                <option value="Continuous_assessment">
                  ধারাবাহিক মূল্যায়ন
                </option>
                <option value="Summative_Assessment">সামষ্টিক মূল্যায়ন</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label>Subject:</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="form-control"
                style={{ width: "100%" }}
              >
                <option value="">SELECT</option>
                {subjectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group student_class">
              <label>Date:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="form-control"
              />
            </div>
          </div>

          <div className="col-md-3 customFlex" style={{ marginTop: "11px" }}>
            <div className="form-group student_class">
              <input
                type="submit"
                value="Search"
                onClick={handleSearch}
                className="btn btn-warning text-wrap"
              />
            </div>
          </div>
        </div>

        <div className="table-responsive mt-5">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th>ক্রমিক নং</th>
                <th>শ্রেণি</th>
                <th>গ্রুপ</th>
                <th>পরীক্ষার নাম</th>
                <th>সাল</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Seven</td>
                <td>Humanities</td>
                <td>Annual Assessment</td>
                <td>2023</td>
                <td className="d-flex flex-wrap gap-1">
                  <button className="btn btn-danger btn-sm">Calculate</button>
                  <Link to="" className="btn btn-info btn-sm">
                    View
                  </Link>
                  <Link to="" className="btn btn-info btn-sm">
                    Publish Now
                  </Link>
                  <Link to="" className="btn btn-info btn-sm">
                    Promotion
                  </Link>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ResultSheet;
