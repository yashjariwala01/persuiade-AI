import React from "react"
import { AiOutlinePlus } from 'react-icons/ai';



const ModalForBrandManual=({closeModal})=>{
       return (
        <>
        <div className='absolute left-0 right-0 top-0 -bottom-full opacity-90 bg-[#004C66]'></div>
        <div className='absolute flex flex-col top-[50%] left-[50%] max-w-[38rem] translate-x-[-50%] translate-y-[-50%] bg-white py-14 px-10 opacity-100'>

        <button className='self-end justify-self-end relative bottom-10 left-6' onClick={closeModal}>X</button>

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-3">
            <div className="left inline-flex flex-col gap-6">
                <div className="flex gap-3 items-center text-[#ED0A97] underline font-medium text-sm leading-4">
                   <AiOutlinePlus className="w-6 h-6 text-white bg-[#ED0A97] rounded-full" />
                   <p>ADD PAST CAMPAIGN</p>
                </div>

                <div className="flex gap-3 items-center text-[#ED0A97] underline font-medium text-sm leading-4">
                <AiOutlinePlus className="w-6 h-6 text-white bg-[#ED0A97] rounded-full" />
                <p>ADD BRAND GUIDELINES</p>
                </div>

                <div className="flex gap-3 items-center font-medium text-sm leading-4">
                <AiOutlinePlus className="w-6 h-6 text-white bg-[#ED0A97] rounded-full" />
                <input type="text" className="p-2 bg-[#F4F4F4]" placeholder="  Enter Brand website" />
                </div>
                <div>Our AI will extract your Brand tonality and pre-fill the Brand form. Dont worry, you can always edit the information before clicking Next.</div>
            </div>

            <div className="right p-8 bg-[#E0E0E0] inline-flex flex-col gap-3 rounded-lg">
                <h4>FILES ADDED</h4>
                <ul>
                    <li>cc_campaign.jpg</li>
                    <li>smartbuy_diwali.pdf</li> 
                    <li>regalia_bonusreward_lowelin ... </li>
                </ul>
            </div>
        </div>

        <div className="bottom flex-col md:flex-row mt-10 justify-between">
            <div className="left flex gap-3">
                <div className="flex items-center gap-1">
                    <input type="checkbox" />
                    <p>Past Campaigns</p>
                </div>
                <div className="flex items-center gap-1">
                    <input type="checkbox" />
                    <p>Guidelines</p>
                </div>
                <div className="flex items-center gap-1">
                    <input type="checkbox" />
                    <p>Website</p>
                </div>
            </div>
            <div className="right justify-end">
                <button className="border border-black py-1 px-3 hover:bg-slate-300 rounded-lg border-solid bg-white self-end justify-self-end">Submit</button>
            </div>
        </div>
      </div>
        </div>
        </>
       )
    }

export default ModalForBrandManual;