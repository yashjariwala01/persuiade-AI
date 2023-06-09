"use client";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
import Needhelp from "../component/Needhelp";

export default function Home() {
  const [options, setOptions] = useState([
    "Credit Card",
    "Smart Buy",
    "InstaLoan",
  ]);
  return (
    <main className="container flex flex-col w-full min-h-screen justify-center items-center m-auto mt-10">
      <div className="flex flex-col w-3/ m-auto justify-center items-center space-y-8">
        <div className="level1 justify-self-start self-start">
          <p className="text-[#8C8C8C] leading-8 text-sm">NEW ACCOUNT</p>
          <h2 className="text-[#238499] font-normal text-[32px]">User info</h2>
        </div>
        <div className="level2">
          <div className="bg-white rounded-xl shadow-lg p-8 md:w-[560px] md:h-fit">
            <form action="" className="flex flex-col space-y-2">
              <div>
                <p className="text-[#8C8C8C]">
                  Enter details and we will send you verification email{" "}
                </p>
              </div>

              <div className="flex flex-col space-y-2 md:grid md:grid-cols-3 ">
                <label className="text-[#8C8C8C] self-center" htmlFor="">
                  FIRST NAME <span className="text-red-500">*</span>
                </label>
                <input type="text" className="bg-[#F4F4F4] py-1 md:col-span-2" />
              </div>

              <div className="flex flex-col space-y-2 md:grid md:grid-cols-3 ">
                <label className="text-[#8C8C8C] self-center" htmlFor="">
                  LAST NAME <span className="text-red-500">*</span>
                </label>
                <input type="text" className="bg-[#F4F4F4] py-1 md:col-span-2" />
              </div>

              <div className="flex flex-col space-y-2 md:grid md:grid-cols-3">
                <label className="text-[#8C8C8C] self-center" htmlFor="">
                  EMAIL <span className="text-red-500">*</span>
                </label>
                <input type="email" className="bg-[#F4F4F4] py-1 md:col-span-2" />
              </div>

              <div className="flex flex-col space-y-2 md:grid md:grid-cols-3">
                <label className="text-[#8C8C8C] self-center" htmlFor="">
                  TEAM <span className="text-red-500">*</span>
                </label>
                <div className="text-[#8C8C8C] bg-[#F4F4F4] md:col-span-2">
                  <Multiselect
                    showCheckbox
                    isObject={false}
                    options={options}
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2 md:grid md:grid-cols-3">
                <label className="text-[#8C8C8C] self-center" htmlFor="">
                  ORGANISATION <span className="text-red-500">*</span>
                </label>
                <input type="email" className="bg-[#F4F4F4] py-1 md:col-span-2" />
              </div>

              <div className="flex flex-col space-y-2 md:grid md:grid-cols-3">
                <label className="text-[#8C8C8C] self-center" htmlFor="">
                  INDUSTRY<span className="text-red-500">*</span>
                </label>
                <select
                  className="text-[#8C8C8C] bg-[#F4F4F4] py-2 md:col-span-2"
                  name=""
                  id=""
                >
                  <option
                    className="text-[#8C8C8C] hover:bg-[#F4F4F4]"
                    value=""
                    disabled
                  >
                    Pick Industry
                  </option>
                  <option className="text-[#8C8C8C] hover:bg-black" value="">
                    logistics
                  </option>
                  <option
                    className="text-[#8C8C8C] hover:bg-[#F4F4F4]"
                    value=""
                  >
                    FMCG
                  </option>
                  <option
                    className="text-[#8C8C8C] hover:bg-[#F4F4F4]"
                    value=""
                  >
                    Finance
                  </option>
                  <option
                    className="text-[#8C8C8C] hover:bg-[#F4F4F4]"
                    value=""
                  >
                    IT Sector
                  </option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div className="endlevel text-end my-10 justify-self-end self-end ">
          <button className="bg-gray-400 px-3 py-2 rounded-md text-white">
            CREATE
          </button>
        </div>
        </div>
        <div className="self-end">
          <Needhelp/>
        </div>
    </main>
  );
}
