import Button from "../../../components/ui/Button";

const Payment = () => {
  return (
    <div className={`content-wrapper`}>
      <div className="content-header">
        <div className="my-3">
          <Button className={"btn-nil my-3"} name={"Back"} />
        </div>
        <div className="row gutters-8">
          <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
            <select className="form-control" id="payment_class" required>
              <option value="">SELECT CLASS</option>
              <option>Six</option>
              <option>Seven</option>
              <option>Eight</option>
              <option>Nine</option>
              <option>Ten</option>
            </select>
          </div>
          <div className="col-3-xxxl col-xl-4 col-lg-3 col-12 form-group">
            <select className="form-control" id="year" required>
              <option value="">SELECT YEAR</option>
              {Array.from({ length: 25 }, (_, i) => (
                <option key={i + 2000}>{2024 - i}</option>
              ))}
            </select>
          </div>
          <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
            <select className="form-control" id="month" required>
              <option value="">SELECT MONTH</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1}>
                  {new Date(0, i).toLocaleString("en-US", { month: "long" })}
                </option>
              ))}
            </select>
          </div>
          <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
            <select className="form-control" id="type" required>
              <option value="">SELECT TYPE</option>
              <option value="Monthly_fee">মাসিক বেতন</option>
              <option value="Session_fee">সেশন ফি</option>
              <option value="Exam_fee">পরিক্ষার ফি</option>
              <option value="Other">অন্যান্য</option>
            </select>
          </div>
          <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
            <button type="submit" className="btn btn-warning text-wrap">
              Search
            </button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>Roll</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Paid Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>John Doe</td>
                <td>$500</td>
                <td>$300</td>
                <td>Paid</td>
                <td>2024-02-11</td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Pay Now
                      </a>
                      <a className="dropdown-item" href="#">
                        Invoice
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>101</td>
                <td>John Doe</td>
                <td>$500</td>
                <td>$300</td>
                <td>Paid</td>
                <td>2024-02-11</td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Pay Now
                      </a>
                      <a className="dropdown-item" href="#">
                        Invoice
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>101</td>
                <td>John Doe</td>
                <td>$500</td>
                <td>$300</td>
                <td>Paid</td>
                <td>2024-02-11</td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Pay Now
                      </a>
                      <a className="dropdown-item" href="#">
                        Invoice
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payment;
