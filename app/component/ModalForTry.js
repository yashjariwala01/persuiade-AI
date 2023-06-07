"use client"
import React, {useState} from 'react'
import Multiselect from 'multiselect-react-dropdown'


const ModalForTry=({closeModal})=>{
    const [options, setoptions]=useState([
    "Credit Card",
    "Smart Buy",
    "InstaLoan",])
    return(
        <>
        <div className='absolute left-0 right-0 top-0 bottom-0 opacity-90 bg-[#004C66]'> 
        </div>
        <div className='absolute flex flex-col top-[50%] left-[50%] max-w-[38rem] translate-x-[-50%] translate-y-[-50%] bg-white py-14 px-10 opacity-100'>
            <button className='self-end justify-self-end relative bottom-10 left-6' onClick={closeModal} >X</button>
            
            <h2 className=' text-lg text-[#004C66] font-medium'>NEW ACQUISITION/ CROSS-SELL CAMPAIGN</h2>

            <form action="" className='flex flex-col space-y-4 mt-6'>

                <div className='flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-6'>
                    <label htmlFor="" className='self-center'>CAMPAIGN NAME <span className='text-red-500'>*</span></label>
                    <input type="text" placeholder='Name your campaign' className='text-[#8C8C8C] bg-[#F4F4F4] md:col-span-2 p-2' />
                </div>

                <div className='flex flex-col md:grid md:grid-cols-3 gap-2  md:gap-6'>
                    <label htmlFor="" className=' self-center'>MY TEAMS <span className='text-red-500'>*</span></label>
                        <div className="text-[#8C8C8C] bg-[#F4F4F4] md:col-span-2">
                            <Multiselect
                                showCheckbox
                                isObject={false}
                                options={options}
                            />
                        </div>
                </div>

                <div className='flex flex-col md:grid md:grid-cols-3 gap-2  md:gap-6'>
                    <label htmlFor="" className='self-center'>Brand <span className='text-red-500'>*</span></label>
                    <select
                  className="text-[#8C8C8C] bg-[#F4F4F4] py-2 md:col-span-2"
                  name=""
                  id=""
                >
                  <option
                    className="text-[#8C8C8C] hover:bg-[#F4F4F4]"
                    value=""
                    disabled
                  >
                    HDFC bank
                  </option>
                  <option className="text-[#8C8C8C] hover:bg-black" value="">
                    ADANI GROUP
                  </option>
                  <option
                    className="text-[#8C8C8C] hover:bg-[#F4F4F4]"
                    value=""
                  >
                    PATANJALI
                  </option>
                  <option
                    className="text-[#8C8C8C] hover:bg-[#F4F4F4]"
                    value=""
                  >
                    RELIANCE
                  </option>
                  <option
                    className="text-[#8C8C8C] hover:bg-[#F4F4F4]"
                    value=""
                  >
                    QR STAFF
                  </option>
                </select>
                </div>

            </form>
        </div>
        </>
    )
}

export default ModalForTry;