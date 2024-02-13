const AdmissionForm = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header ">
        <div className="card height-auto">
          <div className="card-body">
            <form>
              <fieldset
                className="col-md-12 mt-3"
                style={{ border: "1px solid" }}
              >
                <legend>
                  <h3>Students Details</h3>
                </legend>
                <div className="row">
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">নাম (বাংলা)</label>
                      <input
                        type="text"
                        placeholder="নাম (বাংলা)"
                        name="নাম (বাংলা)"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">নাম (English)</label>
                      <input
                        type="text"
                        placeholder="নাম (English)"
                        name="নাম (English)"
                        className="form-control"
                        style={{ textTransform: "uppercase" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">শ্রেণি</label>
                      <select
                        className="form-control"
                        style={{ width: "100%" }}
                      >
                        <option value="">নির্বাচন করুন</option>
                        <option>Six</option>
                        <option>Seven</option>
                        <option>Eight</option>
                        <option>Nine</option>
                        <option>Ten</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">বাস্তবায়ন নম্বর</label>
                      <input
                        type="text"
                        placeholder="বাস্তবায়ন নম্বর"
                        name="বাস্তবায়ন নম্বর"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">বয়স</label>
                      <input
                        type="text"
                        placeholder="বয়স"
                        name="বয়স"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">জন্ম তারিখ</label>
                      <input type="date" name="dob" className="form-control" />
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset
                className="col-md-12 mt-3"
                style={{ border: "2px solid" }}
              >
                <legend>
                  <h3>Parent's Details</h3>
                </legend>
                <div className="row">
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">Father's Name</label>
                      <input
                        type="text"
                        placeholder="Father's Name"
                        name="Father's Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">Mother's Name</label>
                      <input
                        type="text"
                        placeholder="Mother's Name"
                        name="Mother's Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">পেশা</label>
                      <input
                        type="text"
                        placeholder="পেশা"
                        name="পেশা"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">মোবাইল নম্বর (পিতা)</label>
                      <input
                        type="text"
                        placeholder="মোবাইল নম্বর (পিতা)"
                        name="মোবাইল নম্বর (পিতা)"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">মোবাইল নম্বর (মা)</label>
                      <input
                        type="text"
                        placeholder="মোবাইল নম্বর (মা)"
                        name="মোবাইল নম্বর (মা)"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset
                className="col-md-12 mt-3"
                style={{ border: "2px solid" }}
              >
                <legend>
                  <h3>Other Details</h3>
                </legend>
                <div className="row">
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">ঠিকানা</label>
                      <input
                        type="text"
                        placeholder="ঠিকানা"
                        name="ঠিকানা"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">ইমেইল</label>
                      <input
                        type="email"
                        placeholder="ইমেইল"
                        name="ইমেইল"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">
                        জাতীয় পরিচয়পত্র নম্বর
                      </label>
                      <input
                        type="text"
                        placeholder="জাতীয় পরিচয়পত্র নম্বর"
                        name="জাতীয় পরিচয়পত্র নম্বর"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">ধর্ম</label>
                      <input
                        type="text"
                        placeholder="ধর্ম"
                        name="ধর্ম"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset
                className="col-md-12 mt-3"
                style={{ border: "2px solid" }}
              >
                <legend>
                  <h3>Attachments</h3>
                </legend>
                <div className="row">
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">ছবি আপলোড</label>
                      <input
                        type="file"
                        name="ছবি আপলোড"
                        className="form-control-file"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">জন্ম সনদ</label>
                      <input
                        type="file"
                        name="জন্ম সনদ"
                        className="form-control-file"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <label className="form_label">প্রাথমিক পাস</label>
                      <input
                        type="file"
                        name="প্রাথমিক পাস"
                        className="form-control-file"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
