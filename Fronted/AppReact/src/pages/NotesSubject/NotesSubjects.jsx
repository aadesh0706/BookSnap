import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  sem1 ,sem2 ,

  comp_sem3,comp_sem4,comp_sem5,comp_sem6,

  it_sem3,it_sem4,it_sem5,it_sem6,

  entc_sem3,entc_sem4,entc_sem5,entc_sem6,

  mech_sem3,mech_sem4,mech_sem5,mech_sem6,

} from '../../data/notesData'

import Card from '../../components/Card/Card'



function NotesSubjects() {
    const {branch,semester} = useParams()

    const [booksData,setBooksData] = useState([]);
    console.log(branch)
    useEffect(() => {
      semester === "sem1" && setBooksData(sem1);
      semester === "sem2" && setBooksData(sem2);

      branch ==="comp" && semester === "sem3" && setBooksData(comp_sem3);
      branch ==="comp" && semester === "sem4" && setBooksData(comp_sem4);
      branch ==="comp" && semester === "sem5" && setBooksData(comp_sem5);
      branch ==="comp" && semester === "sem6" && setBooksData(comp_sem6);

      branch ==="it" && semester === "sem3" && setBooksData(it_sem3);
      branch ==="it" && semester === "sem4" && setBooksData(it_sem4);
      branch ==="it" && semester === "sem5" && setBooksData(it_sem5);
      branch ==="it" && semester === "sem6" && setBooksData(it_sem6);

      branch ==="entc" && semester === "sem3" && setBooksData(entc_sem3);
      branch ==="entc" && semester === "sem4" && setBooksData(entc_sem4);
      branch ==="entc" && semester === "sem5" && setBooksData(entc_sem5);
      branch ==="entc" && semester === "sem6" && setBooksData(entc_sem6);

      branch ==="mech" && semester === "sem3" && setBooksData(mech_sem3);
      branch ==="mech" && semester === "sem4" && setBooksData(mech_sem4);
      branch ==="mech" && semester === "sem5" && setBooksData(mech_sem5);
      branch ==="mech" && semester === "sem6" && setBooksData(mech_sem6);

    }, [branch,semester]);
  

  return (
    
    <div className="notes-page">
          <div className="components">
              <h1>NOTES</h1>
          </div>
          <div className='btn-section'>

          {
            booksData.length > 0 ?(
              booksData.map((itemm,index) => {
                return (
                  <div className="pdf-openn">
                    <Link to='/pdf' >
                      <Card key={itemm.id} imgSource={itemm.imgSource} title={itemm.title} links={itemm.linkksrc} />
                      {/* <div>{itemm.id}</div> */}
                    </Link>
                  </div>

                )
              })
            ):(
              <p>No notes available for the selected branch and semester.</p>
            )
          }
        
          </div>

      </div>
    
    
    // <div>

        
    //     {
    //       booksData.map((itemm,index) => {
    //         return (
    //           <Link to='/pdf' >
    //             <Card key={itemm.id} imgSource={itemm.imgSource} title={itemm.title} links={itemm.linkksrc} />
    //             <div>{itemm.id}</div>
    //           </Link>
    //         )
    //       })
    //     }

    //     {/* NotesSubjects */}
    //   {/* { 
        
    //     semester === "sem1" && (
    //     data1_sem1.map((itemm,index) => {
    //       return (
    //         <Link to='/pdf' >
    //           <Card key={Date.now()} imgSource={itemm.imgSource} title={itemm.title} links={itemm.linkksrc} />
    //           <div>{itemm.id}</div>
    //         </Link>
    //       )
    //     })
    //     )
    // }
    // {
    //     semester === "sem2" && (
    //     data1_sem2.map((itemm,index) => {
    //       return (
    //         <Link to='/pdf' >
    //           <Card key={Date.now()} imgSource={itemm.imgSource} title={itemm.title} links={itemm.linkksrc} />
    //           <div>{itemm.id}</div>
    //         </Link>
    //       )
    //     })
    //     )
    //   } */}
    // </div>
  )
}

export default NotesSubjects
