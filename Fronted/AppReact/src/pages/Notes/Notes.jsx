import React, { useContext } from 'react'
import Card from '../../components/Card/Card'
import './Notes.css'

import { Link } from 'react-router-dom'
import PdfContext from '../../context/pdfContext/PdfContext.js'
import InputBox from '../../components/InputBox/InputBox.jsx'
// import NotesSems from '../NotesSem/NotesSems.jsx'



function Notes() {

  const {linkk,setLinkk} =  useContext(PdfContext) 

  return (
    <div className="notes-page">
        <div className="aboutUsHeading ">
            <h1 className='notesh1'>NOTES</h1>
        </div>
        <div className="Btn">
            <Link to='comp'>
              <div className="btn-group">
                  <div className="btn-shadow"></div>
                  <button className="Btn1" id="pdf">COMPUTER <span>ENGINEERING</span></button>
              </div>
            </Link>
            <Link to='it'>
              <div className="btn-group">
                  <div className="btn-shadow"></div>
                  <button className="Btn1">INFORMATION TECHNOLOGY</button>
              </div>
            </Link>
            <Link to='entc'>
              <div className="btn-group">
                  <div className="btn-shadow"></div>
                  <button className="Btn1">ELECTRONIC & TELECOMMUNICATION <span>ENGINEERING</span></button>
              </div>
            </Link>
            <Link to='mech'>
              <div className="btn-group">
                  <div className="btn-shadow"></div>
                  <button className="Btn1">MECHANICAL <span>ENGINEERING</span></button>
              </div>
            </Link>
        </div>
    </div>

    // <div>
    //   Notes



    //   {/* { 
    //     data1_sem1.map((itemm,index) => {
    //       return (
    //         <Link to='/pdf' >
    //           <Card key={Date.now()} imgSource={itemm.imgSource} title={itemm.title} links={itemm.linkksrc} />
    //           <div>{itemm.id}</div>
    //         </Link>
    //       )
    //     })
    //   } */}

    //   {/* <Link to='computer'>
    //     Computer Science
    //   </Link>
    //   <Link to='it'>
    //     Information Technology
    //   </Link>
    //   <Link to='entc'>
    //     EnTC
    //   </Link>
    //   <Link to='mech'>
    //     Mech
    //   </Link>
    //   <br />
    //   <Link to='/notes/sem'>
    //     EnTC
    //   </Link> */}




    //  {/* {
    //     console.log(data1_sem1[0]['linkk-src'])}
    //   {  console.log(data1_sem1[1]['linkk-src'])}
    //   {  console.log(data1_sem1[2]['linkk-src'])
    //   } */}
    // </div>
  )
}

export default Notes
