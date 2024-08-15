import React from 'react'
import './Home.css'

import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <main className='Home'>
        <div className='heroSection'>
          <div className='heroSectionInner'>
            <div className='heroSection1'>We’re here to Enhance your Work & Studies</div>

            <p className='heroSection2'>Welcome to BOOKSNAP – Your Ultimate Book Hub! Discover the latest features designed to enhance your reading experience</p>

            <div className='heroSection3'>Get Started</div>
          </div>
        </div>

        <div className='homeblackLinks'>
            <Link to = 'https://nmiet.edu.in/'  style={{textDecoration:'none'}}>
              <div className='homeblackLink'>
                <img src="/assets/images/nmietLogo.png" alt="" />
                <div className='homeblackLinkText'>NMIET</div>
              </div>
            </Link>
            <Link to = "https://www.instagram.com/nutan_nic?igsh=MXhnNGdwMmZ1dG1hNA==" style={{textDecoration:'none'}}>
              <div className='homeblackLink' >
                <img src="" alt="" />
                <div className='homeblackLinkText'>NIC</div>
              </div>
            </Link>
            <Link to = "https://www.instagram.com/iic_nmiet?igsh=ajQ2NnVhY3EwNWYy" style={{textDecoration:'none'}}>
              <div className='homeblackLink' >
                <img src="" alt="" />
                <div className='homeblackLinkText'>IIC</div>
              </div>
            </Link>
            <Link to = "https://www.instagram.com/team_qubits?igsh=b3Z1eHdoY3Y3eTB3" style={{textDecoration:'none'}}>
              <div className='homeblackLink' >
                <img src="/assets/images/qubitsLogo.pngx" alt="" />
                <div className='homeblackLinkText'>QUBITS</div>
              </div>
            </Link>
            <Link to = "" style={{textDecoration:'none'}}>
              <div className='homeblackLink' >
                <img src="" alt="" />
                <div className='homeblackLinkText'>MOE</div>
              </div>
            </Link>

        </div>

        <Link style={{textDecoration:'none'}} to='/notes'>
          <div className='homepageNotes'>
            <div className='homepageNotesh1'>NOTES</div>
            
            <div className='homepageBuyCards'>

              <div className='homepageBuyCard'>
                <img className='homepageBuyCardImg' src="/assets/images/Notes-1.png" alt="" />
                <h2 className='homepageBuyCardBtn'>TEXTBOOKS</h2>
              </div>
              <div className='homepageBuyCard'>
                <img className='homepageBuyCardImg' src="/assets/images/Notes-2.png" alt="" />
                <h2 className='homepageBuyCardBtn'>PYQ's</h2>
              </div>
              <div className='homepageBuyCard'>
                <img className='homepageBuyCardImg' src="/assets/images/Notes-3.png" alt="" />
                <h2 className='homepageBuyCardBtn'>DECODES</h2>
              </div>
              
            </div>
          </div>
        </Link>

        <Link style={{textDecoration:'none'}} to='/shop'>
          <div className='homepageNotes'>
            <div className='homepageNotesh1'>BUY / SELL</div>
            
            <div className='homepageBuyCards'>

              <div className='homepageBuyCard'>
                <img className='homepageBuyCardImg' src="/assets/images/Buy-1.png" alt="" />
                <h2 className='homepageBuyCardBtn'>ENGINEERING MII</h2> 
                <p></p>
              </div>
              <div className='homepageBuyCard'>
                <img className='homepageBuyCardImg' src="/assets/images/Buy-2.png" alt="" />
                <h2 className='homepageBuyCardBtn'>PYQ's</h2>
              </div>
              <div className='homepageBuyCard'>
                <img className='homepageBuyCardImg' src="/assets/images/Buy-3.png" alt="" />
                <h2 className='homepageBuyCardBtn'>DECODES</h2>
              </div>
              
            </div>
          </div>
        </Link>

      </main>

    </div>
  )
}

export default Home
