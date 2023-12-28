function Pricing({ pricingRef }) {
    return <>
        <div ref={pricingRef} id='pricing' className="flex-col  py-8 px-2 ">
            <h2 className="text-center text-4xl  blue-text aoboshi h-12 underline">Pricing levels</h2>

            <div className="flex flex-col bg-black items-center justify-center  rounded-md py-4 text-white my-2 mt-8 px-2 ">
                <p className="rose text-center text-3xl">Standard</p>
                <p>Best for small businesses</p>
                <p className="aoboshi text-3xl mt-4">$699</p>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer" className="button crimson bg-blue-voilet my-4 text-center">Get Started Today</a>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer">Book a call</a>
                <hr className="border-dotted  w-24" />
                <br />
                <p className="my-4">Whats included</p>
                <ul className="forum text-lg pl-10 pr-10">
                    <li>Fully Responsive web design</li>
                    
                    <li>Social Media Integration</li>
                    <li>Email support </li>
                    <li>SSL certificate </li>
                    <li>Upto 5 web pages</li>
                    
                   
                
                   
                    
                   
                </ul>
            </div>

            <div className="flex flex-col bg-black items-center justify-center  rounded-md py-4 text-white my-2 px-2 ">
                <p className="rose text-center text-3xl">Pro</p>
                <p>Best for small businesses</p>
                <p className="aoboshi text-3xl mt-4">$799</p>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer" className="button crimson bg-blue-voilet my-4 text-center">Get Started Today</a>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer">Book a call</a>

                <hr className="border-dotted  w-24" />
                <br />
                <p className="my-4">Whats included</p>
                <ul className="forum pr-6 text-lg pl-10">
                <li>Everything in Standard plan +</li>
                <li>Custom Built UI/UX</li>
                <li>Keyword & On-Page Optimization</li>
                <li>Custom forms and Portfolio sections</li>
                <li>Lead Management</li>
                <li>Upto 10 web Pages</li>
                <li>Domain & web hosting included</li>
                </ul>
            </div>

            <div className="flex flex-col bg-black items-center justify-center  rounded-md py-4 text-white my-2 px-2 ">
                <p className="rose text-center text-3xl">Custom</p>
                <p>Best for small businesses</p>
                <p className="aoboshi text-3xl mt-4">$999</p>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer" className="button crimson bg-blue-voilet my-4 text-center">Get Started Today</a>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer">Book a call</a>
                <hr className="border-dotted  w-24" />
                <br />
                <p className="my-4">Whats included</p>
                <ul className="forum pr-6 pl-10 text-lg ">
                    <li>Everything in Standard and Pro plans +</li>
                    <li>Unlimited Pages and scalabilty</li>
                    <li>Ecommerece Ready</li>
                    <li>Content Managements Systems </li>
                    <li>Customized reporting, event tracking, and conversion analysis</li>
                    <li>Custom dashboards, A/B testing</li>
                    <li>Regular Blog updates</li>
                    <li>AI chatbot integration</li>
                    <li>Payment Gateway</li>                   
                    <li>Google Analytics & Micrsoft clarity Integration </li>                               
                    <li>24/7 Premium Support</li>
                </ul>
            </div>
        </div>
    </>
}

export default Pricing