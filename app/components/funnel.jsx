function Funnel() {
    return <>
      
        <div className="w-5/6 flex my-16 items-start justify-start">
            <div className="w-1/2 flex flex-col items-center">
                <img className="w-48 z-50 relative funnel-piece" src="sf1.svg" alt="" />
                <img className="w-40  z-40 relative funnel funnel-piece " src="sf2.svg" alt="" />
                <img className="w-32  z-30 relative funnel funnel-piece" src="sf3.svg" alt="" />
                <img className="w-28  z-20 relative funnel funnel-piece" src="sf4.svg" alt="" />
                <img className="w-20  z-10 relative funnel funnel-piece" src="sf5.svg" alt="" />
                <img className="w-14   z-0 relative funnel funnel-piece translate-y-2" src="sf6.svg" alt="" />
            </div>
            <div className="steps-outer w-1/2 ">
                <img className=" step " src="e11.svg" alt="" />
                <img className=" step " src="e22.svg" alt="" />
                <img className=" step" src="e33.svg" alt="" />
                <img className=" step" src="e44.svg" alt="" />
                <img className=" step" src="e55.svg" alt="" />
                <img className=" step" src="e66.svg" alt="" />
            </div>
        </div>

    </>
}

export default Funnel