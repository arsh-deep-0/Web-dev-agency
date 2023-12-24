import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
function Portfolio() {

    // const [isMobile, setIsMobile] = useState(false);
    // useEffect(() => {

    //     const handleResize = () => {
    //         setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    //     };

    //     handleResize(); // Call it initially
    //     window.addEventListener('resize', handleResize); // Listen for window resize events



    //     let divElement = document.getElementById('scroller1');

    //     // Calculate and store the width of the div element
    //     let divWidth = divElement.offsetWidth;

    //     let gapWidth;

    //     if (isMobile) {
    //         gapWidth = 0
    //     } else {
    //         gapWidth = 0
    //     }

    //     gsap.fromTo('.scroller1', {
    //         x: 0
    //     },
    //         {
    //             x: -1 / 2 * divWidth - gapWidth,
    //             duration: 16,
    //             ease: 'linear',
    //             repeat: -1
    //         })

    //     gsap.fromTo('.scroller2', {

    //     },
    //         {
    //             x: -1 / 2 * divWidth - gapWidth,
    //             duration: 16,
    //             ease: 'linear',
    //             repeat: -1
    //         })

    //     return () => {
    //         window.removeEventListener('resize', handleResize); // Clean up the listener on unmount
    //     };
    // }, []);
    return <>
        <div className=" bg-black py-8 px-2 overflow-hidden">
            <h2 className="text-white text-center text-3xl aoboshi">Recent Work</h2>
            <div  className=" flex items-center text-white">
                <div className="flex-col items-center py-8 gap-0 ">
                    <img className="" src=" project-1.svg" alt="" />
                    <p className="text-center antics">HOMEZ</p>
                    <img className=""  src=" project-2.svg" alt="" />
                    <p className="text-center antics">Universal custom kitchens</p>
                   
                </div>
                
            </div>


        </div>
    </>
}

export default Portfolio