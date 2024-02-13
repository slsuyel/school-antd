import FeeCollections from "../../../../../components/ui/FeeCollections";
import { getClasses } from "../../../../../utils/getClasses";

const AdmissionFees = () => {
  const classes = getClasses();

  return (
    <div>
      {classes.map((className) => (
        <FeeCollections
          key={className.id}
          id={className.id}
          amount={className.amount}
          classes={className.name}
          feesType={"ভর্তি ফরম"}
        />
      ))}
    </div>
  );
};

export default AdmissionFees;
