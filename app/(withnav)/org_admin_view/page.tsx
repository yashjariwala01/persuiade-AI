'use client'
import React, {useState} from 'react'
import { RiTeamFill } from 'react-icons/ri';
import {AiFillPlusCircle} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {BsThreeDots} from 'react-icons/bs';

const page = () => {
    const [isOpen, setIsOpen]= useState(false);
    const [isOpenUsers, setIsOpenUsers]= useState(false);

  return (
    <main className='container m-auto flex flex-col w-full min-h-screen justify-center items-center'>
      <div className='flex flex-col w-[90%] justify-center items-center space-y-8 mt-10'>
        <div className="level1 flex flex-col self-start">
            <p className='text-xs leading-7 text-[#000000]'>HDFC BANK</p>
            <h1 className='text-[32px] leading-7 text-[#238499]'>My Organization</h1>
        </div>
        <div className="level2 flex flex-col justify-between md:flex-row gap-11 w-full">
            <div className="left space-y-3   w-full">
                <div className="top flex justify-between items-center">
                    <div className="left-lefttop flex flex-col items-center">
                        <RiTeamFill className='w-10 h-10'/>
                        <h6 className='text-xs leading-7'>TEAMS</h6>
                    </div>
                    <div className="left-righttop">
                        <button className='flex gap-2 items-center bg-[#004C66] p-3 rounded-xl   text-white text-xs leading-7 font-medium px-6 py-2'>NEW TEAM <AiFillPlusCircle className='w-8 h-10 text-white'/></button>
                    </div>
                </div>
                <hr />
                <div className="bottom flex flex-col w-full bg-white rounded-xl mt-[19px]">
      
                    <div className='flex border-solid border-b-2 justify-between mt-2 p-5'>
                        <div className='left flex flex-col space-y-3'>
                            <h2 className='text-[16px] leading-7 font-medium'>Credit Card</h2>
                            <div className='flex gap-4 items-center'>
                                <label htmlFor="" className='text-xs leading-7 text-[#8C8C8C]' >USERS</label>
                                <div className='flex gap-4'>
                                    <button className='px-2 py-1 rounded-lg text-[#8C8C8C] bg-[#E0E0E0] text-xs leading-7'>Sunil</button>
                                    <button className='px-2 py-1 rounded-lg text-[#8C8C8C] bg-[#E0E0E0] text-xs leading-7'>Parag</button>
                                    <button className='px-2 py-1 rounded-lg text-[#8C8C8C] bg-[#E0E0E0] text-xs leading-7'>Arvind</button>
                                </div>
                            </div>
                            <div>
                                <p className='text-xs leading-7 text-[#8C8C8C]'>Last Campaign: 29th March 2023</p>
                            </div>
                        </div>
                        <div className='right relative bottom-4'>
                            <button onClick={()=>setIsOpen(!isOpen)}>
                                <BsThreeDots className='text-[#B6B6B6] w-7 h-7'/>
                            </button>
                            {isOpen && (
                            <div className='bg-white border border-[#B6B6B6] border-solid absolute flex flex-col items-start w-[190px]'>
                                <div className='flex flex-col w-full gap-2 justify-start cursor-pointer'>
                                    <p className='border-b border-[#B6B6B6] px-[12px] py-[2px] '>Edit Profile</p>
                                    <p className='border-b border-[#B6B6B6] px-[12px] py-[2px] '>Add/Remove Users</p>
                                    <p className='border-b border-[#B6B6B6] px-[12px] py-[2px]'>View Campaigns</p>
                                    <p className='border-b border-[#B6B6B6] px-[12px] py-[2px]'>Delete</p>   
                                </div>
                            </div>)}
                        </div>
                    </div>

                    <div className='flex border-solid border-b-2 justify-between mt-2 p-5'>
                        <div className='left flex flex-col space-y-3'>
                            <h2 className='text-[16px] leading-7 font-medium'>Smart Buy Offers</h2>
                            <div className='flex gap-4 items-center'>
                                <label htmlFor="" className='text-xs leading-7 text-[#8C8C8C]'>USERS</label>
                                <div className='flex gap-4'>
                                    <button className='px-2 py-1 rounded-lg text-[#8C8C8C] bg-[#E0E0E0] text-xs leading-7'>Sunil</button>
                                    <button className='px-2 py-1 rounded-lg text-[#8C8C8C] bg-[#E0E0E0] text-xs leading-7'>Parag</button>
                                    <button className='px-2 py-1 rounded-lg text-[#8C8C8C] bg-[#E0E0E0] text-xs leading-7'>Swadha</button>
                                </div>
                            </div>
                            <div>
                                <p className='text-xs leading-7 text-[#8C8C8C]'>Last Campaign: 29th March 2023</p>
                            </div>
                        </div>
                        <div className='right bottom-4'>
                            <BsThreeDots className='text-[#B6B6B6] w-7 h-7'/>
                        </div>
                    </div>

                    <div className='flex border-solid border-b-2 justify-between mt-2 p-5'>
                        <div className='left flex flex-col space-y-3'>
                            <h2 className='text-[16px] leading-7 font-medium'>Insta Loan</h2>
                            <div className='flex gap-4 items-center'>
                                <label htmlFor="" className='text-xs leading-7 text-[#8C8C8C]' >USERS</label>
                                <div className='flex gap-4'>
                                    <button className='px-2 py-1 rounded-lg text-[#8C8C8C] bg-[#E0E0E0] text-xs leading-7'>Sunil</button>
                                    <button className='px-2 py-1 rounded-lg text-[#8C8C8C] bg-[#E0E0E0] text-xs leading-7'>Parag</button>
                                    <button className='px-2 py-1 rounded-lg text-[#8C8C8C] bg-[#E0E0E0] text-xs leading-7'>Swadha</button>
                                </div>
                            </div>
                            <div>
                                <p className='text-xs leading-7 text-[#8C8C8C]'>Last Campaign: 29th March 2023</p>
                            </div>
                        </div>
                        <div className='right bottom-4'>
                            <BsThreeDots className='text-[#B6B6B6] w-7 h-7'/>
                        </div>
                    </div>

                    <div className='flex border-solid border-b-2 justify-between mt-2 p-5'>
                        <div className='left flex flex-col space-y-3'>
                            <h2 className='text-[16px] leading-7 font-medium'>Bill Pay</h2>
                            <div className='flex gap-4 items-center'>
                                <label htmlFor="" className='text-xs leading-7 text-[#8C8C8C]' >USERS</label>
                                <div className='flex gap-4'>
                                    <button className='px-2 py-1 rounded-lg text-[#8C8C8C] bg-[#E0E0E0] text-xs leading-7'>Sunil</button>
                                    <button className='px-2 py-1 rounded-lg text-[#8C8C8C] bg-[#E0E0E0] text-xs leading-7'>Parag</button>
                                    <button className='px-2 py-1 rounded-lg text-[#8C8C8C] bg-[#E0E0E0] text-xs leading-7'>Swadha</button>
                                </div>
                            </div>
                            <div>
                                <p className='text-xs leading-7 text-[#8C8C8C]'>Last Campaign: 29th March 2023</p>
                            </div>
                        </div>
                        <div className='right bottom-4'>
                            <BsThreeDots className='text-[#B6B6B6] w-7 h-7'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right space-y-5 w-full">
                <div className="top flex justify-between items-center">
                    <div className="left-lefttop flex flex-col items-center">
                        <BiUserCircle className='w-8 h-8'/>
                        <h6 className='text-xs leading-7' >USERS</h6>
                    </div>
                    <div className="left-righttop flex">
                        <button className='flex gap-2 items-center bg-[#004C66] p-3 rounded-xl text-white text-xs leading-7 font-medium px-6 py-2'>ADD USERS <AiFillPlusCircle className='w-8 h-10 text-white'/></button>
                    </div>
                </div>
                <hr />
                <div className="bottom w-full gap-5 space-y-5">
                   <div className=' bg-white rounded-xl p-8 flex justify-between'>
                    <div>
                        <h3>Sunil Nathani</h3>
                        <p className='text-xs leading-7 text-[#8C8C8C]'>Last Campaign: 29th Mar 2023</p>
                    </div>
                    <div className='right relative bottom-4'>
                            <button onClick={()=>setIsOpenUsers(!isOpenUsers)}>
                                <BsThreeDots className='text-[#B6B6B6] w-7 h-7'/>
                            </button>
                            {isOpenUsers && (
                            <div className='bg-white border border-[#B6B6B6] border-solid absolute top-12 flex flex-col items-start w-[190px] right-[15px] '>
                                <div className='flex flex-col w-full gap-2 justify-start cursor-pointer'>
                                    <p className='border-b border-[#B6B6B6] px-[12px] py-[2px] '>Edit</p>
                                    <p className='border-b border-[#B6B6B6] px-[12px] py-[2px]'>Add/ Remove Users</p>
                                    <p className='border-b border-[#B6B6B6] px-[12px] py-[2px]'>View Campaigns</p>   
                                    <p className='border-b border-[#B6B6B6] px-[12px] py-[2px]'>Delete</p>
                                </div>
                            </div>)}
                        </div> 
                   </div> 

                   <div className=' bg-white rounded-xl p-8 flex justify-between'>
                    <div>
                        <h3>Mrunali Sathe</h3>
                        <p className='text-xs leading-7 text-[#8C8C8C]'>Last Campaign: 12th Feb 2023</p>
                    </div>
                    <div>
                        <BsThreeDots className='text-[#B6B6B6] w-7 h-7'/>
                    </div> 
                   </div>   

                   <div className=' bg-white rounded-xl p-8 flex justify-between'>
                    <div>
                        <h3>Arvind Dutta</h3>
                        <p className='text-xs leading-7 text-[#8C8C8C]'>Last Campaign: 2nd Nov 2022</p>
                    </div>
                    <div>
                        <BsThreeDots className='text-[#B6B6B6] w-7 h-7'/>
                    </div> 
                   </div> 

                   <div className=' bg-white rounded-xl p-8 flex justify-between'>
                    <div>
                        <h3>Anand Damani</h3>
                        <p className='text-xs leading-7 text-[#8C8C8C]'>Last Campaign: 2nd Nov 2022</p>
                    </div>
                    <div>
                        <BsThreeDots className='text-[#B6B6B6] w-7 h-7'/>
                    </div> 
                   </div> 

                   <div className=' bg-white rounded-xl p-8 flex justify-between'>
                    <div>
                        <h3>Parag Kulkarni</h3>
                        <p className='text-xs leading-7 text-[#8C8C8C]'>Last Campaign: 29th Mar 2023</p>
                    </div>
                    <div>
                        <BsThreeDots className='text-[#B6B6B6] w-7 h-7'/>
                    </div> 
                   </div> 

                   <div className=' bg-white rounded-xl p-8 flex justify-between'>
                    <div>
                        <h3>some more random names</h3>
                        <p className='text-xs leading-7 text-[#8C8C8C]'>Last Campaign: 11th Feb 2023</p>
                    </div>
                    <div>
                        <BsThreeDots className='text-[#B6B6B6] w-7 h-7'/>
                    </div> 
                   </div> 

                </div>
                <div className=""></div>
            </div>
        </div>
      </div>
      <div></div>
    </main>
  )
}

export default page
