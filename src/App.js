import React, {useEffect} from 'react';

import Banner from './components/Banner';
import HomeServices from './components/HomeServices';
import SimpleInfo from './components/SimpleInfo';
import WhyUs from './components/WhyUs';
import NextProject from './components/NextProject';
import HomeAbout from './components/HomeAbout';
import Footer from './components/Footer';

//import Header from './components/Header';

function App() {

    useEffect(() => {
        // const viewPortHeight = (window.screen.height)/4;
        // const HServices = document.getElementById('homeServices');
        //
        // window.onscroll = () => {
        //     let HServicesHeight = HServices.getBoundingClientRect().top;
        //
        //     if(HServicesHeight < viewPortHeight){
        //         console.log('reached viewport range');
        //     }
        // }
    });

  return (
    <div id="app" className="app">
      <main>
        <Banner />
        <HomeServices/>
        <SimpleInfo/>
        <WhyUs/>
        <NextProject/>
        <HomeAbout/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
