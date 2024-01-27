"use client";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "keep-react";
import { Trash } from "phosphor-react";

const DeleteModalComponent = ({ active, forModal, description, onCancel, onSubmit }) => {

  const [showModal, setShowModal] = useState(false);
  
  useEffect(()=>{active && setShowModal(true)},[active])

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleCancel = () => {
    handleModalToggle();
    onCancel();
  };

  const handleDelete = () => {
    handleModalToggle()
    onSubmit()
  };

  return (
    <>
      <Modal
        icon={<Trash size={28} color="#E92215" />}
        size="md"
        show={showModal}
        onClose={handleModalToggle}
      >
        <Modal.Header>Do you want to delete this {forModal}?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">
              {description ?? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, exercitationem."}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="primary" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModalComponent;
