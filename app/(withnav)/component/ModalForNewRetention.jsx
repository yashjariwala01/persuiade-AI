import React from 'react'

const ModalForNewRetention = ({closeModals}) => {
  return (
    <>
     <div className='absolute left-0 right-0 top-0 -bottom-full opacity-[.95] bg-[#8C8C8C]'></div>
      
      <div className='absolute flex flex-col top-[50%] left-[50%] md:w-[603px] max-w-[38rem] translate-x-[-50%] translate-y-[-50%] bg-white py-14 px-10 opacity-100'>

        <button className='self-end justify-self-end relative bottom-10 left-6' onClick={closeModals}>x</button>
        
        <form className='flex flex-col space-y-3'>

          <h2 className='mb-6 mt-0 text-lg font-medium leading-7 text-[#004C66]'>NEW RETENTION/ RENEWAL CAMPAIGN</h2>

          <div className='flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-6'>
            <label htmlFor="campaignname" className='justify-start md:self-center font-normal text-xs leading-7'>CAMPAIGN NAME <span className='text-red-500'>*</span></label>
            <input id='campaignname' type="text" placeholder='Name your campaign' className='bg-[#F4F4F4] p-2 text-[#8C8C8C] md:col-span-2' />
          </div>

          <div className='flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-6'>
            <label htmlFor="team" className='justify-start md:self-center font-normal text-xs leading-7'>TEAM  <span className='text-red-500'>*</span></label>
            <input id='team' type="text" placeholder='Pick Team' className='bg-[#F4F4F4] p-2 text-[#8C8C8C] md:col-span-2' />
          </div>

          <div className='flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-6'>
            <label htmlFor="brand" className='justify-start md:self-center font-normal text-xs leading-7'>BRAND  <span className='text-red-500'>*</span></label>
        
            <select
                  className="text-[#8C8C8C] bg-[#F4F4F4] py-2 md:col-span-2"
                  name=""
                  id="brand"
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

export default ModalForNewRetention

