"use client"
import React, {useState} from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Needhelp from '../component/Needhelp';
import ModalForTry from '../component/ModalForTry'; 


const page = () => {
    const [tryModal, setTryModal] = useState(false);
    
    const closeTryModal=()=> setTryModal(false);

  return (
    
    <main className='container flex flex-col w-full min-h-screen justify-center items-center m-auto'>
        <div className='flex flex-col w-3/4 items-center space-y-20 mt-20'>
            <div>
                <p className='text-2xl'>Hi Parag, choose the type of campaign?</p>
            </div>
            <div className='flex flex-col justify-between gap-10 md:flex-row'>
                <div onClick={()=>setTryModal(true)} className='flex flex-col items-center gap-4'>
                    <h3 className='text-4xl  font-bold'>try</h3>
                    <p className='text-sm text-center'>Acquire new customers
                    Cross-sell to existing customers</p>
                    <div>
                    <BsFillArrowRightCircleFill className='w-9 h-9'/>
                    </div>
                </div>
                

                <div className='flex flex-col items-center gap-4'>
                    <h3 className='text-4xl font-bold '>re-buy</h3>
                    <p className='text-sm text-center'>Get existing customers to buy again
                    Get customers to renew</p>
                    <BsFillArrowRightCircleFill className='w-9 h-9'/>
                </div>

                <div className='flex flex-col items-center gap-4'>
                    <h3 className='text-4xl font-bold '>upgrade</h3>    
                    <p className='text-sm text-center'>Get customers to upgrade
                    Up-sell to existing customers</p>
                    <BsFillArrowRightCircleFill className='w-9 h-9'/>
                </div>
                
        </div>
            </div>
            <div className="self-end space-y-8 mt-28">
             <Needhelp/>
            </div>

            {tryModal && < ModalForTry closeModal={closeTryModal}/>}
            
    </main>
  )
}

export default page
