
"use client";
import  { useState } from "react";
import { Button,Modal } from "keep-react";
import {  Trash,SignOut } from "phosphor-react";
import { Link } from "react-router-dom";

const SignOutModal = () => {
  const [showErrorModalX, setShowErrorModalX] = useState(false);

  const onClickErrorModal = () => {
    setShowErrorModalX(!showErrorModalX);
  };
  return (
    <>
      <li onClick={onClickErrorModal} className='cursor-pointer border-b-[1px] border-gray-50 hover:bg-gray-100/60 duration-200 text-[12px] flex items-center gap-2 font-light p-2'>
            <SignOut size={13}/>
            <p className='font-medium text-[12px]'>Sign out of all account</p>
          </li>
      <Modal
        icon={<SignOut size={28} color="#E92215" />}
        size="md"
        show={showErrorModalX}
        onClose={onClickErrorModal}
      >
        <Modal.Header>Do you want to logout?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickErrorModal}>
            Cancel
          </Button>
          <span>
          <Button type="primary" color="error" onClick={onClickErrorModal}>
            <Link to={'/login'}>Logout</Link>
          </Button>
          </span>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SignOutModal