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



function NewNavbar() {


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
   
    </>
  )
}

export default NewNavbar