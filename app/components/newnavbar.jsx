import React from 'react'
import gsap from 'gsap'
import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import SocialMediaModal from './SocialMediaModal'

import { FaSquareFacebook } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);
import '../css/app.css';
import Wire from './wire';



function NewNavbar({scrollToPricing }) {


    const [navbarVisible, setNavbarVisible] = useState(false);

    const hideNavbar = () => {

        gsap.fromTo('.navbar-modal-2-div-1', {
            opacity: 1,
            y: 0,
            height: 0,
        }, {
            y: -1 * window.innerHeight,
            opacity: 0,
            duration: 0.45,
        })

        gsap.fromTo('.navbar-modal-2-div-2', {
            opacity: 1,
            y: 0,

        }, {
            y: -1 * window.innerHeight,
            opacity: 0,
            duration: 0.60,
            onComplete: () => { setNavbarVisible(false); }
        })

        console.log('clicked');
    };

    const showNavbar = () => {
        setNavbarVisible(true);
        const animationTime = () => {
            gsap.fromTo('.navbar-modal-2', {
                // y: -1 * window.innerHeight,
                opacity: 0,


            }, {
                opacity: 1,
                y: 0,
                duration: 0,

            })
            gsap.fromTo('.navbar-modal-2-div-1', {
                y: -1 * window.innerHeight,
                height: 0,
                opacity: 0,


            }, {
                opacity: 1,
                y: 0,
                duration: 0.45,

            })
            gsap.fromTo('.navbar-modal-2-div-2', {
                y: -1 * window.innerHeight,
                opacity: 0,


            }, {
                opacity: 1,
                y: 0,
                duration: 0.60,


            })

        }
        setTimeout(animationTime, 0);


        console.log('clicked');
    };

    useEffect(() => {
        gsap.from('.navbar', {
            delay: 0.25,
            duration: 1,
            y: -25,
            opacity: 0,
            ease: 'sine.out',

        });

        ScrollTrigger.create({
            trigger: '.navbar',
            start: 'top top',
            endTrigger: '.footer', // Optional: Specify an element that ends pinning (e.g., a footer)

            toggleClass: { targets: ".navbar", className: "navbar-blue" },
            toggleActions: "restart reset restart reset",
            pin: '.navbar',
            scrub: true,

        })

    }, []); // Empty dependency array ensures it runs once when the component mounts

    return (
        <>
            <div className='  flex items-center justify-between px-4 py-6 mr-0 w-full'>
                <div className='flex gap-1'>
                    <img src="logo.svg" alt="" />
                    <h1 className='text-black bodoni text-lg font-bold lg:text-2xl'>Design<span className='blue-text'>X</span>company</h1>
                </div>
                <BiMenu className='flex md:hidden lg:hidden absolute right-8 mb-2 w-6 h-6' id='toggle-nav' onClick={showNavbar}>
                </BiMenu>
            </div>



            {navbarVisible && <div className="navbar-modal-2  opacity-0  text-center md:flex-row md:items-center md:justify-between  md:space-y-0  ">

                <div className='navbar-modal-2-div-1 min-h-full bg-blue-voilet px-5 w-1/2'>
              
                    <ImCross className='cross  ' id='cross' onClick={hideNavbar}></ImCross>
                    <nav className=" flex flex-col items-center justify-center text-white lg:space-y-0 lg:flex-row lg:items-center lg:justify-center lg:space-x-3 md:flex-row md:space-x-6 sm:flex-col sm:space-y-8">


                        <a  className={`hoverable text-sm    dark:-400 `}>
                            <span className='new-nav font-frank text-xl'>Portfolio</span>
                        </a>

                        <a  className={`hoverable text-sm    dark:-400 `}>
                            <span className='new-nav font-frank text-xl'  onClick={scrollToPricing}>Pricing</span>
                        </a>

                        <a className={` text-sm    dark:-400 `}>
                            <span className='new-nav font-frank text-xl'>Contact Us</span>
                        </a>



                    </nav>
                   

                </div>
              
                <div className='navbar-modal-2-div-2 py-8 px-2 bg-white flex-grow' >
                    
                    <div className='flex gap-1 items-center'>
                        <img className='h-6' src="logo.svg" alt="" />
                        <h1 className='text-black bodoni   lg:text-2xl'>Design<span className='blue-text'>X</span>company</h1>
                    </div>
                    <div className=" space-y-2 mt-8 flex flex-col flex-wrap justify-center items-center">


                        <h1 className="text-black font-semibold text-base life">
                            when Design meets Business
                        </h1>


                        <h4 className="font-medium text-blue-500 -400 text-base antics">
                            arisedayss@gmail.com
                        </h4>
                        {/* <h1 className="text-black  text-lg forum">
                            +1 437-998-8226 <br />+1 647-502-6701
                        </h1> */}
                        <h4 className="text-black  text-sm forum">
                            857 Fenmar Drive , North York<br />Toronto Ontario, M9L1C8
                        </h4>
                      
                    </div>
                 
                </div>
             
            </div>}
        </>
    )
}

export default NewNavbar