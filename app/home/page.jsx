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
            pricingRef.current.scrollIntoView({ behavior: "smooth" });
        }
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

