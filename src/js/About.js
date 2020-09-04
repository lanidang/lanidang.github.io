import React, { Component } from 'react'
import '../css/About.css';
import { BsArrowRight } from "react-icons/bs"
import profilePic from '../addons/profilePic.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="About-content" id="about">
                    <img id="profileImage" src={profilePic} alt="Profile" border="1px" height="auto" />
                    <div className="text">
                        <h1 id="title">
                            about
                        </h1>
                        <p id="description">
                            Hi! I'm Lani. I'm currently studying computer science at the Univeristy of Washington and I will be graduating in June 2023. 
                        </p>
                        <p>contact me:  <a className="link" href="mailto:lanidang@cs.washington.edu">lanidang@cs.washington.edu</a></p>
                        <p className="link">
                            full resume <BsArrowRight />
                        </p>
                        <a style={{color: '#7d84b2', fontSize: '30px', paddingRight: '20px'}} target="blank" href="https://github.com/lanidang"><FaGithub/></a>
                        <a style={{color: '#7d84b2', fontSize: '30px', paddingRight: '20px'}} target="blank" href="https://www.linkedin.com/in/lani-dang-85467a168/"><FaLinkedin/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;