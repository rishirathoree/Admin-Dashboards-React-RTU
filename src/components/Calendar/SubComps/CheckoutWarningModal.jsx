import React, { useState } from 'react'
import {Check,Storefront} from 'phosphor-react'
import { Button, Modal } from 'keep-react';

const CheckoutWarningModal = ({onCancel,active}) => {
    
  const [showModal, setShowModal] = useState(active);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <Modal
        icon={<Storefront size={28} color="#E92215" />}
        size="lg"
        show={showModal}
        onClose={handleModalToggle}
      >
        <Modal.Header>Do you want to cancel this booking?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, exercitationem."
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          
          <Button type="primary" className='bg-red-500 hover:bg-red-600 focus:hover:bg-red-600 focus:ring-4 focus:ring-red-200' onClick={()=>{onCancel()}} >
            Continue
          </Button>

        </Modal.Footer>
      </Modal>
  )
}

export default CheckoutWarningModal