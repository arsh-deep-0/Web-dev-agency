function Buttons ({name1 , name2}){
    return <>
    <div className="bg-white flex justify-center gap-4 py-8 lg:gap-16">
    <button className="button crimson bg-red-600">{name1}</button>
    <button className="button crimson bg-black ">{name2}</button>
    </div>
    
    </>
}

export default Buttons