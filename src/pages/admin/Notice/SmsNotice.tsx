import React from "react";

const SmsNotice = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Class</label>
          <select name="class" className="form-control">
            <option value="All">All</option>
            <option value="Six">Six</option>
            <option value="Seven">Seven</option>
            <option value="Eight">Eight</option>
            <option value="Nine">Nine</option>
            <option value="Ten">Ten</option>
          </select>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            rows={10}
            className="form-control"
            style={{ resize: "none", height: "auto" }}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          SEND SMS
        </button>
      </form>
    </div>
  );
};

export default SmsNotice;
