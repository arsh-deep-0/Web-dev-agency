import { FaExternalLinkAlt } from "react";
import { useEffect } from "react";

import React, { useRef } from "react";

function Buttons({ name1, name2, scrollToPricing }) {
  return (
    <div className="flex justify-center gap-4 py-8 my-2 lg:gap-16">
      <button id="plans-button" className="button crimson bg-blue-voilet" onClick={scrollToPricing}>
        {name1}
      </button>
      <button className="button crimson bg-black flex justify-center">{name2}</button>
    </div>
  );
}

export default Buttons;

