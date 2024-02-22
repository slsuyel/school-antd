// import Button from "../../../components/ui/Button";

import Breadcrumb from "../../../components/ui/Breadcrumb";
import Button from "../../../components/ui/Button";

const Assessment = () => {
  return (
    <div className={`content-wrapper`}>
      <div className="content-header">
        <Breadcrumb />
        <div>
          <Button name={"Back"} className={"btn-nil"} />
        </div>
        <h1>This is Assessment page</h1>
      </div>
    </div>
  );
};

export default Assessment;
