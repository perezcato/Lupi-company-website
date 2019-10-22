import React from 'react';
import webDesign from "../assets/images/technical-support.svg";
import WebDevelopment from "../assets/images/diversify.svg";
import poster from "../assets/images/support.svg";
import mobile from "../assets/images/differentiation.svg";


export default function WhyUs() {
    return (<section id="homeServices" className="services h-65 pb-10  w-full z-20 px-10 lg:pt-5 lg:px-24 relative">
        <div className="services-title w-full text-center">
            <h4 className="uppercase font-bold text-4xl pb-5 on ">Why Choose Us</h4>
            <p className="text-xl">
                We create websites and applications that provide effective solutions
                for your goals
            </p>
        </div>

        <div className="services-card block lg:flex lg:justify-between md:flex md:justify-between flex-wrap relative mt-16">
            <div className="box p-5 on">
                <div className="icon flex justify-center items-center ">
                    <img src={webDesign} className="w-24 h-24" alt="web design logo"/>
                </div>
                <div className="content text-center mt-4">
                    <h1 className="font-bold text-xl ">
                        Support
                    </h1>

                    <p className="text-base mt-2">
                        We provide support and extend your current tech to ensure you maximise your profits
                        and also have value for money
                    </p>
                </div>
            </div>
            <div className="box p-5 mt-10 md:mt-0">
                <div className="icon flex justify-center items-center ">
                    <img src={WebDevelopment} className="w-24 h-24" alt="web design logo"/>
                </div>
                <div className="content text-center mt-4">
                    <h1 className="font-bold text-xl">
                        Different Varieties
                    </h1>

                    <p className="text-base mt-2">
                        At Lupi Inc, we provide you with different vareities of complementary business solutions
                        which is designed for easy management
                    </p>
                </div>
            </div>
            <div className="box p-5 mt-10 md:mt-10 lg:mt-0">
                <div className="icon flex justify-center items-center ">
                    <img src={poster} className="w-24 h-24" alt="web design logo"/>
                </div>
                <div className="content text-center mt-4">
                    <h1 className="font-bold text-xl">
                        Long Lasting Partnership
                    </h1>

                    <p className="text-base mt-2">
                        At Lupi Inc, we are interested in becoming your long term partner helping and supporting your
                        through out your IT journey.
                    </p>
                </div>
            </div>
            <div className="box p-5 mt-10 md:mt-10 lg:mt-0">
                <div className="icon flex justify-center items-center ">
                    <img src={mobile} className="w-24 h-24" alt="web design logo"/>
                </div>
                <div className="content text-center mt-4">
                    <h1 className="font-bold text-xl">
                        Unique Design
                    </h1>

                    <p className="text-base mt-2">
                        At Lupi Inc we believe your company should have a unique product
                        that is different on the market
                    </p>
                </div>
            </div>
        </div>
    </section>)
}
