import FeeCollections from "../../../../../components/ui/FeeCollections";
import { getClasses } from "../../../../../utils/getClasses";

const SessionFee = () => {
  const classes = getClasses();
  return (
    <div>
      {classes.map((className) => (
        <FeeCollections
          key={className.id}
          id={className.id}
          amount={className.amount}
          classes={className.name}
          feesType={"ভর্তি/সেশন ফি"}
        />
      ))}
    </div>
  );
};

export default SessionFee;
