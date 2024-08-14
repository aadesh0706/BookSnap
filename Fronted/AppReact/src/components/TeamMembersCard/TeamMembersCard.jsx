import React from 'react'
import './TeamMembersCard.css'

function TeamMembersCard({imageSource,name,role}) {
  return (
    <div className='teamImgCard'>
      <img className="teamImg" src={imageSource} alt={name} />
      <h4 className="teamImgName"> {name}</h4>
      <h5 className="teamImgRole">{role}</h5>
    </div>
  )
}

export default TeamMembersCard
