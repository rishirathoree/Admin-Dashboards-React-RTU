import React, { useState } from 'react';

const GeneralForm = () => {
    const [updates, setUpdates] = useState(false);
    const [credentials, setCredentials] = useState({
        email: 'rishirathoree3@gmail.com',
        gstNumber: 'jek2ueb32fidbbkcl3bn',
        firstName: 'rishi',
        lastName: 'rathore',
        phoneNumber: 912912912,
    });

    const handleChange = (e, key) => {
        setCredentials({
            ...credentials,
            [key]: e.target.value,
        });
    };
    console.log(updates)

    return (
        <>
        <div className='space-y-4'>
            
        <div className=" grid grid-cols-2 gap-4">
            {Object.entries(credentials).map(([key, value]) => (
                <div key={key} className='space-y-2'>
                    {/* {updates ? ( */}
                        {/* <> */}
                        <label for={key} className="block uppercase text-[12px] font-medium text-gray-700 dark:text-white">{key}</label>
                        <input
                        type={key === 'phoneNumber' ? 'number' : 'text'}
                        id={key}
                        value={value}
                        onFocus={()=>{setUpdates(true)}}
                        onChange={(e) => handleChange(e, key)}
                        readOnly={!updates}
                        className="ring-[1px] ring-black/5 w-full p-3 text-[12px] rounded-lg focus:outline-none focus:ring-black/20 duration-500 outline-none"
                        placeholder={`Enter ${key}`}
                        required
                        />
                        {/* </>
                    ) : (
                        <div className='flex flex-col space-y-2'>
                            <p className='font-semibold text-[12px] uppercase'>{key}</p>
                            <p onClick={()=>{setUpdates(p=>!p)}}>{value}</p>
                        </div>
                    )} */}
                </div>
            ))}
            
        </div>
        <span className='block space-x-4'>
        <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">{updates ? 'Update' : 'Change'}</button>
        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={()=>{
            setUpdates(false)
            setCredentials({
                email: 'rishirathoree3@gmail.com',
                gstNumber: 'jek2ueb32fidbbkcl3bn',
                firstName: 'rishi',
                lastName: 'rathore',
                phoneNumber: 912912912,
            })}}
        >Cancel</button>
        </span>
        </div>
        </>
    );
};

export default GeneralForm;
