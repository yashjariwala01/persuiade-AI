import { AiFillPlayCircle } from 'react-icons/ai';
// import Needhelp from './component/Needhelp';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';
import Needhelp from './(withnav)/component/Needhelp';

export default function Home() {
  return (
   <main className="container flex w-full min-h-screen justify-center items-center m-auto mt-10">
    {false && <Header/>}
    <div className="flex flex-col p-4 space-y-12 w-full max-w-4xl ">
      <div className="level1 flex flex-col space-y-5 items-center justify-center">
        <div className="vectorImages flex relative">
          {/* <Image src='/image/Layer_7.jpeg' width={191} height={39} alt='logo'/> */}
        </div>
        <p className=" font-normal text-sm leading-5  text-center text-[#000000]">
        <span> Instant marketing with the power of </span>
        <br />{" "}
        <span className="text-[#ED0A97] font-bold">
          {/* Behavioural science + A.I */}
        </span>
      </p>
      </div>
      <div className="level2 inline-flex justify-center items-center ">
          <div className="bg-white rounded-xl shadow-lg p-8 md:w-[560px] md:h-[349px]">
              <form action="" className="flex flex-col space-y-2 ">

                <div className="flex flex-col space-y-3 md:grid md:grid-cols-3 md:items-center">
                  <label className="md:hidden text-[#8C8C8C] md:col-span-1" htmlFor="username">USERNAME/EMAIL</label>
                  <label className="md:block hidden text-[#8C8C8C] md:col-span-1" htmlFor="username">USERNAME/ <br /> EMAIL</label>

                  <div className="md:col-start-2 md:col-end-4">
                    <input type="email" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" />
                    <p className="text-[#8C8C8C] text-sm underline">Forgot Username</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-3 md:grid md:grid-cols-3 md:items-center">
                  <label className="text-[#8C8C8C] md:col-span-1" htmlFor="username">PASSWORD</label>
                  <div className="md:col-start-2 md:col-end-4">
                    <input type="email" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" />
                    <p className="text-[#8C8C8C] text-sm underline">Forgot Password</p>
                  </div>
                </div>

                <div className="keepmlogin flex md:justify-center justify-start">
                <input id="checkbox" type="checkbox" className=" checked:bg-blue-500 mb-5 relative " />
                <label htmlFor="checkbox" className="relative left-2 -top-[4px]">Keep me logged in</label>
                </div>

                <div className="buttons flex justify-between ">
                  <div className="registerbutton">
                  <button className="bg-white border border-black text-black p-3 w-28 rounded-md font-medium bottom-4"> REGISTER </button>
                  <p className="relative text-[13px] text-[#8C8C8C] text-center">Create an account</p>
                  </div> 
                  <div className="loginbutton">
                  <Link className='flex justify-center items-center gap-2' href={'/campaigntype'} > <button className="bg-black border border-black text-white p-3 w-28 rounded-md font-medium bottom-4"> LOG IN </button> 
                  </Link>

                  <p className="relative text-[13px] text-[#8C8C8C] text-center">Already a user</p>
                  </div>
                </div>
              </form>
          </div>
      </div>
    
      <div className="level3 grid grid-rows-3">
      <div className="self-center justify-self-center ">
                <AiFillPlayCircle className="text-blue-700 w-12 h-12 md:w-14 md:h-14 mt-3"/>
                <p className='text-sm text-[#8C8C8C]'>Watch demo</p>
      </div>
      <div className='relative self-end md:left-[223px] justify-self-end '>
      <Needhelp/>
      </div>
      <div className='mt-10 text-center'>
        <p><span>© </span> copyright Persuaide Software Solutions Pvt Ltd 2023</p>
      </div>
      
      </div>
    </div>
   </main>
  );
}
