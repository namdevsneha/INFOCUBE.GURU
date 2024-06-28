import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Terms(){
    const [show, setShow] = useState(false);
    const location = useLocation();

    useEffect(() => {
      setShow(true);
      return () => setShow(false);
    }, [location]);
    return (
      <div  className={`page ${show ? 'page1-enter-active' : 'page1-exit-active'}`}>
      <div className="mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem] flex flex-col items-center" >
      {/* <div className="font-bold font-roboto py-[2rem] md:py-[2.5rem] lg:py-[3rem] text-left" style={{fontSize:${0.0234375*innerWidth+24}px}}>Terms & Conditions</div> */}
        

      
      <div className="relative w-full  flex items-center justify-center  py-[2rem] md:py-[2.5rem] lg:py-[3rem]">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-black border-"></div>
    </div>
    <div className="relative px-4 bg-white text-xl text-black font-bold font-roboto"style={{fontSize:`${0.0234375*innerWidth+24}px`}}>
      Terms & Conditions
    </div>
    
  </div>


     <div style={{fontSize:`${0.0078125*innerWidth+8}px`,paddingLeft:`${0.078125*innerWidth+20}px`,paddingRight:`${0.078125*innerWidth+20}px`}} >

      <p>
        <span className="font-bold">Welcome</span> to Infocube! Before you start using our educational technology platform, please take a moment to carefully read and understand the following Terms and Conditions. By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our services.</p>

        <br className="tight-line-break"/>
        <p>By using our website, you acknowledge that you have read, understood, and agree to comply with these Terms and Conditions. These terms may be updated or modified by us from time to time without prior notice. It is your responsibility to review these terms regularly, as continued use of the website will signify your acceptance of any changes.</p>
        <br />
        <h2 className="font-bold">User Registration</h2>
        <br/>
        <p>a. You agree to use the website only for lawful and educational purposes. You may not use the website for any illegal or unauthorized purpose.
        b. You agree not to use the website in any way that may disrupt, damage, or interfere with its functionality, including attempting to gain unauthorized access to any part of the website.
        c. You acknowledge and agree that we may use your data and information in accordance with our Privacy Policy, which is incorporated by reference into these Terms and Conditions.</p>
        <br/>

        <h2 className="font-bold">Use of the Website</h2>
        <br/>
        <p>a. You agree to use the website only for lawful and educational purposes. You may not use the website for any illegal or unauthorized purpose.
        b. You agree not to use the website in any way that may disrupt, damage, or interfere with its functionality, including attempting to gain unauthorized access to any part of the website.
        c. You acknowledge and agree that we may use your data and information in accordance with our Privacy Policy, which is incorporated by reference into these Terms and Conditions.</p>

        <br/>
        <h2 className="font-bold">Intellectual Property</h2>
        <br/>
        <p>a. All content on the website, including but not limited to text, graphics, logos, images, software, and any other materials, are the intellectual property of [Your EdTech Website] or its licensors and is protected by copyright and other intellectual property laws.
        b. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any content from the website without our prior written consent.</p>
        <br/>


        <h2 className="font-bold">Payments and Fees</h2>
        <br/>
        <p>a. Some features or services offered on the website may require payment of fees. You agree to pay all fees and charges associated with your use of these premium services as specified on the website.
        b. All payments are final and non-refundable unless otherwise stated in our refund policy.</p>
        <br/>


        <h2 className="font-bold">Termination</h2>
        <br/>
        <p>a. We reserve the right to terminate or suspend your access to the website at our discretion, without notice, for any reason, including, but not limited to, a breach of these Terms and Conditions.
        b. Upon termination, all provisions of these Terms and Conditions that by their nature should survive termination will survive, including, without limitation, intellectual property rights, disclaimers, and limitations of liability.</p>
        <br/>
  

        <h2 className="font-bold">Limitation of Liability</h2>
        <br/>
        <p>a. To the maximum extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurrewebsiteirectly or indirectly, arising from your use or inability to use the website.</p>
   
        <br/>

        <h2 className="font-bold">Contact Information</h2>
        <br/>
        <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us at <a href="mailto:Infocube.ed@gmail.com" className="text-blue-700 font-semibold">Infocube.ed@gmail.com</a>
        </p>
        <p>By using Infocube, you acknowledge and agree to these Terms and Conditions. Thank you for choosing Infocube for your educational needs.</p>
        <br/>
        <br/>
        </div>
        </div>
        </div>
    )
} 