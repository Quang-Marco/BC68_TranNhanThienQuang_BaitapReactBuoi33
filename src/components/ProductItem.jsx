import React, { useState } from "react";
import { Button, Modal } from "antd";

const ProductItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="product_item text-center space-y-3 pb-5 border rounded-lg shadow-lg">
      <img className="bg-gray-100 rounded-t-lg" src={item.image} alt="" />
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className="text-lg">Price: {item.price}$</p>
      <Button className="text-lg p-5" type="primary" onClick={showModal}>
        Details
      </Button>

      <Modal
        title={<div className="text-xl">{item.name}</div>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <img
          className="bg-gray-100 rounded-full border my-3"
          src={item.image}
          alt=""
        />
        <span className="text-lg mr-64">Price: {item.price}$</span>
        <span className="text-lg">Quantity: {item.quantity}</span>
        <p className="text-base mt-2">{item.description}</p>
      </Modal>
    </div>
  );
};

export default ProductItem;
