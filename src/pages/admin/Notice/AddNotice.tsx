import React, { useState } from "react";

const AddNotice = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log form data after submission
    // Here you can perform further actions, like sending data to the server
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data" method="POST">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows={5}
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            style={{ resize: "none", height: "auto" }}
          ></textarea>
        </div>
        <div className="form-group">
          <label>File</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="form-control"
          />
        </div>
        <button type="submit" id="send_sms" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNotice;
