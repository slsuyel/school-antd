import React, { useState } from "react";
import { Modal, Switch } from "antd";

const FeeEditModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  classes,
  amount,
  feesType,
}) => {
  const [formData, setFormData] = useState({
    amount: amount,
    feesType: feesType,
    classes: classes,
    feeStatus: false,
  });

  const onChange = (checked) => {
    setFormData({
      ...formData,
      feeStatus: checked,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    handleOk();
  };

  return (
    <>
      <Modal
        title="Fees Edit"
        visible={isModalOpen}
        onOk={handleFormSubmit}
        onCancel={handleCancel}
      >
        <form className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="class">শ্রেণি: {classes} শ্রেণী</label>
              <br />
              <label htmlFor="fee-type">ফি এর ধরণ: {feesType}</label>
              <br />
              <label htmlFor="exam-name">পরীক্ষার নাম:</label>
              <br />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="fee-amount">ফি এর পরিমাণ</label>
              <input
                type="number"
                defaultValue={amount}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="fee-status">ফি স্ট্যাটাস</label>
            <br />
            <Switch defaultChecked={formData.feeStatus} onChange={onChange} />
          </div>
          <div className="col-md-12">
            <button
              className="btn btn-info py-2 px-3"
              onClick={handleFormSubmit}
            >
              Update
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default FeeEditModal;
