const Summary = () => {
  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-money-bill-alt"></i> Total Balance
              </h5>
              <p className="card-text">৳132996</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-envelope"></i> SMS Balance
              </h5>
              <p className="card-text">Staffs: 23</p>
              <p className="card-text">Students: 453</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-file-download"></i> Marksheet Download
              </h5>
              <p className="card-text">0</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-user"></i> New Applications
              </h5>
              <p className="card-text">16</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-users"></i> Visitors
              </h5>
              <p className="card-text">8195</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
