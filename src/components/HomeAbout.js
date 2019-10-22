import React from 'react';


export default function HomeAbout() {
    return(
        <section className="h-65  w-full flex justify-between  items-center">
            <div className="section h-full z-10  w-2/4 pr-16 bg-gray-900 relative lg:pl-24 on text-right pt-20">

                <h4 className="text-4xl font-medium">About Us</h4>
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
            <div className="section h-full z-10 w-2/4 pl-16 bg-gray-1000 flex justify-start items-center
             on lg:pr-24 text-left pt-20 pb-10">
                <div className="form-card lg:w-3/5 h-full relative px-8 text-right">
                    <h4 className="text-3xl mb-6">Request for Services</h4>
                    <form className="w-full">
                        <input type="text" className="on w-full block h-10 border
                         mb-4 outline-none bg-transparent px-4" placeholder="Full Name"/>
                        <input type="on email" className="on w-full border bg-transparent
                         block h-10 mb-4 outline-none px-4" placeholder="Email Address"/>
                        <input type="text" className="on w-full block border bg-transparent
                         h-10 mb-4 outline-none px-4" placeholder="Phone Number"/>
                        <select className="on w-full bg-transparent px-4
                         border block h-10 rounded-none form-select outline-none mb-4">
                            <option>What do you want us to do for you?</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Web Development"> Web Development</option>
                            <option value="Logo Design">Logo Design</option>
                            <option value="Banner Design">Banner Design</option>
                            <option value="Android App">Android App</option>
                            <option value="ios app">IOS App</option>
                            <option value="services">Services</option>
                        </select>

                        <textarea rows="6" className="on w-full border bg-transparent mb-2 outline-none px-4"
                                  placeholder="Describe your problem">

                        </textarea>
                            <button className="h-12 border bg-transparent text-left w-3/5 text-center outline-none">
                                <span className="on text-xl">Request Services </span>
                            </button>

                    </form>

                </div>
            </div>
        </section>
    );
}
