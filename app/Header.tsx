"use client"
import React from 'react'
import Link from "next/link"
import { Dropdown } from 'flowbite-react'
import { BsPlusCircle } from 'react-icons/bs';

const header = () => {
  return (
    <div >
      <ul className='flex justify-between bg-black text-white'>
       <div>
       <Link href={'/'} >persuaide</Link> 
       </div>

       <div className='flex '>
        <p>Hi parag</p>
        <p>image</p>
        <div className='bg-black'>
         <Dropdown className='bg-black' label="">
            <Dropdown.Item className='hover:bg-[#E5E2E2]'>
               <Link className='flex justify-center items-center gap-2' href={'/my_campaigns'}> <p> New Campaign</p></Link> 
            </Dropdown.Item>
            <Dropdown.Item>
                <Link className='flex justify-center items-center gap-2' href={'/infobrand'}>Brands</Link> 
            </Dropdown.Item>
            <Dropdown.Item>
                <Link className='flex justify-center items-center gap-2' href={'/info_brand_filled'}><p>Brand filled form</p> </Link> 
            </Dropdown.Item>
            <Dropdown.Item>
                <Link className='flex justify-center items-center gap-2' href={'/campaigntype'} ><p>Campaign Type</p></Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link className='flex justify-center items-center gap-2' href={'/admin_user_details'} ><p>Profile</p></Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link className='flex justify-center items-center gap-2' href={'/my_account_profile'} ><p>My Account Profile</p></Link>
            </Dropdown.Item>
        </Dropdown>
        </div>
       </div>
        
      </ul>
    
    </div>
  )
}

export default header