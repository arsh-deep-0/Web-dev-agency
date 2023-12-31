'use client'
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import React from 'react';
import Navbar from '../components/navbar';
import Trustpilot from '../components/trustpilot';
import Heading from '../components/Heading';
import Subheading from '../components/subheading';
import Buttons from '../components/buttons';
import Testimonials from '../components/testimonials';
import ReviewsBox from '../components/reviewsbox';
import House from '../components/house';
import Companies from '../components/companies';
import Portfolio from '../components/portfolio';
import Pricing from '../components/pricing';
import Timeline from "../components/timeline";
import Wire from "../components/wire";
import Gallery from "../components/gallery";
import Galleryheading from "../components/galleryheading";
import BlackWire from "../components/blackwire";
import Footer from "../components/footer";
import SplashScreen from "../components/splashscreen";
import NewNavbar from "../components/newnavbar";
import Poster from "../components/poster";


export default function Home() {
  const pricingRef = useRef(null);

  const scrollToPricing = () => {
    if (pricingRef.current) {
      const targetY = pricingRef.current.getBoundingClientRect().top + window.pageYOffset;
      slowScrollTo(targetY);
    }
  };

  const slowScrollTo = (targetY, duration = 2000) => {
    const initialY = window.pageYOffset;
    const diff = targetY - initialY;
    let start;

    const easeOutQuad = (t) => 1 - Math.pow(1 - t, 2);

    const scrollStep = (timestamp) => {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const percentage = Math.min(time / duration, 1);
      const easedPercentage = easeOutQuad(percentage);

      window.scrollTo(0, initialY + diff * easedPercentage);

      if (time < duration) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize); // Listen for window resize events


    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the listener on unmount
    };
  }, []);


  return <>
    <div>
      <SplashScreen />
      <div className="white-wire">

        <NewNavbar scrollToPricing={scrollToPricing} />
        <Trustpilot />
        <Heading />
        <Subheading />
        <Buttons name1={'See Plans'} name2={"Book a call"} scrollToPricing={scrollToPricing} />
        {
          !isMobile && <>
            <Poster />
          </>
        }

        <Testimonials />

        <ReviewsBox />
      </div>

      <Companies />
      <Timeline />

      <div className="white-wire">
        {isMobile && <>
          <Galleryheading />
          <Gallery />
          <Buttons name1={'See Plans'} name2={"Book a call"} scrollToPricing={scrollToPricing} />
        </>}

        {
          !isMobile && <>
            <div className="flex pt-32 pb-24 justify-between px-8">
              <div className="w-1/2 lex items-center" >
                <Gallery />
              </div>
              <div className="flex flex-col w-2/5 ">
                <Galleryheading />
                <Buttons name1={'See Plans'} name2={"Book a call"} scrollToPricing={scrollToPricing} />
              </div>
            </div>
          </>
        }

      </div>

      <Portfolio />
      <div>

        <Pricing pricingRef={pricingRef} />
      </div>

      <Footer />
    </div>

  </>
}

