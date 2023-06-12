'use client'
import React,{useState} from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import Needhelp from '../component/Needhelp';
import ModalForNewRetention from '../component/ModalForNewRetention';
import {BsThreeDots} from 'react-icons/bs';

const page = () => {
    const [isModalOn, setIsModalOn ]= useState(false);
    const closeModal=()=> setIsModalOn(false);
    const [isOpen, setIsOpen] = useState(false);


  return (
    <div >
      <main className='container mt-32'>
        <div className='fit flex flex-col w-[75%] m-auto '>
        <div className="firsthalf flex flex-col justify-between gap-11">

            <div className="top flex justify-between items-center">
                <div className="left flex flex-col justify-start">
                    <p className='font-light text-xs md:text-xs'>HDFC BANK</p>
                    <h2 className=' text-blue-500 text-2xl md:text-3xl'>Campaigns</h2>
                </div>
                <div className="right">
                    <button onMouseOver={()=>setIsModalOn(true)} className='flex bg-pink-500 text-white my-2 p-2 w-auto rounded-lg font-medium text-[13px] justify-center items-center gap-[10px]'>NEW CAMPAIGN <AiOutlinePlusCircle className="w-[1.5rem] h-7 relative"/></button>
                </div>
            </div>

            <div className="bottom flex justify-between">
                <div className='bottomleft flex flex-col items-start md:flex-row md:items-center gap-2 md:gap-4'>
                    <p className='font-bold'> SORT BY :</p>
                    <select className='bg-gray-100 w-5 md:w-auto' name="" id="" >
                        <option value="my campaigns">MY CAMPAIGNS</option>
                        <option value="team campaigns">TEAM CAMPAIGNS</option>
                    </select>
                </div>
                <div className='bottomright flex'>
                    <input type="text" className='bg-gray-200 md:p-1 relative w-[150px] md:w-fit left-4 rounded-none' placeholder='     SEARCH'/>
                    <AiOutlineSearch className='relative right-[127px] md:right-[198px] top-4 md:top-2'/>
                </div>
            </div>

            <hr className='relative bottom-9' />
        </div>
        <div className='sencondhalf flex flex-col mt-10 relative bottom-12'>
            <div className="date mb-3"><p>April 2023</p></div>

            <div className="firstorder flex flex-col md:flex-row justify-between p-4 bg-white rounded-lg mb-5 md:items-stretch">
                <div className="left flex flex-col gap-y-1">
                    <p className='text-xs font-light'>ACQUISTION: TIME</p>
                    <h2 className='font-bold text-xl'>Regalia Diwali Offer <span className='font-light'>draft</span></h2>
                    <div className="subcategory flex flex-col md:flex-row mt-3">
                        <p>lastmodified: date</p>
                        <p>created: date</p>
                        <p>creator: name</p>
                    </div>
                </div>

                <div className="right relative flex md:flex-col gap-4 justify-between mt-4">
                    <button onClick={()=>setIsOpen(!isOpen)}><BsThreeDots className='text-[#B6B6B6] w-6 h-6'/></button>

                    {isOpen && (<div className='bg-white border border-[#B6B6B6] border-solid absolute flex flex-col items-start w-[190px] top-6 '>
                                <div className='flex flex-col w-full gap-2 justify-start cursor-pointer'>
                                    <p className='border-b font-semibold text-sm leading-7 border-[#B6B6B6] px-[12px] py-[2px] '>Rename</p>
                                    <p className='border-b font-semibold text-sm leading-7 border-[#B6B6B6] px-[12px] py-[2px] '>Replicated</p>
                                    <p className='border-b border-[#B6B6B6] px-[12px] py-[2px]'>Delete</p>   
                                </div>
                            </div>)}
                    <p>In Progress ...</p>
                </div>
            </div>

            <div className="secondorder flex flex-col md:flex-row justify-between p-4 bg-white rounded-lg mb-5 md:items-stretch">
                <div className="left flex flex-col gap-y-1">
                    <p className='text-xs font-light'>ACQUISTION: TIME</p>
                    <h2 className='font-bold text-xl'>Bill pay Q3 <span className='font-light'>draft</span></h2>
                    <div className="subcategory flex flex-col md:flex-row mt-3">
                        <p>lastmodified: date</p>
                        <p>created: date</p>
                        <p>creator: name</p>
                    </div>
                </div>

                <div className="right flex md:flex-col gap-4 justify-between mt-4">
                    <BsThreeDots className='text-[#B6B6B6] w-6 h-6'/>
                    <p>In Progress..</p>
                </div>
            </div>

            <div className="firstorder flex flex-col md:flex-row justify-between p-4 bg-white rounded-lg mb-5 md:items-stretch">
                <div className="left flex flex-col gap-y-1">
                    <p className='text-xs font-light'>ACQUISTION: TIME</p>
                    <h2 className='font-bold text-xl'>Regalia Diwali Offer <span className='font-light'>draft</span></h2>
                    <div className="subcategory flex flex-col md:flex-row mt-3">
                        <p>lastmodified: date</p>
                        <p>created: date</p>
                        <p>creator: name</p>
                    </div>
                </div>

                <div className="right flex md:flex-col gap-4 justify-between mt-4">
                    <BsThreeDots className='text-[#B6B6B6] w-6 h-6'/>
                    <p>In Progress..</p>
                </div>
            </div>

            <hr className='mb-2 mt-3' />
            <div className="datetwo">MAR 2023</div>
            <div className="thirdorder flex justify-between p-4 bg-white rounded-lg">
                <div className="left flex flex-col gap-y-1">
                    <p className='text-xs font-light'>ACQUISTION: TIME</p>
                    <h2 className='font-bold text-xl'>Regalia Diwali Offer <span className='font-light'>draft</span></h2>
                    <div className="subcategory flex">
                        <p>lastmodified: date</p>
                        <p>created: date</p>
                        <p>creator: name</p>
                    </div>
                </div>
                <div className="right flex md:flex-col gap-4 justify-between mt-4">
                    <BsThreeDots className='text-[#B6B6B6] w-6 h-6'/>
                    <p>In Progress..</p>
                </div>
            </div>
        </div>
        </div>
        <div className="self-end">
          <Needhelp/>
        </div>

      </main>
      {isModalOn && <ModalForNewRetention closeModals={closeModal}/>}
      </div>
  )
}

export default page
