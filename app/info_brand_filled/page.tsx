'use client'
import React, {useState} from 'react'
import { TfiUpload } from 'react-icons/tfi';
import { RxDividerVertical } from 'react-icons/rx';
import Multiselect from 'multiselect-react-dropdown';
import Needhelp from '../component/Needhelp';


const page = () => {
    
    const [options, setOptions] = useState(["option1","option2"])

  return (
    <main className='container flex flex-col w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col w-2/3  justify-center items-center space-y-8 mt-10'>
            <p className="level1 font-normal text-xl md:text-3xl leading-3 md:leading-[30px] text-[#238499] justify-self-start">Edit Brand</p>

            <div className='level2 bg-[#E0E0E0] rounded-xl p-8 md:w-[560px] md:h-fit '>
                <div className='flex flex-col gap-4 overflow-scroll overflow-x-hidden'>
                <h2>UPLOADED FILES</h2>
                <ol role='list' className='list-decimal'>
                    <li>cc_campaign.jpg</li>
                    <li>smartbuy_diwali.pdf</li>
                    <li>regalia_bonusreward_lowelin ...</li>
                </ol>
                <button className='underline self-start '>ADD MORE</button>
                </div>
            </div>

            <div className='level3 bg-white rounded-xl p-8 w-full md:w-[560px] md:h-fit'>
            <form action="" className='space-y-3'>
                <div className="flex flex-col space-y-2 md:grid md:grid-cols-3" >
                    <label htmlFor="brandname" className="text-[#8C8C8C] md:self-center" >BRAND NAME <span className='text-red-500 '>*</span></label>
                    <input type="text" id='brandname' className='bg-[#F4F4F4] p-1  text-[#B6B6B6] md:col-span-2'/>
                </div>
                
                <div className="flex flex-col space-y-2 md:grid md:grid-cols-3" >
                    <label htmlFor="tone" className="text-[#8C8C8C] md:self-center"> BRAND TONALITY <span className='text-red-500'>*</span></label>
                    <div className='text-[#8C8C8C] bg-[#F4F4F4] md:col-span-2'>
                    <Multiselect id='tone'
                    isObject={false}
                    options={options}
                    />
                    </div>
                </div>

                <div className="flex flex-col space-y-2 md:grid md:grid-cols-3" >
                    <label className="text-[#8C8C8C] md:self-center" htmlFor="url">URL</label>
                    <input type="text" id='url' className='bg-[#F4F4F4] p-1 md:col-span-2 text-[#B6B6B6]' />
                </div>

            </form>
            </div>
            
            <div className='level4 flex justify-between items-center w-full md:w-3/5'>
                <a href="/" className='underline'>SAVE BRAND</a>
                <button className='py-1 text-white rounded-md px-4  bg-black'>NEXT</button>
            </div>

        </div>
        <div className="self-end relative right-3 mt-10">
                <Needhelp />
            </div>
    </main>
  )
}

export default page
