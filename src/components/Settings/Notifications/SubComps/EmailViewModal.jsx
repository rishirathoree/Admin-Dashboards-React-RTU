import React, { useRef } from 'react';
import {X} from 'phosphor-react'
const EmailViewModal = ({ state = {}, onCancel }) => {
    const overlay = useRef();

    const overlayClick = (e) => {
        if (overlay.current && e.target === overlay.current) {
            onCancel();
        }
    };

    return (
        <div ref={overlay} onClick={overlayClick} className={`fixed top-0 left-0 bg-black/20 h-screen flex items-center justify-center w-full z-50 duration-500 ${state ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div className={`w-2/3 h-[90vh] bg-white rounded-lg ${state ? ' animate-keep-bounce scale-100 duration-500 opacity-100' : 'scale-90 invisible opacity-0 -translate-y-4'} `}>
                <span className='flex justify-between items-center border-b-[1px] border-gray-50 p-4'>
                    <p className='font-medium text-gray-600 text-[12px]'>Email</p>
                    <X onClick={onCancel} size={20}/>
                </span>
                <p className='font-medium text-[12px] p-4 border-b-[1px] border-gray-50'>Subject : {state?.randomMailSubjects}</p>
                <p className='font-medium text-[12px] p-4 border-b-[1px] border-gray-50 whitespace-pre-wrap	'>{state?.randomEmailMessages}</p>
            </div>
        </div>
    );
};

export default EmailViewModal;
