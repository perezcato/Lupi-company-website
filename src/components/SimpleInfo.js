import React from 'react';


export default function SimpleInfo() {
    return (<section className="h-63 w-full flex justify-between  items-center">
        <div className="section h-full w-2/4 pr-16 flex flex-col items-end bg-gray-900 relative lg:pl-24 text-right pt-10">
            <h4 className="text-4xl font-medium">Best Design</h4>
            <p className=" text-base font-light leading-normal mt-5">
                Design begins from research of needs of your target audience. The second step is
                prototyping and testing. This ensures that you get not just a pretty picture, but
                the finished product which fulfills your purposes.
            </p>
            <button className="btn-green relative outline-none text-white font-bold h-12 rounded w-32 mt-6">
                Read More
            </button>

        </div>
        <div className="section h-full w-2/4 pl-16 bg-gray-1000 flex flex-col items-start relative lg:pr-24 text-left pt-10">
            <h4 className="text-4xl font-medium">Best Codes</h4>
            <p className=" text-base font-light leading-normal mt-5">
                Design begins from research of needs of your target audience. The second step is
                prototyping and testing. This ensures that you get not just a pretty picture, but
                the finished product which fulfills your purposes.
            </p>
            <button className="btn-blue relative outline-none text-white font-bold h-12 rounded w-32 mt-6">
                Read More
            </button>
        </div>

    </section>)

}
