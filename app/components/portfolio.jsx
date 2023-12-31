import { useEffect, useRef } from "react";

function Portfolio() {
  const Homez = () => {
    window.open("https://homez-wbs.webflow.io/", "_blank");
  };

  const Uck = () => {
    window.open("https://universalcustomkitchens.ca/", "_blank");
  };

  return (
    <div className="bg-black py-8 px-2 overflow-hidden black-wire">
      <h2 className="text-white text-center text-3xl aoboshi blue-text">Recent Work</h2>
      <div className="flex items-center justify-center text-white">
        <div className="flex-col items-center flex py-8 gap-0">
          <img className="" src="project-1.svg" onClick={Homez} alt="" />
          <p className="text-center antics"  onClick={Homez}>HOMEZ</p>
          <img className="" src="project-2.svg" alt="" onClick={Uck} />
          <p className="text-center antics"  onClick={Uck}>Universal custom kitchens</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
