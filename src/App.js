import React, {useEffect} from 'react';

import Banner from './components/Banner';
import HomeServices from './components/HomeServices';
import SimpleInfo from './components/SimpleInfo';
//import Header from './components/Header';

function App() {

    useEffect(() => {
        const viewPortHeight = (window.screen.height)/4;
        const HServices = document.getElementById('homeServices');

        window.onscroll = () => {
            let HServicesHeight = HServices.getBoundingClientRect().top;

            //console.log(HServicesHeight);
            if(HServicesHeight < viewPortHeight){
                alert('reached viewport range');
            }
        }


    });

  return (
    <div id="app" className="app">
      <main>
        <Banner />
        <HomeServices/>
        <SimpleInfo/>
      </main>
    </div>
  );
}

export default App;
