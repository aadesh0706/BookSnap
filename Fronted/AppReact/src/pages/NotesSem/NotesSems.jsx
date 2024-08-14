import React from 'react'
import './NotesSems.css'
import NotesContainer1 from '../../components/NotesContainer1/NotesContainer1'
import { Link } from 'react-router-dom'
import InputBox from '../../components/InputBox/InputBox'

function NotesSems() {
  return (
    <div className='notes-page'>
      <div className='components'>
        <h1>SUBJECTS</h1>
      </div>
      <div className='btn-section'>
        <Link to='sem1'>
          <NotesContainer1 heightt="100px" widthh="600px" textContent="Sem1"/>
        </Link>
        <Link to='sem2'>
          <NotesContainer1 heightt="100px" widthh="600px" textContent="Sem2"/>
        </Link>
        <Link to='sem3'>
          <NotesContainer1 heightt="100px" widthh="600px" textContent="Sem3"/>
        </Link>
        <Link to='sem4'>
          <NotesContainer1 heightt="100px" widthh="600px" textContent="Sem4"/>
        </Link>
        <Link to='sem5'>
          <NotesContainer1 heightt="100px" widthh="600px" textContent="Sem5"/>
        </Link>
        <Link to='sem6'>
          <NotesContainer1 heightt="100px" widthh="600px" textContent="Sem6"/>
        </Link>

        {/* <InputBox heightt = "50px" widthh = "100px" placeHolderr="password" borderRadiuss="10px" labell="Password"/> */}
      </div>
    </div>
  )
}

export default NotesSems
