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

    const businesses = ["UNIVERSAL KITCHENS", "RENOVATEXPERTS", "UNITRICK", "SPEEDSCALEZ", "REMOELRISE"];

    const roles = [" Business Owner", " Business Manager", " Lead Remodeler", " Coordinator", " Owner"];

    const [largeScreen, setLargeScreen] = useState(false);

    const [index, setIndex] = useState(0);
    const [imageSrc, setImageSrc] = useState(photos[4]);
    const [reviewText, setreviewText] = useState(reviews[4]);
    const [clientName, setclientName] = useState(clients[4]);
    const [clientRole, setclientRole] = useState(roles[4]);
    const [clientBusiness, setclientBusiness] = useState(businesses[4]);

    useEffect(() => {
        let interval;
        
        const checkScreenSize = () => {
            setLargeScreen(window.innerWidth >= 1024); // Adjust the width as per your screen size requirement
        };

        const handleResize = () => {
            checkScreenSize(); // Check screen size on resize
        };

        checkScreenSize(); // Check screen size initially
        window.addEventListener('resize', handleResize);

        interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % photos.length);

            gsap.to('.review', {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    const currentIndex = index; // Capture the current index
                    setImageSrc(photos[currentIndex]);
                    setreviewText(reviews[currentIndex]);
                    setclientName(clients[currentIndex]);
                    setclientBusiness(businesses[currentIndex]);
                    setclientRole(roles[currentIndex]);

                    gsap.to('.review', {
                        delay: 0.5,
                        opacity: 1,
                        duration: 1,
                    });
                },
            });
        }, 4500);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(interval);
        };
    }, [index, photos, reviews, clients, businesses, roles]);
    return <div className="flex justify-center">
        <div className="  flex relative justify-center h-64 pl-4  w-m md:w-t lg:w-lg  ">
            <div className="z-10 relative flex flex-col gap-2 items-center justify-between w-m md:w-t lg:w-lg">
                <div className="flex justify-center h-12 w-full mt-14">
                <p className="review   review-text w-4/6  text-center  text-sm crimson">{reviewText}</p>
                </div>
                <div className="flex justify-end gap-1 items-end w-full mb-8 mr-2 pr-10">
                <div className="review  flex items-center justify-center bg-white rounded-full h-16 w-16 review-photo bg-blue-voilet">
                    <img className="w-full" src={imageSrc} alt="" />
                </div>
                <p className="review client-name w-32 text-sm  crimson ">{clientName} <br /><span className="client-role encodesans text-xs " >{clientRole}</span></p>
                <p className="review client-business  text-xs w-24   ebgara blue-text">{clientBusiness}</p>
                </div>

                </div>

                <div className="absolute w-96p items-center flex justify-center">
                {largeScreen ? (
                    <img className="w-m md:w-t lg:w-lg " src="review-box-lg.svg" alt="trustpilot reviews ratings" />
                ) : (
                    <img className="w-m md:w-t lg:w-lg" src="reviews-box.svg" alt="trustpilot reviews ratings" />
                )}
                </div>
               

           

        </div>

    </div>
}

export default ReviewsBox