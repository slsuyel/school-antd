import Breadcrumb from "../../../components/ui/Breadcrumb";
import Button from "../../../components/ui/Button";

const AnnuallyReport = () => {
  return (
    <div className={`content-wrapper`}>
      <div className="content-header">
        <Breadcrumb />

        <Button className={"btn-nil"} name={"Back"} />

        <div className="d-flex justify-content-center mb-4 mx-2">
          <button className="btn btn-nil font-bn text-white">
            <i className="fa-solid fa-download"></i> Report Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnuallyReport;
