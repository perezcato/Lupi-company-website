import React from 'react';



export default function NextProject() {

    return (<section id="nb" className="h-63 relative  w-full ">

        <div className="absolute top-0 h-full w-full flex flex-col justify-center items-center">
            <div className=" w-full flex flex-col justify-center on items-center">
                <p className="glitch-text text-lg lg:text-5xl l-nospacing" data-text="what is your next"> What is your next</p>
                <p className="glitch-text text-lg lg:text-5xl l-nospacing" data-text="big project"> big project?</p>
            </div>

            <div className="banner-btn w-full flex justify-center items-center mt-12 ">
                <button className="b-btn h-12 w-32 outline-none relative">
                    <span className="on text-xl">Contact us</span>
                </button>
            </div>
        </div>
    </section>);
}
