import { useState } from "react";
import { Button } from "antd";
import FeeEditModal from "./FeeEditModal";

const ExamFeeCollections = ({ className, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFee, setSelectedFee] = useState(null); // State to hold selected fee

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = (fee) => {
    setSelectedFee(fee); // Set the selected fee
    setIsModalOpen(true);
  };

  return (
    <div className="card-body">
      <div className="card-head">
        <h2 className="text-center">{className} শ্রেণী</h2>
      </div>
      <table className="table w-100">
        <thead>
          <tr>
            <th>ক্রমিক নং</th>
            <th>নাম</th>
            <th>ফি এর পরমান</th>
            <th>স্ট্যাটাস</th>
            <th>অ্যাকশান</th>
          </tr>
        </thead>
        <tbody>
          {data.map((fee) => (
            <tr key={fee.id}>
              <td>১</td>
              <td>{fee.sub_type}</td>
              <td>{fee.fees}</td>
              <td>
                <span
                  className={` ${
                    fee.status === "0" ? "text-danger" : "text-success"
                  }`}
                >
                  {fee.status === "0" ? "Deactivate" : "Active"}
                </span>
              </td>
              <td>
                <Button onClick={() => showModal(fee)} type="primary">
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedFee && (
        <FeeEditModal
          handleCancel={handleCancel}
          handleOk={handleOk}
          isModalOpen={isModalOpen}
          classes={className}
          amount={selectedFee.fees} // Use selectedFee instead of fee
          feesType={selectedFee.sub_type} // Use selectedFee instead of fee
        />
      )}
    </div>
  );
};

export default ExamFeeCollections;
