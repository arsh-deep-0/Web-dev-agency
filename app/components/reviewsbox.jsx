function ReviewsBox (){
    return <>
    <div className=" flex justify-center py-4  w-full">
        <div className="  flex items-center justify-center">
            <p className="absolute  review-text w-3/5 ml-6 text-center mt-2 text-sm crimson">  These Guys provide excellent service at premium rates.</p>
            <div className="absolute  flex items-center justify-center bg-black rounded-full h-16 w-16 review-photo">
                <img className="w-full" src="happy.svg" alt="" />
            </div>
            <p className="client-name absolute text-sm  crimson ">Garry <br /><span className="client-role encodesans text-xs" >Business Owner</span></p>

            
            <p className="client-business absolute text-xs w-36 text-center ebgara">UNIVERSAL CUSTOM KITCHENS</p>
        <img  src="reviews-box.svg" alt="trustpilot reviews ratings" />
           
        </div>

    </div>
   
    </>
}

export default ReviewsBox