function Pricing({ pricingRef }) {
    return <>
        <div ref={pricingRef} id='pricing' className="flex-col bg-white  py-8 px-2 ">
            <h2 className="text-center text-4xl  blue-text aoboshi h-12 underline">Pricing levels</h2>

            <div className="flex flex-col bg-black items-center justify-center  rounded-md py-4 text-white my-2 mt-8">
                <p className="rose text-center text-3xl">Standard</p>
                <p>Best for small businesses</p>
                <p className="aoboshi text-3xl mt-4">$699</p>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer" className="button crimson bg-blue-voilet my-4">Get Started Today</a>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer">Book a call</a>
                <hr className="border-dotted  w-24" />
                <br />
                <p className="my-4">Whats included</p>
                <ul className="anonymous text-lg ">
                    <li>upto 5 web pages</li>
                    <li>One request at a time</li>
                    <li>web hosting included</li>
                    <li>upto 5 web pages</li>
                    <li>upto 5 web pages</li>
                    <li>upto 5 web pages</li>
                </ul>
            </div>

            <div className="flex flex-col bg-black items-center justify-center  rounded-md py-4 text-white my-2">
                <p className="rose text-center text-3xl">Pro</p>
                <p>Best for small businesses</p>
                <p className="aoboshi text-3xl mt-4">$799</p>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer" className="button crimson bg-blue-voilet my-4">Get Started Today</a>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer">Book a call</a>

                <hr className="border-dotted  w-24" />
                <br />
                <p className="my-4">Whats included</p>
                <ul className="anonymous text-lg ">
                    <li>upto 5 web pages</li>
                    <li>One request at a time</li>
                    <li>web hosting included</li>
                    <li>upto 5 web pages</li>
                    <li>upto 5 web pages</li>
                    <li>upto 5 web pages</li>
                </ul>
            </div>

            <div className="flex flex-col bg-black items-center justify-center  rounded-md py-4 text-white my-2">
                <p className="rose text-center text-3xl">Custom</p>
                <p>Best for small businesses</p>
                <p className="aoboshi text-3xl mt-4">$999</p>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer" className="button crimson bg-blue-voilet my-4">Get Started Today</a>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer">Book a call</a>
                <hr className="border-dotted  w-24" />
                <br />
                <p className="my-4">Whats included</p>
                <ul className="anonymous text-lg ">
                    <li>upto 5 web pages</li>
                    <li>One request at a time</li>
                    <li>web hosting included</li>
                    <li>upto 5 web pages</li>
                    <li>upto 5 web pages</li>
                    <li>upto 5 web pages</li>
                </ul>
            </div>
        </div>
    </>
}

export default Pricing