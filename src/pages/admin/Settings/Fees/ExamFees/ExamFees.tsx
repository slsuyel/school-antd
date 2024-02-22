import { useEffect, useState } from "react";
import ExamFeeCollections from "../../../../../components/ui/ExamFeeCollections";
import Breadcrumb from "../../../../../components/ui/Breadcrumb";

const ExamFees = () => {
  const [fees, setFees] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.tepriganjhighschool.edu.bd/api/school/fees?type=exam_fee"
    )
      .then((res) => res.json())
      .then((data) => setFees(data.fees));
  }, []);

  const classSixFees = fees.filter((fee) => fee.class === "Six");
  const classSevenFees = fees.filter((fee) => fee.class === "Seven");
  const classEightFees = fees.filter((fee) => fee.class === "Eight");
  const classNineFees = fees.filter((fee) => fee.class === "Nine");
  const classTenFees = fees.filter((fee) => fee.class === "Ten");

  return (
    <div>
      <Breadcrumb />
      <ExamFeeCollections className={"ষষ্ঠ "} data={classSixFees} />
      <ExamFeeCollections className={"সপ্তম"} data={classSevenFees} />
      <ExamFeeCollections className={"অষ্টম "} data={classEightFees} />
      <ExamFeeCollections className={"নবম"} data={classNineFees} />
      <ExamFeeCollections className={"দশম "} data={classTenFees} />
    </div>
  );
};

export default ExamFees;
