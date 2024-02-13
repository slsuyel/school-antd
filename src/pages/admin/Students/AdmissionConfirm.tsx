const AdmissionConfirm = () => {
  return (
    <div className={`content-wrapper`}>
      <div className="content-header bg-white ">
        <div className="container mt-5 mb-5">
          <div className="form-group">
            <label htmlFor="applicationId">Application Id</label>
            <input type="text" className="form-control" id="applicationId" />
          </div>
          <div className="form-group">
            <button className="btn btn-info">Search</button>
          </div>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Application Id</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Group</th>
                  <th>Father Name</th>
                  <th>Mother Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>125983230561</td>
                  <td>মোঃ সিয়াম হোসেন</td>
                  <td>Nine</td>
                  <td>Science</td>
                  <td>মোঃ আবু বক্কর সিদ্দিক</td>
                  <td>মোছাঃ স্মৃতি আক্তার</td>
                  <td className="d-flex gap-2 flex-nowrap">
                    <button className="btn btn-info">ভর্তি নিশ্চিত করুন</button>
                    <button className="btn btn-danger">ভর্তি বাতিল করুন</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionConfirm;
