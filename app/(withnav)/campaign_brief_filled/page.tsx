import React from 'react'
import { FaFeatherAlt } from 'react-icons/fa';
import Needhelp from '../component/Needhelp';


const page = () => {

  return (
    <main className='container flex flex-col w-full m-auto min-h-screen justify-center  items-center '>
        <div className='flex flex-col lg:flex-row w-[80%] m-auto justify-center items-center space-y-8 mt-10 mb-3'>
            <div className='left flex flex-col w-full space-y-5'>
                <div className="level1">
                    <p className='font-normal text-xs'>ACQUISITION/ CROSS-SELL CAMPAIGN · HDFC BANK · Bill Pay Q3_draft </p>
                    <h1 className='text-lg md:text-3xl text-[#238499] leading-7 '>Give us your campaign brief</h1>
                </div>
                
                <div className="level2 flex flex-col bg-[#E0E0E0] rounded-xl space-y-4 shadow-lg p-8 md:w-[568px] md:h-fit justify-start">
                    <h5>UPLOADED FILES</h5>
                    <ol className='list-decimal'>
                        <li>metro_acqui_Q4.02221.pdf</li>
                        <li>stretchy_productinfo_0231.doc</li>
                    </ol>
                    <h6 className='underline '>ADD MORE</h6>
                </div>

                <div  className="level3 flex flex-col bg-white rounded-xl space-y-2 shadow-lg p-8 md:w-[568px] md:h-fit">

                <form action="" className='space-y-3'>
                <div className='formsfirsthalf flex flex-col'>
                <div className="flex flex-col space-y-2 md:grid md:grid-cols-3" >
                    <label htmlFor="productname" className=" text-xs md:self-center" >PRODUCT NAME <span className='text-red-500 '>*</span></label>
                    <input type="text" id='prductname' placeholder='Name of product or service' className='bg-[#F4F4F4] p-1  text-[#B6B6B6] text-xs md:col-span-2'/>
                </div>
                
                <div className="flex flex-col space-y-2 md:grid md:grid-cols-3" >
                    <label htmlFor="noofcustomers" className=" text-xs md:self-center">NO. OF CUSTOMERS <span className='text-red-500'>*</span></label>
                    <input type="text" id='numberofcustomers' placeholder='Number of customers for this product or service' className='bg-[#F4F4F4] p-1 text-xs  text-[#B6B6B6] md:col-span-2'/>
                </div>

                <div className="flex flex-col space-y-2 md:grid md:grid-cols-3" >
                    <label className="text-xs md:self-center" htmlFor="benefits">KEY BENEFITS</label>
                    <input type="text" id='benefits' placeholder='E.g. Always on time, Low Cost, Safe' className='bg-[#F4F4F4] text-xs p-1 md:col-span-2 text-[#B6B6B6]' />
                </div>

                <div className="flex flex-col space-y-2 md:grid md:grid-cols-3" >
                    <label className="text-xs md:self-center" htmlFor="creds">CREDS</label>
                    <input type="text" id='creds' placeholder='E.g. India’s No.1,  Leader in,  Estd. 1977,  Powered by,  2 million sold' className='bg-[#F4F4F4] p-1 md:col-span-2 text-xs text-[#B6B6B6]' />
                </div>

                <div className="flex flex-col space-y-2 md:grid md:grid-cols-3" >
                    <label className="text-xs md:self-center" htmlFor="TG">TARGET AUDIENCE</label>
                    <input type="text" id='TG' placeholder='Age, Gender, Location, Interests' className='bg-[#F4F4F4] p-1 md:col-span-2 text-xs text-[#B6B6B6]' />
                </div>

                <div className="flex flex-col space-y-2 md:grid md:grid-cols-3" >
                    <label className="text-xs md:self-center" htmlFor="TG">KEY MESSAGE/OFFER</label>
                    <textarea className='bg-[#F4F4F4] text-xs p-1 md:col-span-2 text-[#B6B6B6]' placeholder='What do you want to communicate to your customers' name="postContent" rows={4} cols={80} />
                </div>

                </div>

                <div className='formssecondhalf flex flex-col md:grid md:grid-cols-3 justify-center items-center md:gap-4 mt-3'>

                    <div className="flex flex-col space-y-1">
                        <label className='text-[10px] leading-7' htmlFor="expirydate">OFFER EXPIRY</label>
                        <input type="date"  id="expirydate" className='bg-[#F4F4F4] p-1 text-[#B6B6B6]'/>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className='text-[10px] leading-7' htmlFor="offerlink">OFFER LINK</label>
                        <input type="text" placeholder='Offer link' id="offerlink" className='bg-[#F4F4F4] text-xs p-1 text-[#B6B6B6]'/>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className='text-[10px] leading-7' htmlFor="promocode">PROMO CODE</label>
                        <input type="text" placeholder='Promo Code'  id="promocode" className=' text-xs bg-[#F4F4F4] p-1 text-[#B6B6B6]'/>
                    </div>
                                        
                </div>

                </form>
            </div>
                    <div className="level4 w-full max-w-[568px] flex justify-between">
                        <a className='underline' href="#"> SAVE DRAFT</a>
                        <button className='px-3 py-2 rounded-md text-white text-xs leading-4 font-medium  bg-black'>CREATE CAMPAIGN</button>
                    </div>
            </div>
            
            <div className='right flex flex-col gap-3'> 
                <div className="level1 flex relative space-y-2">
                    <div className='justify-self-start self-start'>
                        <FaFeatherAlt className='w-7 h-7 absolute -left-[35px] text-[#8C8C8C]'/>
                    </div>
                    <div className='space-y-2'>
                        <h3 className='font-medium text-lg leading-7 text-[#8C8C8C]'>Crafting a great brief</h3>
                        <p className='text-[#8C8C8C] text-sm leading-4'>Good Briefs lead to Great Campaigns.
                        Some thumb rules to craft your message.</p>
                    </div>
                </div>
                <div className="leve2">
                    <div className='flex gap-3'>
                        <div>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <h5 className='text-[#8C8C8C] font-medium text-xs leading-5'>Reward Your Customer</h5>
                            <p className='text-[#8C8C8C] text-xs leading-4'>A discount or offer increases your chances of winning the customer. </p>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <h5  className='text-[#8C8C8C] font-medium text-xs leading-5'>Short and Sweet</h5>
                            <p className='text-[#8C8C8C] text-xs leading-4'>Attention is scarce. Keep you message short and stick to the main selling point. </p>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <h5  className='text-[#8C8C8C] font-medium text-xs leading-5'>Use Simple Language</h5>
                            <p className='text-[#8C8C8C] text-xs leading-4'>Avoid industry speak and abbreviations as they might alienate the customer. </p>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
        <div className='self-end'>
            <Needhelp/>
        </div>
    </main>
  )
}

export default page
