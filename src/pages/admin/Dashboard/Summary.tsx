const Summary = () => {
  return (
    <>
      <div className="row mx-auto">
        <div className="col-md-4">
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-money-bill-alt"></i> Total Balance
              </h5>
              <p className="card-text fs-4">৳132996</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-money-bill-alt"></i> Staffs
              </h5>
              <p className="card-text fs-4">96</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-envelope"></i> SMS Balance
              </h5>
              <p className="card-text fs-4">96</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-envelope"></i> Students
              </h5>
              <p className="card-text fs-4">96</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-file-download"></i> Marksheet Download
              </h5>
              <p className="card-text fs-4">0</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-user"></i> New Applications
              </h5>
              <p className="card-text fs-4">16</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-users"></i> Visitors
              </h5>
              <p className="card-text fs-4">8195</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
