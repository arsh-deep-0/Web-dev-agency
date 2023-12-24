import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from "./line"
import Timelinestopover from "./timelinestopover"
import Linestopover from "./linestopovercombo";
import Funnel from "./funnel";
import ContactForm from "./contactform";
import Testimonial from "./testimonial";


const linestopoverProps = { name: "Sales Funnels", imgSrc: "funnel.svg" ,component:<Funnel/>};
const linestopoverProps2 = { name: "Reviews & Testimonials", imgSrc: "reviewfeature.svg" ,component:<Testimonial/>};
const linestopoverProps3 = { name: "Contact Forms", imgSrc: "contactforms.svg", component:<ContactForm/> };

function Timeline() {

    return <>
        <div className="px-2 py-16 black-wire">
       
            <div className="">
                <h2 className="text-white text-4xl  text-center aoboshi py-8 " >Lets look at <br /> <span className="text-5xl blue-text ">What we Offer </span></h2>
                <h3 className="text-white text-xl text-center pt-4 crimson shadow">Our Features</h3>
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