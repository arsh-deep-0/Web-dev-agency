import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType, { TargetElement } from 'split-type';

function Heading() {
  useEffect(() => {
    const addTextAnimation = () => {
      let myText = document.querySelectorAll('.text-reveal');
      console.log(myText);

      
        const text = new SplitType(myText, { types: 'chars, words' });

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: myText,
            start: 'top 40%',
           
          },
          opacity: 0,

          stagger: 0.035,
          duration: 1,
          ease: 'ease.out',
          onComplete: () => {
            text.revert()
          },
        })
    
    }
    const addTextAnimation2 = () => {
      let myText = document.querySelectorAll('.text-reveal2');
      console.log(myText);

      
        const text = new SplitType(myText, { types: 'chars, words' });

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: myText,
            start: 'top 40%',
           
          },
          opacity: 0,
          
          stagger: 0.035,
          duration:1.05,
          ease: 'ease.out',
          onComplete: () => {
            text.revert()
          },
        })
    
    }


     addTextAnimation(); 
     addTextAnimation2();

  }, [])


  return (
    <>
      <div className=' z-10 relative flex justify-center  items-center py-6'>
        <p id='target' className=' target px-2 aoboshi heading text-3xl text-center font-normal md:text-5xl lg:text-6xl '>
          <span className='text-reveal target' >A complete web solution to all </span> 
          <span className='text-reveal2 blue-text pr-2 target'>Home Remodelling & Construction Businesses </span>
          </p>
      </div>

    </>
  )
}

export default Heading