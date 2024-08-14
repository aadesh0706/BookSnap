import React from 'react'
import './ContactUs.css'
import Button from '../../components/Button/Button.jsx'

function ContactUs() {
  return (
    <div className='aboutUsContainer contactUsContainer'>
      <div className='aboutUsHeading'>
        <h1 className='contactUsh1'>Contact Us</h1>
        <p className='contactUsHeadingp'>Fill up the form and our Team will get back to you within 24 hours.. </p>
      </div>

      <div className='contactUsCard'>
        <div className='aboutUsHeading'>
            <h1 >Contact Information</h1>
        </div>

        <div className='contactUsLinksContainer'>
            <div className='contactUsLinks'>
                <div className='contactUsIconBackground'>
                    <img src="../../../public/assets/images/ContactUsIcons/ContactUsPhoneIcon.png" alt="" />
                </div>
                <p className='contactUsLinksp'>+91 98765 43210</p>
            </div>
            <div className='contactUsLinks'>
                <div className='contactUsIconBackground'>
                    <img src="../../../public/assets/images/ContactUsIcons/ContactUsMailIcon.png" alt="" />
                </div>
                <p className='contactUsLinksp'>qubitsassociation@gmail.com</p>
            </div>
            <div className='contactUsLinks'>
                <div className='contactUsIconBackground'>
                    <img src="../../../public/assets/images/ContactUsIcons/ContactUsLocationIcon.png" alt="" />
                </div>
                <p className='contactUsLinksp'>Location</p>
            </div>
        </div>
            
        <div className='contactUsButton'>
            <Button buttonText="Contact Us" heightt='107px' widthh='208px' fontSize = "32px" fontFamily="Inter" borderRadius="30px" backgroundColor="#434343"/>
        </div>

        {/* <div className="ContactUsDesignContainer">
            <div className='outer-SemiCircle'></div>
            <div className='inner-SemiCircle'></div>
        </div> */}
        
      </div>
    </div>
  )
}

export default ContactUs
