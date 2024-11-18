import React from "react";
import Image from "next/image";
export default function () {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-slate-200 p-12 rounded-lg shadow-lg max-w-4xl w-full flex items-center justify-center border-4 border-sky-300">
          
          
           {/* Bg Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[400px] max-h-[300px]">
              <Image
                src="/images/Picture1.png"
                alt="bg-image"
                width={400}
                height={300}
                objectFit="cover"
                className="opacity-10"
              />
            </div>
          </div>

              {/* Right Section */}

          <div className="w-2/3 pr-4 pt-16 relative z-10">

              <img
              src="/images/GSLogo.png"
              alt="logo"
              className="absolute top-[-20px] left-0 w-16 h-18 z-10"/>



            <p className="mb-2">
              <span className="text-sky-500"><strong> Name: </strong></span>
              <span className="text-black"><strong> Khazra Shaikh </strong></span>
            </p>


            <p className="mb-2">
              <span className="text-sky-500"><strong> Roll No: </strong></span>
              <span className="text-black"><strong>  00001234 </strong></span>
            </p>


            <p className="mb-2">
              <span className="text-sky-500"><strong> Distance Learning: </strong></span>
              <span className="text-black"><strong> No </strong></span>
            </p>


            <p className="mb-2">
              <span className="text-sky-500"><strong> City: </strong></span>
              <span className="text-black"><strong>  Karachi </strong></span>
            </p>


            <p className="mb-2">
              <span className="text-sky-500"><strong> Center: </strong></span>
              <span className="text-black"><strong>  Governor House Karachi </strong></span>
            </p>


            <p className="mb-2">
              <span className="text-sky-500"><strong> Campus: </strong></span>
              <span className="text-black"><strong> Main  </strong></span>
            </p>


            <p className="mb-2">
              <span className="text-sky-500"><strong> Days/Time: </strong></span>
              <span className="text-black"><strong> Tuesday - 02:00 PM - 05:00 PM   </strong></span>
            </p>


            <p className="mb-2">
              <span className="text-sky-500"><strong> Batch: </strong></span>
              <span className="text-black"><strong> 1  </strong></span>
            </p>

          

               {/* Button Section */}

            <div className="flex flex-col mt-4">
              <button className="relative w-full p-1 rounded-lg border border-gray-300 bg-blue-900 text-white flex items-center justify-center ">
                <span className="absolute inset-0 bg-slate-500"
                  style={{width: "50%"}}>
                </span>

                <span className="relative z-10"> Q1 & WMD</span>

              </button>

            </div>
          </div>


             {/* Left Section */}

          <div className="w-1/3 text-center relative z-10">
            <Image src={"/images/myprofile.jpg"}
            alt={"profile"}
            width={250}
            height={250}
            className="rounded-lg mb-6 max-w-[250px] max-h-[250px] "/>

            <p className="border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-10 text-2xl">
               Authorized Signature</p>

          </div>



          




        </div>
      </div>
    </div>
  );
}
