(this.webpackJsonplupi=this.webpackJsonplupi||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/login.d7eba964.svg"},function(e,t,a){e.exports=a.p+"static/media/programming.9665ba2f.svg"},function(e,t,a){e.exports=a.p+"static/media/poster.f9d51d43.svg"},function(e,t,a){e.exports=a.p+"static/media/application.55d17660.svg"},function(e,t,a){e.exports=a.p+"static/media/technical-support.34e9ea3b.svg"},function(e,t,a){e.exports=a.p+"static/media/diversify.c6ccd45f.svg"},function(e,t,a){e.exports=a.p+"static/media/support.f8c665d3.svg"},function(e,t,a){e.exports=a.p+"static/media/differentiation.f23bb136.svg"},,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(5),c=a.n(s),r=(a(22),a(23),a(2)),i=a(3),m=a(15),o=a(6),u=a(1),d=a(16),h=function(){function e(t,a){Object(r.a)(this,e);var l=Math.random();this.progress=0,this.canvas=t,this.x=window.screen.width/2+(200*Math.random()-200*Math.random()),this.y=window.screen.height/2+(200*Math.random()-200*Math.random()),this.s=Math.random(),this.a=0,this.w=window.screen.width,this.h=window.screen.height,this.radius=l>.2?Math.random():3*Math.random(),this.color=l>.2?"#2E4765":"#b5ff00",this.radius=l>.8?2*Math.random():this.radius,this.color=l>.8?"#2E4765":this.color,this.variantx1=300*Math.random(),this.variantx2=400*Math.random(),this.varianty1=100*Math.random(),this.varianty2=120*Math.random()}return Object(i.a)(e,[{key:"render",value:function(){this.canvas.beginPath(),this.canvas.arc(this.x,this.y,this.radius,0,2*Math.PI),this.canvas.lineWidth=2,this.canvas.fillStyle=this.color,this.canvas.fill(),this.canvas.closePath()}},{key:"move",value:function(){return this.x+=Math.cos(this.a)*this.s,this.y+=Math.sin(this.a)*this.s,this.a+=.8*Math.random()-.4,!(this.x<0||this.x>this.w-this.radius)&&(!(this.y<0||this.y>this.h-this.radius)&&(this.render(),this.progress++,!0))}}]),e}();var p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).populate=function(e){for(var t=function(e){setTimeout(function(){this.particles.push(new h(this.canvas,e))}.bind(Object(u.a)(a)),20*e)},l=0;l<e;l++)t(l);return[].length},a.clear=function(){a.canvas.globalAlpha=.05,a.canvas.fillStyle="#000155",a.canvas.fillStyle="#000021",a.canvas.fillRect(0,0,a.tela.width,a.tela.height),a.canvas.globalAlpha=1},a.update=function(){a.particles=a.particles.filter((function(e){return e.move()})),a.particles.length<a.init_num&&a.populate(1),a.clear(),requestAnimationFrame(a.update.bind(Object(u.a)(a)))},a.tela=document.createElement("canvas"),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.tela.width=window.screen.width,this.tela.height=.878*window.screen.height,document.getElementById("banner").append(this.tela),this.canvas=this.tela.getContext("2d"),this.particles=[],this.init_num=this.populate(1e3),this.update()}},{key:"render",value:function(){return n.a.createElement("section",{id:"banner",className:"banner z-20 h-screen w-full"},n.a.createElement("div",{className:"banner-content absolute z-20 w-full h-full bg-transparent"},n.a.createElement("header",{className:"banner-content__header sticky flex justify-between items-center px-10 lg:px-24 lg:py-10"},n.a.createElement("div",{className:"site_name"},n.a.createElement("h4",{className:"lg:text-base lg:font-extrabold"},"Lupi")),n.a.createElement("nav",{className:"hidden lg:block"},n.a.createElement("ul",{className:"flex"},n.a.createElement("li",{className:"mr-8 font-medium lg:text-base tracking-wider "},"Home"),n.a.createElement("li",{className:"mr-8 font-medium lg:text-base tracking-wider"},"About"),n.a.createElement("li",{className:"mr-8 font-medium lg:text-base"},"Services"),n.a.createElement("li",{className:"font-medium lg:text-base"},"Contact")))),n.a.createElement("div",{className:"content w-full lg:px-24 mt-32 text-center xl:mt-32 md:mt-56 lg:mt-16"},n.a.createElement("h1",{className:"font-bold uppercase text text-sm lg:text-3xl"}," Creative people, "),n.a.createElement("h1",{className:"font-bold uppercase text font-5xl"}," innovative ideas, "),n.a.createElement("h1",{className:"font-bold uppercase text text-sm lg:text-3xl"}," New Technology. ")),n.a.createElement("div",{className:"banner-btn w-full text-xl  flex justify-center items-center mt-12 "},n.a.createElement("button",{className:"b-btn h-12 w-32 mr-3 outline-none relative"},n.a.createElement("span",{className:"on"}," Get Started ")," "),n.a.createElement("button",{className:"b-btn h-12 w-32 ml-3 outline-none relative"},n.a.createElement("span",{className:"on"},"Learn More")))))}}]),t}(n.a.Component),f=a(7),g=a.n(f),x=a(8),v=a.n(x),b=a(9),w=a.n(b),E=a(10),N=a.n(E);function y(){return n.a.createElement("section",{id:"homeServices",className:"services h-65 pb-10  w-full z-20 px-10 lg:pt-20 lg:px-24 relative"},n.a.createElement("div",{className:"services-title w-full text-center"},n.a.createElement("h4",{className:"uppercase font-bold text-4xl pb-5 on "},"What we do"),n.a.createElement("p",{className:"text-xl"},"We create websites and applications that provide effective solutions for your goals")),n.a.createElement("div",{className:"services-card block lg:flex lg:justify-between md:flex md:justify-between flex-wrap relative mt-16"},n.a.createElement("div",{className:"box p-5 on"},n.a.createElement("div",{className:"icon flex justify-center items-center "},n.a.createElement("img",{src:g.a,className:"w-24 h-24",alt:"web design logo"})),n.a.createElement("div",{className:"content text-center mt-4"},n.a.createElement("h1",{className:"font-bold text-xl "},"Web Design"),n.a.createElement("p",{className:"text-base mt-2"},"We develop websites of any complexity and for any purpose. From fashion websites to large Internet portals"))),n.a.createElement("div",{className:"box p-5 mt-10 md:mt-0"},n.a.createElement("div",{className:"icon flex justify-center items-center "},n.a.createElement("img",{src:v.a,className:"w-24 h-24",alt:"web design logo"})),n.a.createElement("div",{className:"content text-center mt-4"},n.a.createElement("h1",{className:"font-bold text-xl"},"Web Development and Services"),n.a.createElement("p",{className:"text-base mt-2"},"A full cycle of web development and support anytime"))),n.a.createElement("div",{className:"box p-5 mt-10 md:mt-10 lg:mt-0 "},n.a.createElement("div",{className:"icon flex justify-center items-center "},n.a.createElement("img",{src:w.a,className:"w-24 h-24",alt:"web design logo"})),n.a.createElement("div",{className:"content text-center mt-4"},n.a.createElement("h1",{className:"font-bold text-xl"},"Brand Design"),n.a.createElement("p",{className:"text-base mt-2"},"Your company\u2019s positioning in each stroke"))),n.a.createElement("div",{className:"box p-5 mt-10 md:mt-10 lg:mt-0"},n.a.createElement("div",{className:"icon flex justify-center items-center "},n.a.createElement("img",{src:N.a,className:"w-24 h-24",alt:"web design logo"})),n.a.createElement("div",{className:"content text-center mt-4"},n.a.createElement("h1",{className:"font-bold text-xl"},"Mobile Application Development"),n.a.createElement("p",{className:"text-base mt-2"},"Your company's solution to all your mobile development")))))}function j(){return n.a.createElement("section",{className:"h-65  w-full flex justify-between flex-wrap items-center"},n.a.createElement("div",{className:"section h-63 z-3 w-full px-10 lg:w-2/4 lg:pr-16 bg-gray-900 relative lg:pl-24 on text-right pt-20"},n.a.createElement("h4",{className:"text-4xl font-medium"},"Best Design"),n.a.createElement("p",{className:" text-lg font-light  leading-normal mt-5"},"Design begins from research of needs of your target audience. The second step is prototyping and testing. This ensures that you get not just a pretty picture, but the finished product which fulfills your purposes."),n.a.createElement("div",{className:"banner-btn w-full flex justify-end items-center mt-6 md:mt-12 "},n.a.createElement("button",{className:"b-btn h-12 w-32 outline-none relative"},n.a.createElement("span",{className:"on text-xl"},"Learn More ")))),n.a.createElement("div",{className:"section h-63 z-3 w-full lg:w-2/4 px-10 lg:pl-16 bg-gray-1000 on lg:pr-24 text-left pt-20"},n.a.createElement("h4",{className:"text-4xl font-medium"},"Best Codes"),n.a.createElement("p",{className:" text-base font-light leading-normal mt-5"},"Our lead engineer will develop an individual structure of your project, which will serve you for many years and support scalability and your future needs. Our code is a high quality and safety standards."),n.a.createElement("div",{className:"banner-btn w-full flex relative justify-start items-center mt-12 "},n.a.createElement("button",{className:"b-btn  mr-10 h-12 w-32 outline-none relative text-xl"},n.a.createElement("span",{className:"on"},"Learn More ")," "))))}var M=a(11),k=a.n(M),C=a(12),z=a.n(C),D=a(13),A=a.n(D),L=a(14),S=a.n(L);function W(){return n.a.createElement("section",{id:"homeServices",className:"services h-65 pb-10  w-full z-20 px-10 lg:pt-5 lg:px-24 relative"},n.a.createElement("div",{className:"services-title w-full text-center"},n.a.createElement("h4",{className:"uppercase font-bold text-4xl pb-5 on "},"Why Choose Us"),n.a.createElement("p",{className:"text-xl"},"We create websites and applications that provide effective solutions for your goals")),n.a.createElement("div",{className:"services-card block lg:flex lg:justify-between md:flex md:justify-between flex-wrap relative mt-16"},n.a.createElement("div",{className:"box p-5 on"},n.a.createElement("div",{className:"icon flex justify-center items-center "},n.a.createElement("img",{src:k.a,className:"w-24 h-24",alt:"web design logo"})),n.a.createElement("div",{className:"content text-center mt-4"},n.a.createElement("h1",{className:"font-bold text-xl "},"Support"),n.a.createElement("p",{className:"text-base mt-2"},"We provide support and extend your current tech to ensure you maximise your profits and also have value for money"))),n.a.createElement("div",{className:"box p-5 mt-10 md:mt-0"},n.a.createElement("div",{className:"icon flex justify-center items-center "},n.a.createElement("img",{src:z.a,className:"w-24 h-24",alt:"web design logo"})),n.a.createElement("div",{className:"content text-center mt-4"},n.a.createElement("h1",{className:"font-bold text-xl"},"Different Varieties"),n.a.createElement("p",{className:"text-base mt-2"},"At Lupi Inc, we provide you with different vareities of complementary business solutions which is designed for easy management"))),n.a.createElement("div",{className:"box p-5 mt-10 md:mt-10 lg:mt-0"},n.a.createElement("div",{className:"icon flex justify-center items-center "},n.a.createElement("img",{src:A.a,className:"w-24 h-24",alt:"web design logo"})),n.a.createElement("div",{className:"content text-center mt-4"},n.a.createElement("h1",{className:"font-bold text-xl"},"Long Lasting Partnership"),n.a.createElement("p",{className:"text-base mt-2"},"At Lupi Inc, we are interested in becoming your long term partner helping and supporting your through out your IT journey."))),n.a.createElement("div",{className:"box p-5 mt-10 md:mt-10 lg:mt-0"},n.a.createElement("div",{className:"icon flex justify-center items-center "},n.a.createElement("img",{src:S.a,className:"w-24 h-24",alt:"web design logo"})),n.a.createElement("div",{className:"content text-center mt-4"},n.a.createElement("h1",{className:"font-bold text-xl"},"Unique Design"),n.a.createElement("p",{className:"text-base mt-2"},"At Lupi Inc we believe your company should have a unique product that is different on the market")))))}function B(){return n.a.createElement("section",{id:"nb",className:"h-63 relative  w-full "},n.a.createElement("div",{className:"absolute top-0 h-full w-full flex flex-col justify-center items-center"},n.a.createElement("div",{className:" w-full flex flex-col justify-center on items-center"},n.a.createElement("p",{className:"glitch-text text-lg lg:text-5xl l-nospacing","data-text":"what is your next"}," What is your next"),n.a.createElement("p",{className:"glitch-text text-lg lg:text-5xl l-nospacing","data-text":"big project"}," big project?")),n.a.createElement("div",{className:"banner-btn w-full flex justify-center items-center mt-12 "},n.a.createElement("button",{className:"b-btn h-12 w-32 outline-none relative"},n.a.createElement("span",{className:"on text-xl"},"Contact us")))))}function O(){return n.a.createElement("section",{className:"h-65 w-full flex justify-between flex-wrap items-center"},n.a.createElement("div",{className:"section h-63 z-3 w-full px-10 lg:w-2/4 lg:pr-16 bg-gray-900 relative lg:pl-24 on text-right pt-20"},n.a.createElement("h4",{className:"text-4xl font-medium"},"About Us"),n.a.createElement("p",{className:" text-lg font-light  leading-normal mt-5"},"Design begins from research of needs of your target audience. The second step is prototyping and testing. This ensures that you get not just a pretty picture, but the finished product which fulfills your purposes."),n.a.createElement("div",{className:"banner-btn w-full flex justify-end items-center mt-8 "},n.a.createElement("button",{className:"b-btn h-12 w-32 outline-none relative"},n.a.createElement("span",{className:"on text-xl"},"Learn More ")))),n.a.createElement("div",{className:"section h-65 z-3 w-full lg:w-2/4 px-10 lg:pl-16 bg-gray-1000 on lg:pr-24 text-left pt-10 md:pt-20"},n.a.createElement("div",{className:"w-full lg:w-full h-65 relative  text-left"},n.a.createElement("h4",{className:"text-xl md:text-3xl mb-6"},"Request for Services"),n.a.createElement("form",{className:"w-full"},n.a.createElement("div",{className:"row w-full block"},n.a.createElement("input",{type:"text",className:"on w-full lg:w-1/2 h-10 border mb-4 outline-none bg-transparent px-4",placeholder:"Full Name"}),n.a.createElement("input",{type:"on email",className:"on w-full lg:w-1/2 border bg-transparent h-10 mb-4 outline-none px-4",placeholder:"Email Address"})),n.a.createElement("div",{className:"row w-full block"},n.a.createElement("input",{type:"text",className:"on w-full lg:w-1/2 border bg-transparent h-10 mb-4 outline-none px-4",placeholder:"Phone Number"}),n.a.createElement("select",{className:"on lg:w-1/2 w-full bg-transparent px-4 border h-10 rounded-none form-select outline-none mb-4"},n.a.createElement("option",null,"What do you want us to do for you?"),n.a.createElement("option",{value:"Web Design"},"Web Design"),n.a.createElement("option",{value:"Web Development"}," Web Development"),n.a.createElement("option",{value:"Logo Design"},"Logo Design"),n.a.createElement("option",{value:"Banner Design"},"Banner Design"),n.a.createElement("option",{value:"Android App"},"Android App"),n.a.createElement("option",{value:"ios app"},"IOS App"),n.a.createElement("option",{value:"services"},"Services"))),n.a.createElement("textarea",{rows:"6",className:"on w-full border bg-transparent mb-2 outline-none px-4",placeholder:"Describe your problem"}),n.a.createElement("button",{className:"h-12 border bg-transparent text-left md:w-2/5 text-center outline-none"},n.a.createElement("span",{className:"on text-xl"},"Request Services "))))))}function I(){return n.a.createElement("section",{className:"h-48 bg-gray-1000  w-full"},n.a.createElement("div",{className:"h-full w-full lg:px-24 px-10"},n.a.createElement("div",{className:" section1 h-equal on text-sm md:text-2xl flex justify-center items-end lg:items-center block w-full"},n.a.createElement("p",{className:"lg:mr-12 mr-4"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current hidden md:inline"},n.a.createElement("path",{d:"M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"})),"location"),n.a.createElement("p",{className:""},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current hidden md:inline"},n.a.createElement("path",{d:"M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z"})),"Email Address"),n.a.createElement("p",{className:"lg:ml-12 ml-4"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current md:inline hidden "},n.a.createElement("path",{d:"M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z"})),"Phone Number")),n.a.createElement("div",{className:"section1 h-equal flex justify-center items-center  block w-full"},n.a.createElement("p",{className:" mr-8"},n.a.createElement("a",{href:"www.facebook.com",target:"_blank",title:""},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current"},n.a.createElement("path",{d:"M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592\tc0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20\tc0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z"})))),n.a.createElement("p",{className:"mr-4"},n.a.createElement("a",{href:"www.twitter.com",target:"_blank",title:""},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current"},n.a.createElement("path",{d:"M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809\tc0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793\tc0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05\tc0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032\tc1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028\tc1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22\tc0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"})))),n.a.createElement("p",{className:"ml-4"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current"},n.a.createElement("path",{d:"M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z"}),n.a.createElement("circle",{cx:"11.994",cy:"11.979",r:"3.003"}))),n.a.createElement("p",{className:"ml-8"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current"},n.a.createElement("path",{d:"M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404\tc-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814\tc0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763\tC21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z"})))),n.a.createElement("div",{className:"section1 bg-red h-equal block flex justify-center items-start lg:items-center w-full"},n.a.createElement("p",{className:"on text-sm md:text-2xl "},"\xa9 2019 Lupi Inc. All Rights Reserved."))))}var q=function(){return Object(l.useEffect)((function(){})),n.a.createElement("div",{id:"app",className:"app"},n.a.createElement("main",null,n.a.createElement(p,null),n.a.createElement(y,null),n.a.createElement(j,null),n.a.createElement(W,null),n.a.createElement(B,null),n.a.createElement(O,null),n.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[17,1,2]]]);
//# sourceMappingURL=main.8a3856a9.chunk.js.map