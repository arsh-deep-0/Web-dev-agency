import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Gallery() {
    gsap.registerPlugin(ScrollTrigger);
  

    useEffect(() => {
        gsap.from(".kitchen", {
           
            
            scale:0,
            
            stagger: 0.1,
            ease: 'sine.out',
            scrollTrigger: {
                trigger: ".gallery-container",
                start: "top center+=210",
                end:"top center-=90",
                scrub: true,
                 toggleActions: "restart none restart none ",
              
            }
        }
        );
    },[]);

    return <div className="justify-center  flex w-full">
        <div className="flex gallery-container items-center justify-center overflow-hidden">
            <div>
                <img className="kitchen" src="side handle.svg" alt="" />
            </div>
            <div className="flex flex-col ">
                <div className="flex ">
                    <img className="kitchen" src="Heading-gallery.svg" alt="" />
                </div>
                <div className=" flex ">
                    <div>
                        <img className="kitchen" src="main-kitchen.svg" alt="" />
                    </div>
                    <div>
                        <img className="kitchen" src="gallery-description.svg" alt="" />
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