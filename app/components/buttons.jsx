import { FaExternalLinkAlt } from "react-icons/fa";

function Buttons ({name1 , name2}){
    return <>
    <div className=" flex justify-center gap-4 py-8 my-2 lg:gap-16">
    <button className="button crimson bg-blue-voilet">{name1}</button>
    <button className="button crimson bg-black flex justify-center">{name2} <FaExternalLinkAlt className="mt-1 ml-1"/></button>
    </div>
    
    </>
}

export default Buttons