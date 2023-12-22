import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from "./line"
import Timelinestopover from "./timelinestopover"
import Linestopover from "./linestopovercombo";
import Funnel from "./funnel";
import ContactForm from "./contactform";
import Testimonial from "./testimonial";
import Blackwire from "./blackWire";

const linestopoverProps = { name: "Sales Funnels", imgSrc: "funnel.svg" ,component:<Funnel/>};
const linestopoverProps2 = { name: "Reviews & Testimonials", imgSrc: "reviewfeature.svg" ,component:<Testimonial/>};
const linestopoverProps3 = { name: "Contact Forms", imgSrc: "contactforms.svg", component:<ContactForm/> };

function Timeline() {

    return <>
        <div className="px-2 py-16 black-wire">
       
            <div className="px-8">
                <h2 className="text-white text-4xl  text-center aoboshi" >Lets look at <br /> <span className="text-4xl text-red-600">What we Offer </span></h2>
                <h3 className="text-white text-lg text-center pt-4 crimson ">Our Features</h3>
            </div>
          
            <div className="py-4">
           
                <Linestopover {...linestopoverProps} />
                <Linestopover {...linestopoverProps2} />
                <Linestopover {...linestopoverProps3} />

            </div>
        </div>


    </>
}

export default Timeline