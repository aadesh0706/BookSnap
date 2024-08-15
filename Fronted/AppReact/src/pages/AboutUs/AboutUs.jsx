import React from 'react'
import './AboutUs.css'
import TeamMembersCard from '../../components/TeamMembersCard/TeamMembersCard'
import Button from '../../components/Button/Button'

function AboutUs() {

    const teamMembers = [
        {
            imageSource: "/assets/images/teamImages/AtharvaJagtap.png",
            name : "Atharva Jagtap",
            role : "Project Lead/UI-UX ",
        },
        {
            imageSource: "/assets/images/teamImages/KaushalPawar.png",
            name : "Kaushal Pawar",
            role : "Project Lead/UI-UX ",
        },
        {
            imageSource: "/assets/images/teamImages/PrathameshKunden.png",
            name : "Prathamesh Kunden",
            role : "Frontend Lead",
        },
        {
            imageSource: "/assets/images/teamImages/AkashShelke.png",
            name : "Akash Shelke",
            role : "Frontend Lead",
        },
        {
            imageSource: "/assets/images/teamImages/AadeshGulumbe.png",
            name : "Aadesh Gulumbe",
            role : "Backend Lead",
        },
        {
            imageSource: "/assets/images/teamImages/PranavDarokar.png",
            name : "Pranav Darokar",
            role : "Backend Lead",
        },
        {
            imageSource: "/assets/images/teamImages/AtharvaChavan.png",
            name : "Atharva Chavan",
            role : "UI-UX",
        },
        {
            imageSource: "/assets/images/teamImages/ShreenidhiRithe.png",
            name : "Shreenidhi Rithe",
            role : "BackEnd Developer",
        },
        {
            imageSource: "/assets/images/teamImages/ChaitanyaSonawane.png",
            name : "Chaitanya Sonawane",
            role : "BackEnd Developer",
        },
        {
            imageSource: "/assets/images/teamImages/JaydeepGaikwad.png",
            name : "Jaydeep Gaikwad",
            role : "BackEnd Developer",
        },
        {
            imageSource: "/assets/images/teamImages/OmBahale.png",
            name : "Om Bahale",
            role : "Database Management",
        },
        {
            imageSource: "/assets/images/teamImages/DevyaniWadekar.png",
            name : "Devyani Wadekar",
            role : "BackEnd Developer",
        },
        
        
    ]

  return (
    <>  
        <div className='aboutUsContainer'>
            <div className='aboutUsHeading'>
                <h1 className='aboutUsh1'>About Us</h1>
                <p className='aboutUsHeadingp'>"Innovating Tomorrow, Today"</p>
            </div>
            <div className='aboutUsInfo'>
                <div className='aboutUsInfoItem_left'>
                    <div>
                        <p>You guessed it. </p>
                        <p>We're changing the game.</p>
                    </div>
                    <div>
                        <p>Join our team..!</p>
                        <Button  buttonText="Join Now" backgroundColor='#ffe500' color='#3c3c3c'></Button>
                    </div>
                </div>
                <div className='aboutUsInfoItem_right'>
                    <p>
                        Welcome to BOOKSNAP, a hub for innovation and collaboration. We are <b>QUBITS</b>, a dynamic team passionate about transforming ideas into reality. From creating websites to building robots, attending hackathons, and tackling engineering challenges, we do it all.
                    </p>
                    <p>
                        BOOKSNAP is our latest venture—a one-stop solution for college students to find notes, resell books and tools, connect with like-minded peers in our community chat, and gain insights from alumni through our blog. What started as a two-person project has grown into a team of over 15 driven individuals committed to innovation.
                    </p>
                    <p>
                        Our motto, "Innovating Tomorrow, Today," reflects our belief in giving every idea a fair chance. We thrive on learning, building, and turning dreams into actual achievements. At <b>QUBITS</b>, we're not just about projects; we're about progress, creativity, and making a real impact.
                    </p>
                    <p>
                        Join us on this journey of innovation and let's build the future together
                    </p>
                </div>
                
            </div>

            <div className='aboutUsHeading'>
                <h1 className='aboutUsh1'>Our QUBITS Team</h1>
                <p className='aboutUsHeadingp'>Meet Our Incredible Team Who made this all Possible!</p>
            </div>
            <div>
                <div className='aboutUs_team'>
                    {
                        teamMembers.map((member) => (
                            <TeamMembersCard imageSource={member.imageSource} name={member.name} role={member.role} />
                        ))
                    }
                </div>
            </div>
  
        </div>
    </>
  )
}

export default AboutUs
