import React from "react";

import webDesign from '../assets/images/login.svg';
import WebDevelopment from '../assets/images/programming.svg';
import poster from '../assets/images/poster.svg';
import mobile from '../assets/images/application.svg';

export default function Services() {
  return (
    <section id="homeServices" className="services h-65 w-full z-20 lg:pt-20 lg:px-24 relative">
      <div className="services-title w-full text-center">
        <h4 className="uppercase font-bold text-3xl pb-5">What we do</h4>
        <p className="text-base">
          We create websites and applications that provide effective solutions
          for your goals
        </p>
      </div>

        <div className="services-card flex justify-between relative mt-16">
            <div className="box p-5">
                <div className="icon flex justify-center items-center ">
                    <img src={webDesign} className="w-24 h-24" alt="web design logo"/>
                </div>
                <div className="content text-center mt-4">
                    <h1 className="font-bold text-lg">
                        Web Design
                    </h1>

                    <p className="text-sm mt-2">
                        We develop websites of any complexity and for any purpose.
                        From fashion websites to large Internet portals
                    </p>
                </div>
            </div>
            <div className="box p-5">
                <div className="icon flex justify-center items-center ">
                    <img src={WebDevelopment} className="w-24 h-24" alt="web design logo"/>
                </div>
                <div className="content text-center mt-4">
                    <h1 className="font-bold text-lg">
                        Web Development and Services
                    </h1>

                    <p className="text-sm mt-2">
                        A full cycle of web development and support anytime
                    </p>
                </div>
            </div>
            <div className="box p-5">
                <div className="icon flex justify-center items-center ">
                    <img src={poster} className="w-24 h-24" alt="web design logo"/>
                </div>
                <div className="content text-center mt-4">
                    <h1 className="font-bold text-lg">
                        Brand Design
                    </h1>

                    <p className="text-sm mt-2">
                        Your company’s positioning in each stroke
                    </p>
                </div>
            </div>
            <div className="box p-5">
                <div className="icon flex justify-center items-center ">
                    <img src={mobile} className="w-24 h-24" alt="web design logo"/>
                </div>
                <div className="content text-center mt-4">
                    <h1 className="font-bold text-lg">
                        Mobile Application Development
                    </h1>

                    <p className="text-sm mt-2">
                        Your company's solution to all your mobile development
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}
