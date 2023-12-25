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


export default function Home() {


    return <>
        <div>
            <div>
                <Wire />
                <Navbar />
                <Trustpilot />
                <Heading />
                <Subheading />
                <Buttons name1={'See Plans'} name2={"Let's Talk"} />
                <Testimonials />
                <ReviewsBox />
                <Wire />
                <House />
            </div>
            <Companies />
            <Timeline />
            <Galleryheading />
            <Gallery />
            <Buttons name1={'See Plans'} name2={"Let's Talk"} />
            <Portfolio />
            <Pricing />
            <Footer/>
        </div>

    </>
}

