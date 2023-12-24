import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Gallery() {
    gsap.registerPlugin(ScrollTrigger);
  

    useEffect(() => {
        gsap.from(".kitchen", {
            opacity:50,
            y:50,
            
            stagger: 0.2,
            ease: 'sine.Out',
            scrollTrigger: {
                trigger: ".gallery-container",
                start: "top center",
               markers: true,
                toggleActions: "restart reverse restart reverse ",
            }
        }
        );
    },[]);

    return <div className="justify-center  flex w-full">
        <div className="flex gallery-container items-center justify-center">
            <div>
                <img src="side handle.svg" alt="" />
            </div>
            <div className="flex flex-col ">
                <div className="flex ">
                    <img src="Heading-gallery.svg" alt="" />
                </div>
                <div className=" flex ">
                    <div>
                        <img src="main-kitchen.svg" alt="" />
                    </div>
                    <div>
                        <img src="gallery-description.svg" alt="" />
                    </div>
                </div>
                <div className="kitchen-container flex ">
                    <div>
                        <img className="kitchen" src="kitchen-1.svg" alt="" />
                    </div>
                    <div>
                        <img className="kitchen" src="kitchen-2.svg" alt="" />
                    </div>
                    <div>
                        <img className="kitchen" src="kitchen-3.svg" alt="" />
                    </div>
                    <div>
                        <img className="kitchen" src="kitchen-4.svg" alt="" />
                    </div>
                </div>

            </div>

        </div>
    </div>

}

export default Gallery