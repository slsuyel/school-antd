import FeeCollections from "../../../../../components/ui/FeeCollections";
import { getClasses } from "../../../../../utils/getClasses";

const MonthlyFees = () => {
  const classes = getClasses();

  return (
    <div>
      {classes.map((className) => (
        <FeeCollections
          key={className.id}
          id={className.id}
          amount={className.amount}
          classes={className.name}
          feesType={"মাসিক বেতন"}
        />
      ))}
    </div>
  );
};

export default MonthlyFees;
