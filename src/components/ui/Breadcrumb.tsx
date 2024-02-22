import { Link, useLocation } from "react-router-dom";

type TBreadcrumb = {
  page?: string;
};

const Breadcrumb = ({ page }: TBreadcrumb) => {
  const location = useLocation();
  const pageName = location.pathname;
  const pageN = pageName
    .match(/[^/]+$/)[0]
    .replace(/-/g, " ")
    .trim();

  return (
    <div className="my-2">
      <div className="row mb-2">
        <div className="col-6">
          <h1 className="m-0 text-nil text-capitalize">{page || pageN}</h1>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item text-nil">
              <Link to="/admin/dashboard" className="text-nil">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item  text-nil">{page || pageN}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
