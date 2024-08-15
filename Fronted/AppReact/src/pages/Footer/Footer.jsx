import React from 'react'
import './Footer.css'

import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="footerContainer">
        <div className="container ">
            <div className="about-section flexing">
                <div className="textContent">
                    <h1 className="footerh1">About BOOKSNAP</h1>
                    <h1 className="footerh1"> <img src="../../../public/assets/images/footerQuotes.png" alt=""/></h1>
                    <p className="quote">"BOOKSNAP is where your college journey gets easier and more exciting. Find the notes you need, pass on your books and tools to fellow students, and connect with others in our lively community chat. Explore inspiring alumni stories and see how they turned their experiences into success. Whether you're here to study, share, or just connect, BOOKSNAP is your go-to spot for everything in college life."</p>
                    <p className="footerp">~Founder Team</p>
                </div>
                <div className="imageContent">
                    <img src="../../../public/assets/images/footerImg.jpg" alt="Students in classroom"/>
                </div>
            </div>
        </div>
        <div className="footerbottomcontainer flexing">
            <div className="footerbottom">
                <div className="footerbottomh11">Powered by </div>
                <div className="footerbottomh12">QUBITS</div>
                <div className="footerbottomh13">" Innovating Tomorrow, Today "</div>
            </div>
            <div className="footerbottom2">
                <div className="footerbottom2h11"><h1>Support</h1></div>
                <div className="footerbottom2Links">
                    <Link to=''>Help Center</Link>
                    <Link to=''>Account Information</Link>
                    <Link to='/aboutus'>About US</Link>
                    <Link to='/contactus'>Contact US</Link>
                </div>
            </div>
            
            
        </div>


        <div className="flexing footerbottomost">
            <p className="rights">&copy; 2024 BOOKSNAP Powered by QUBITS. Copyright and rights reserved.</p>
            <p>Terms and Conditions &bull; Privacy Policy</p>
        </div>
    </footer>
  )
}

export default Footer
