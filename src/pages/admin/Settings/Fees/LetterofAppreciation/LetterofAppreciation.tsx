import FeeCollections from "../../../../../components/ui/FeeCollections";
import { getClasses } from "../../../../../utils/getClasses";

const LetterofAppreciation = () => {
  const classes = getClasses();
  return (
    <div>
      {classes.map((className) => (
        <FeeCollections
          key={className.id}
          id={className.id}
          amount={className.amount}
          classes={className.name}
          feesType={"প্রশংসা পত্র ফি"}
        />
      ))}
    </div>
  );
};

export default LetterofAppreciation;
