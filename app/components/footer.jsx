function Footer() {
    return <>
        <div className="bg-black pt-8 pb-2 px-4  text-white ">
            <h2 className="encodesans text-2xl text-center font-bold">Lets Scale up your Business <span className="blue-text font-extrabold"> with Designjoy</span></h2>

            <div className='flex flex-col gap-1 justify-center my-8 mb-12'>
            <div className="flex gap-2 justify-center mt-4 items-center">
                    <img src="logo.svg" alt="" />
                    <h1 className='bodoni text-2xl text-center lg:text-3xl'>Design<span className='blue-text'>X</span>company</h1>
                </div>
                <h2  className="text-lg life text-center" >where design meets business</h2>
             
              
            </div>

            <hr className="forum my-4 mx-2 border-dotted" />

            <div className="flex justify-between  forum px-2">
                <h3>arisedayss@gmail.com</h3>
                <h3>+91-628-395-9927</h3>
            </div>

            <div className="flex justify-between my-4 text-sm forum px-2">
                <div className="flex flex-col">
                    <h3>Latest Projects</h3>
                    <h3>pricing </h3>
                    <h3>Contact Us</h3>
                </div>
                <div className="flex flex-col text-end">
                    <h3>Get started</h3>
                    <h3>Terms & Conditions</h3>
                    <h3>Privacy Policy</h3>
                </div>

            </div>
            <div className="text-center forum mt-12 my-8">
                <p>@2023 all rights reserved </p>
              
            </div>
        </div>
    </>
}
export default Footer