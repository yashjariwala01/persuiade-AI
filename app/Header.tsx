"use client"
import React, { useState } from 'react'
import Link from "next/link"
import { AiOutlineCaretDown } from 'react-icons/ai'
import { AiOutlineCaretUp } from 'react-icons/ai'
import { BsPlusCircle } from 'react-icons/bs';
import {TfiAnnouncement} from 'react-icons/tfi'
import {FaAward} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {MdInsertEmoticon} from 'react-icons/md'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div >
      <ul className='flex justify-between bg-black text-white'>
       <div className='flex gap-2 items-center'>
       <Link href={'/'} >persuaide</Link> 
       </div>

       <div className='flex gap-2 items-center '>
        <p>Hi parag</p>
        <p><CgProfile className="w-5 h-5"/></p>

              <div className='relative flex flex-col items-center shadow-lg w-fit'>
                <button onClick={()=> setIsOpen(!isOpen )} className=' bg-black w-full p-1 '>
                {!isOpen ? (
                  <AiOutlineCaretDown className='h-8'/>):
                  <AiOutlineCaretUp className='h-8'/>}
                </button>

            {isOpen && (<div className='bg-white absolute top-12 flex flex-col items-start rounded-lg p-2 w-[190px] right-[15px] '>
                <div className='flex flex-col w-full justify-start cursor-pointer rounded-lg '>
                    
                    <Link className='flex gap-2 p-2 w-full  hover:bg-[#F4F4F4] items-center border-solid border-b-2' href={'/my_campaigns'}>
                       <BsPlusCircle   className='text-[#000000]'/>
                       <p className='font-medium text-sm leading-7 text-[#000000]'> New Campaign</p>
                    </Link> 
                    
                    <Link className='flex gap-2 p-2 hover:bg-[#E0E0E0] items-center border-solid border-b-2' href={'/infobrand'}>
                      <TfiAnnouncement  className='text-[#000000]'/>
                      <p className='font-medium text-sm leading-7 text-[#000000]'>Brands</p>
                    </Link> 

                    <Link className='flex gap-2 p-2 hover:bg-[#E0E0E0] items-center border-solid border-b-2' href={'/info_brand_filled'}>
                      <FaAward  className='text-[#000000]'/>
                      <p className='font-medium text-sm leading-7 text-[#000000]'>Brand filled form</p> 
                    </Link>

                    <Link className='flex gap-2 p-2 hover:bg-[#E0E0E0] items-center border-solid border-b-2' href={'/admin_user_details'} >
                      <CgProfile className='text-[#000000]'/>
                      <p className='font-medium text-sm leading-7 text-[#000000]'>Profile</p>
                    </Link>
                    
                    <Link className='flex gap-2 p-2 hover:bg-[#E0E0E0] items-center border-solid border-b-2' href={'/campaigntype'} >
                      <MdInsertEmoticon className='text-[#000000]'/>
                      <p className='font-medium text-sm leading-7 text-[#000000]'>Campaign Type</p>
                    </Link>

                    <Link className='flex gap-2 p-2 hover:bg-[#E0E0E0] items-center border-solid border-b-2' href={'/my_account_profile'} >
                      <MdInsertEmoticon className='text-[#000000]'/>
                      <p className='font-medium text-sm leading-7 text-[#000000]'>My Account Profile</p>
                    </Link>

                    <Link className='flex gap-2 p-2 hover:bg-[#E0E0E0] items-center border-solid border-b-2' href={'/campaign_brief'} >
                      <MdInsertEmoticon className='text-[#000000]'/>
                      <p className='font-medium text-sm leading-7 text-[#000000]'>campaign_brief</p>
                    </Link> 

                </div>

            </div>
            )}          
          </div>
       </div>
        
      </ul>
    
    </div>
  )
}

export default Header


