import React from 'react';


export default function HomeAbout() {
    return(
        <section className="h-65 w-full flex justify-between flex-wrap items-center">
            <div className="section h-63 z-3 w-full px-10 lg:w-2/4 lg:pr-16 bg-gray-900 relative lg:pl-24 on text-right pt-20">

                <h4 className="text-4xl font-medium">About Us</h4>
                <p className=" text-lg font-light  leading-normal mt-5">
                    Design begins from research of needs of your target audience. The second step is
                    prototyping and testing. This ensures that you get not just a pretty picture, but
                    the finished product which fulfills your purposes.
                </p>

                <div className="banner-btn w-full flex justify-end items-center mt-8 ">
                    <button className="b-btn h-12 w-32 outline-none relative">
                        <span className="on text-xl">Learn More </span>
                    </button>
                </div>


            </div>
            <div className="section h-65 z-3 w-full lg:w-2/4 px-10 lg:pl-16 bg-gray-1000 on lg:pr-24 text-left pt-10 md:pt-20">
                <div className="w-full lg:w-full h-65 relative  text-left">
                    <h4 className="text-xl md:text-3xl mb-6">Request for Services</h4>
                    <form className="w-full">
                        <div className="row w-full block">
                            <input type="text" className="on w-full lg:w-1/2 h-10 border
                         mb-4 outline-none bg-transparent px-4" placeholder="Full Name"/>

                            <input type="on email" className="on w-full lg:w-1/2 border bg-transparent
                          h-10 mb-4 outline-none px-4" placeholder="Email Address"/>

                        </div>

                        <div className="row w-full block">
                            <input type="text" className="on w-full lg:w-1/2 border bg-transparent
                         h-10 mb-4 outline-none px-4" placeholder="Phone Number"/>
                            <select className="on lg:w-1/2 w-full bg-transparent px-4
                         border h-10 rounded-none form-select outline-none mb-4">
                                <option>What do you want us to do for you?</option>
                                <option value="Web Design">Web Design</option>
                                <option value="Web Development"> Web Development</option>
                                <option value="Logo Design">Logo Design</option>
                                <option value="Banner Design">Banner Design</option>
                                <option value="Android App">Android App</option>
                                <option value="ios app">IOS App</option>
                                <option value="services">Services</option>
                            </select>
                        </div>




                        <textarea rows="6" className="on w-full border bg-transparent mb-2 outline-none px-4"
                                  placeholder="Describe your problem">

                        </textarea>
                            <button className="h-12 border bg-transparent text-left md:w-2/5 text-center outline-none">
                                <span className="on text-xl">Request Services </span>
                            </button>
                    </form>

                </div>
            </div>
        </section>
    );
}
