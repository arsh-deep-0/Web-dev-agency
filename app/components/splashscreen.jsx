import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

function SplashScreen() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const tl = gsap.timeline();

        // Define the animation timeline

        tl.to('.box', { duration: 0.5, y: -400, ease: 'back.inOut' })
          .to('.box', { duration:0.5, width:480, ease: 'back.inOut'}) 
          .to('.box-text',{duration:0.5, opacity:1, ease: 'back.inOut'}, "<")
        
          .to('.box-subtext',{duration:0.5, opacity:1, ease: 'back.inOut'}, ">")
          .to('.splash', { opacity: 0, duration: 0.2, onComplete: () => { setShowSplash(false); } }, "+=5");
          

        return () => {
            tl.kill(); // Kill the animation when the component unmounts (optional)
        };
    }, []);

    return (
        <div className={` splash flex flex-col items-center justify-end gap-2 ${showSplash ? '' : 'splashHidden'}`}>
            <div className='box bg-white h-10 w-10  flex items-center justify-center p-2 gap-2'>
                <img className='box-text opacity-0 h-6' src="logo.svg" alt="" />
                <p className='box-text text-center blue-text opacity-0 text-xl bodoni'>DesignXcompany</p>
            </div>
            <h2  className="box box-subtext text-lg life text-center opacity-0 text-white" >where design meets business</h2>
        </div>
    );
};

export default SplashScreen