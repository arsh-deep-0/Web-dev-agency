'use client'
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
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

    return <>
        <div>
            <SplashScreen />
            <div>
                <Wire />
                <Navbar />
                <Trustpilot />
                <Heading />
                <Subheading />
                <Buttons name1={'See Plans'} name2={"Book a call"} scrollToPricing={scrollToPricing} />
                <Testimonials />
                <Wire />
                <ReviewsBox />


            </div>
            <Companies />
            <Timeline />
            <Galleryheading />
            <Gallery />
            <Buttons name1={'See Plans'} name2={"Book a call"} scrollToPricing={scrollToPricing} />
            <Portfolio />
            <Pricing pricingRef={pricingRef} />
            <Footer />
        </div>

    </>
}

