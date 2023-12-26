import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

function Heading() {
  useEffect(() => {
    const addTextAnimation = () => {
      const mainText = document.querySelectorAll('.main-text');
      const mainTextSplit = new SplitType(mainText, { types: 'words' });

      gsap.from(mainTextSplit.words, {
        scrollTrigger: {
          trigger: mainText,
          start: 'top 40%',
          end: 'top 0%',
        },
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'sine.out',
        onComplete: () => {
          mainTextSplit.revert();
        },
      });

     
    };

    addTextAnimation();
  }, []);

  return (
    <div className='z-10 relative flex justify-center items-center py-6'>
      <p className='text-reveal px-2 aoboshi heading text-3xl text-center font-normal md:text-5xl lg:text-6xl'>
        <span className='main-text target'>A complete web solution to all Home Remodelling & Construction Businesses</span>
        <span className='blue-text main-text target'></span>
        <span className='main-text target'></span>
      </p>
    </div>
  );
}

export default Heading;
