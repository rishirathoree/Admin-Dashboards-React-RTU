import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TurnBreadModalOpen } from "../../../Store/Slices/AppSlice";
import { Button, Modal, TextInput } from "keep-react";
import { UsersThree, UsersFour, CloudArrowUp } from "phosphor-react";
import Select from "react-select";

const CreateCheckin = () => {

  const BreadOpenState = useSelector((state) => state.App.isBreadModalOpen);
   
    const dispatch = useDispatch();

    const [checkIn,setCheckIn] = useState({
      name:'',
      peoples:0,
      money:0,
      roomType:''
    })

    const handleChange = () => {
      const {name,value} = e.target
      set
    }

  return (
    <div>
      <Button
        onClick={() => {
          dispatch(TurnBreadModalOpen());
        }}
        size={"xs"}
        type={"primary"}
        className="bg-blue-500 text-white gap-2 flex items-center"
      >
        <UsersThree size={20} className="text-white" />
        <p className="font-medium text-white pl-2">Create Check In</p>
      </Button>

      <div className={`fixed top-0 right-0 h-screen w-full bg-black/50 duration-200 z-50 flex items-center justify-center ${BreadOpenState ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        
        <div className={`w-2/3 h-3/4 custom-scroll overflow-hidden overflow-y-auto rounded bg-white px-8 py-6 duration-500 ${BreadOpenState ? 'animate-keep-bounce scale-100 visible opacity-100' : 'invisible opacity-0 scale-50'}`}>

          <div className="flex items-center gap-4">
            <Button
              size={"sm"}
              type="outlineGray"
              onClick={() => {
                dispatch(TurnBreadModalOpen());
              }}
            >
              Cancel
            </Button>
            <Button
              size={"sm"}
              type="primary"
              onClick={() => {
                // Dispatch an action to handle form submission
                dispatch(TurnBreadModalOpen());
              }}
            >
              Create
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CreateCheckin;
