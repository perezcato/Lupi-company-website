import React from 'react';
import Particle from '../helpers/Particle';

import Button from "./UiElements/Button";

// import lupi from '../assets/images/lupipic.svg';

export default class Banner extends React.Component{

    constructor(props){
        super(props);
        this.tela = document.createElement("canvas");
    }

    componentDidMount() {
        let max_particles = 1000;

        this.tela.width = window.screen.width;
        this.tela.height = 0.878*window.screen.height;
        document.getElementById("banner").append(this.tela);
        this.canvas = this.tela.getContext("2d");
        this.particles = [];
        this.init_num = this.populate(max_particles);
        this.update();

    }

    populate = (num) => {
        let particles = [];
        for (let i = 0; i < num; i++) {
            setTimeout(
                function() {
                    this.particles.push(new Particle(this.canvas, i));
                }.bind(this),
                i * 20
            );
        }
        return particles.length;
    };

    clear = () => {
        this.canvas.globalAlpha = 0.05;
        this.canvas.fillStyle = "#000155";
        this.canvas.fillStyle = "#000021"; // Alien
        this.canvas.fillRect(0, 0, this.tela.width, this.tela.height);
        this.canvas.globalAlpha = 1;

    };

    update = () => {
        this.particles = this.particles.filter(function(p) {
            return p.move();
        });
        if (this.particles.length < this.init_num) {
            this.populate(1);
        }
        this.clear();
        requestAnimationFrame(this.update.bind(this));
    };

    render(){
        return (
            <section id="banner" className="banner z-20 h-screen w-full">
                <div className="banner-content absolute z-20 w-full h-full bg-transparent">
                    <header className="banner-content__header sticky flex justify-between items-center px-10 lg:px-24 lg:py-10">
                        <div className="site_name">
                            {/*Add image*/}
                            <h4 className="lg:text-base lg:font-extrabold">Lupi</h4>
                        </div>
                        <nav className="hidden lg:block">
                            <ul className="flex">
                                <li className="mr-8 font-medium lg:text-base tracking-wider ">Home</li>
                                <li className="mr-8 font-medium lg:text-base tracking-wider">About</li>
                                <li className="mr-8 font-medium lg:text-base">Services</li>
                                <li className="font-medium lg:text-base">Contact</li>
                            </ul>
                        </nav>
                    </header>
                    <div className="content w-full lg:px-24 mt-32 text-center xl:mt-32 md:mt-56 lg:mt-16">
                        <h1 className="font-bold uppercase text text-sm lg:text-3xl"> Creative people, </h1>
                        <h1 className="font-bold uppercase text font-5xl"> innovative ideas, </h1>
                        <h1 className="font-bold uppercase text text-sm lg:text-3xl"> New Technology. </h1>
                    </div>
                    <div className="banner-btn w-full text-xl  flex justify-center items-center mt-12 ">
                        <button className="b-btn h-12 w-32 mr-3 outline-none relative"><span className="on"> Get Started </span> </button>
                        <button className="b-btn h-12 w-32 ml-3 outline-none relative"><span className="on" >Learn More</span></button>
                    </div>
                </div>
            </section>
        );

    }
}
