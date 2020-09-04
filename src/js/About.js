import React, { Component } from 'react'
import '../css/About.css';
import { BsArrowRight } from "react-icons/bs"
import profilePic from '../addons/profilePic.png'
import resume from '../addons/laniResume.pdf'

class About extends Component {
    render() {
        return (
            <div className="About" id="about">
                <div className="About-content">
                    <img id="profileImage" src={profilePic} alt="Profile" border="1px" height="auto" />
                    <div className="text">
                        <h1 id="title">
                            about
                        </h1>
                        <p id="description">
                            Hello! I'm Lani. I'm studying computer science at the Univeristy of Washington and I will be graduating in June 2023. I strive to be an active
                            member of my community and I'm currently involved with ACM-W and Impact++, on-campus student organizations. As a member of the executive board of ACM-W, my role
                            includes managing ACM-W's social media accounts as well as maintaining the website, giving me experience in web development. I'm also a Community Committee Member
                            on Impact++, a student-led organization for team-based software projects. I am passionate about contributing to a team and I look forward to working on new projects in 
                            the future!
                        </p>
                        <p id="description">
                            I also have a variety of interests outside of school and tech including dancing, bullet journaling, and baking. I trained as a ballet dancer for 14 years :). Don't
                            hesitate to reach out to talk about any of the things I've mentioned!
                        </p>
                        <p><a className="link" target="blank" href={resume}>full resume<BsArrowRight /></a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;