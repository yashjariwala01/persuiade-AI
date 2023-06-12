'use client'
import React, {useState} from 'react'
import { TfiUpload } from 'react-icons/tfi';
import Multiselect from 'multiselect-react-dropdown';
import Needhelp from '../component/Needhelp';
import ModalForBrandManual from '../component/ModalForBrandManual'


const Page = () => {
    
    const [options, setOptions] = useState(["option1","option2"])
    const [brandManual, setBrandManual] = useState(false);
    const closeBrandModal=()=> setBrandManual(false);
  

  return (
    <main className='container flex flex-col w-full min-h-screen justify-center items-center m-auto'>
        <div className='flex flex-col w-2/3  justify-center items-center space-y-8 mt-10'>
            
            <p className="level1 font-normal text-xl md:text-3xl leading-3 md:leading-[30px] text-[#238499] justify-self-start">Tell us about your brand</p>

            <div className='bg-[#E0E0E0] rounded-xl p-8 md:w-[560px] md:h-fit'>
                <div className='flex flex-col gap-4'>
                <p className='font-semibold leading-8 text-center'>Help our AI learn about your brand (optional)</p>

                <button onClick={()=> setBrandManual(true)} className='bg-[#ED0A97] rounded-lg p-2 md:w-fit self-center flex gap-1'><p className='text-white text-xs self-center'>Past Campaigns & Brand Manual</p><TfiUpload className='bg-white rounded-md text-[#ED0A97] w-[59px] h-[30px] p-1 place-self-center'/></button>

                <p className='text-xs self-center'>File formats: jpg, pdf, doc, ppt, html</p>
                </div>
            </div>

            <div className='bg-white rounded-xl p-8 w-full md:w-[560px] md:h-fit'>

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
            
            <div className='flex justify-between items-center w-full md:w-3/5'>
                <a href="/" className='underline'>SAVE BRAND</a>
                <button className='bg-[#BFBFBF] p-2 rounded-md'>NEXT</button>   
            </div>

        </div>

        <div className="self-end relative right-3 mt-10">
                <Needhelp />
        </div>
        
        {brandManual && <ModalForBrandManual closeModal={closeBrandModal}/>}
    </main>
  )
}

export default Page
