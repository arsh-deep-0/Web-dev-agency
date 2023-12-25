function Footer() {
    return <>
        <div className="bg-black pt-8 pb-2 px-4  text-white ">
            <h2 className="encodesans text-2xl text-center">Lets Scale up your Business with Designjoy</h2>

            <div className='flex flex-col gap-1 justify-center my-8'>
                <h1 className=' bodoni text-2xl text-center lg:text-3xl'>Design<span className='blue-text'>X</span>company</h1>
                <div className="flex gap-1 justify-center p-4">
                    <img src="logo.svg" alt="" />
                    <h2 >where design meets business</h2>
                </div>
            </div>

            <div className="flex justify-between encodesans text-sm">
                <h3>arisedayss@gmail.com</h3>
                <h3>+91-628-395-9927</h3>
            </div>

            <div className="flex justify-between my-4 text-sm encodesans">
                <div className="flex flex-col">
                    <h3>Latest Projects</h3>
                    <h3>pricing </h3>
                    <h3>Contact Us</h3>
                </div>
                <div className="flex flex-col">
                    <h3>Get started</h3>
                    <h3>Terms & Conditions</h3>
                    <h3>Privacy Policy</h3>
                </div>

            </div>
            <div className="text-center antics">
                <p>@2023 all rights reserved </p>
            </div>
        </div>
    </>
}
export default Footer