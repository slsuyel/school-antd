import { TFeeCollections } from "../../types/types";
import { Button } from "antd";
import FeeEditModal from "./FeeEditModal";
import { useState } from "react";

const FeeCollections = ({ classes, amount, feesType }: TFeeCollections) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="card my-3">
      <div className="card-body">
        <div className="card-head">
          <h2 className="text-center">{classes} শ্রেণী</h2>
        </div>{" "}
        <table className="table w-100">
          <thead>
            <tr>
              <th>ক্রমিক নং</th> <th>নাম</th> <th>ফি এর পরমান</th>
              <th>স্ট্যাটাস</th> <th>অ্যাকশান</th>
            </tr>
          </thead>{" "}
          <tbody>
            <tr>
              <td>১</td> <td>{feesType}</td> <td>{amount}</td>
              <td>
                <span className="text-danger">Deactive</span>
              </td>{" "}
              <td>
                <Button onClick={showModal} type="primary">
                  Edit
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
        <FeeEditModal
          handleCancel={handleCancel}
          handleOk={handleOk}
          isModalOpen={isModalOpen}
          classes={classes}
          amount={amount}
          feesType={feesType}
        />
      </div>
    </div>
  );
};

export default FeeCollections;
