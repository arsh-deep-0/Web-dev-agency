import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useState } from "react";

function ReviewsBox() {
    const photos = ["happy.svg", "punjabi.svg", "woman.svg", "laptop-man.svg", "builder.svg"];

    const reviews = ["Impeccable execution and outstanding communication. Our website exudes sheer brilliance—kudos to the talented team!",
        "Absolutely thrilled with the exceptional creativity and attention to detail in our website design—exceeded our expectations!",
        "Professionalism at its finest! Our website not only looks stunning but also functions seamlessly.",
        "Incredible teamwork and a keen eye for aesthetics—our website is a masterpiece! Thank you for an outstanding job.",
        "Spectacular design work! The user interface is intuitive, and the site's responsiveness is top-notch. Impressed beyond words."];
    const clients = ["Diego Ramirez", "Dalwinder Singh", "Yuki Tanaka ", "Jacob Thompson", "Oliver Dufour"];

    const businesses = ["UNNIVERSAL  KITCHENS", "RENOVATEXPERTS", "UNNITRICK", "SPEEDSCALEZ", "REMOELRISE"];

    const roles = [" Business Owner", " Business Manager", " Lead Remodeler", " Coordinator", " Owner"];

    const [index, setIndex] = useState(0);
    const [imageSrc, setImageSrc] = useState(photos[index]);
    const [reviewText, setreviewText] = useState(reviews[index]);
    const [clientName, setclientName] = useState(clients[index]);
    const [clientRole, setclientRole] = useState(roles[index]);
    const [clientBusiness, setclientBusiness] = useState(businesses[index]);

    useEffect(() => {

        const reduce = () => {
            console.log('reduce')
            gsap.to('.review', {
                scale: 0,
                duration: 500,
            })
        }

        const expand = () => {
            console.log('expand')
            gsap.to('.review', {
                delay: 500,
                scale: 1,
                duration: 500,
            })
        }
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % photos.length);
            console.log(index);
            reduce();
            setImageSrc(photos[index]);
            setreviewText(reviews[index]);
            setclientName(clients[index]);
            setclientBusiness(businesses[index]);
            setclientRole(roles[index]);
            expand();
        }, 4000);





        return () => clearInterval(interval); // Clean up the interval           
    },)
    return <>
        <div className=" flex justify-center py-4 mb-12  pl-4  w-full ">
            <div className="  flex items-center justify-center">
                <p className="review absolute  review-text w-4/6 ml-6 text-center mt-2 text-sm crimson">{reviewText}</p>
                <div className="review absolute  flex items-center justify-center bg-white rounded-full h-16 w-16 review-photo bg-blue-voilet">
                    <img className="w-full" src={imageSrc} alt="" />
                </div>
                <p className="review client-name absolute text-sm  crimson ">{clientName} <br /><span className="client-role encodesans text-xs " >{clientRole}</span></p>


                <p className="review client-business absolute text-xs w-36 text-center ebgara blue-text">{clientBusiness}</p>
                <img src="reviews-box.svg" alt="trustpilot reviews ratings" />

            </div>

        </div>

    </>
}

export default ReviewsBox