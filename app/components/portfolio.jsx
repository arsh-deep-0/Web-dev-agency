import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
function Portfolio() {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        handleResize(); // Call it initially
        window.addEventListener('resize', handleResize); // Listen for window resize events



        let divElement = document.getElementById('scroller1');

        // Calculate and store the width of the div element
        let divWidth = divElement.offsetWidth;

        let gapWidth;

        if (isMobile) {
            gapWidth = 0
        } else {
            gapWidth = 0
        }

        gsap.fromTo('.scroller1', {
            x: 0
        },
            {
                x: -1 / 2 * divWidth - gapWidth,
                duration: 16,
                ease: 'linear',
                repeat: -1
            })

        gsap.fromTo('.scroller2', {

        },
            {
                x: -1 / 2 * divWidth - gapWidth,
                duration: 16,
                ease: 'linear',
                repeat: -1
            })

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the listener on unmount
        };
    }, []);
    return <>
        <div className=" bg-black  px-2 overflow-hidden">
            <h2 className="text-white text-center text-4xl crimson">Our Portfolio</h2>
            <div id='scroller2' className="bg-black flex items-center  border-b bottom-1 border-white border-solid gap-0">
                <div className="flex items-center py-8 gap-0 ">
                    <img className="scroller1" src=" project-1.svg" alt="" />
                    <img className="scroller1"  src=" project-2.svg" alt="" />
                    <img className="scroller1"  src=" project-1.svg" alt="" />
                    <img className="scroller1"  src=" project-2.svg" alt="" />
                </div>
                <div className="flex items-center py-8 gap-0">
                    <img className="scroller2" src=" project-1.svg" alt="" />
                    <img className="scroller2"  src=" project-2.svg" alt="" />
                    <img className="scroller2"  src=" project-1.svg" alt="" />
                    <img className="scroller2"  src=" project-2.svg" alt="" />
                </div>
            </div>


        </div>
    </>
}

export default Portfolio