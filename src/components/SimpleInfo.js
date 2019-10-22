import React from 'react';
import Button from "./Banner";


export default function SimpleInfo() {
    return (<section className="h-63  w-full flex justify-between  items-center">
        <div className="section h-full z-3 w-2/4 pr-16 bg-gray-900 relative lg:pl-24 on text-right pt-20">

            <h4 className="text-4xl font-medium">Best Design</h4>
            <p className=" text-lg font-light  leading-normal mt-5">
                Design begins from research of needs of your target audience. The second step is
                prototyping and testing. This ensures that you get not just a pretty picture, but
                the finished product which fulfills your purposes.
            </p>

            <div className="banner-btn w-full flex justify-end items-center mt-12 ">
                <button className="b-btn h-12 w-32 outline-none relative">
                    <span className="on text-xl">Learn More </span>
                </button>
            </div>


        </div>
        <div className="section h-full z-3 w-2/4 pl-16 bg-gray-1000 on lg:pr-24 text-left pt-20">
            <h4 className="text-4xl font-medium">Best Codes</h4>
            <p className=" text-base font-light leading-normal mt-5">
                Our lead engineer will develop an individual structure of your project, which will
                serve you for many years and support scalability and your future needs.
                Our code is a high quality and safety standards.
            </p>
            <div className="banner-btn w-full flex relative justify-start items-center mt-12 ">
                <button className="b-btn  mr-10 h-12 w-32 outline-none relative text-xl"><span className="on">Learn More </span> </button>
            </div>
        </div>


    </section>)

}
