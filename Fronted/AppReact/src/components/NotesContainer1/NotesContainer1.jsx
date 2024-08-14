import React from 'react'
import './NotesContainer1.css'

function NotesContainer1({heightt,widthh,textContent}) {
  return (
    <div className="pdf-openn">{textContent}</div>

    // <div style = {{ height: heightt, width: widthh , backgroundColor: 'black' , color: 'white' ,padding:'50px', margin:'50px' }}>
    //   {/* {heightt}
    //   {widthh} */}
    //   <div  style={{margin:'auto'}}>
    //     {textContent}
    //   </div>
    // </div>
  )
}

export default NotesContainer1
