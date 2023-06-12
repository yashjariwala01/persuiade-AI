import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

const UploadModalComponent = ({closeModal}) => {
  return (
    <>
        <div className='absolute left-0 right-0 top-0 -bottom-full opacity-[.95] bg-[#8C8C8C]'></div>
        <div className='absolute flex flex-col top-[50%] left-[50%] md:w-[603px] max-w-[38rem] translate-x-[-50%] translate-y-[-50%] bg-white py-14 px-10 opacity-100'>

        <button className='self-end justify-self-end relative bottom-10 left-6' onClick={closeModal}>X</button>

        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-3">
                <div className="left inline-flex flex-col gap-6">
                    <div className="flex gap-3 items-center text-[#ED0A97] underline font-medium text-sm leading-4">
                    <AiOutlinePlus className="w-6 h-6 text-white bg-[#ED0A97] rounded-full" />
                    <p className='font-medium'>ADD FILES</p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <p>Our AI will read your brief document and extract key information. It will pre-fill the adjoining campaign brief form. Don’t worry, you can always edit the pre-filled information before clicking Create Campaign.</p>

                        <p>Accepted formats: doc, pdf, ppt</p>
                    </div>
                </div>

                <div className="right p-8 bg-[#E0E0E0] inline-flex flex-col gap-3 rounded-lg">
                    <h4>FILES ADDED</h4>
                    <ul>
                        <li>metro_acqui_Q4.02221.pdf</li>
                        <li>stretchy_productinfo_0231.doc</li> 
                    </ul>
                </div>
            </div>

            <div className="bottom flex-col md:flex-row mt-10 justify-between">
                <div className="right flex justify-end">
                    <button className="border border-black py-1 px-3 hover:bg-slate-300 rounded-lg border-solid bg-white self-end justify-self-end">Submit</button>
                </div>
            </div>
        </div>
        </div>
        </>
  )
}

export default UploadModalComponent
