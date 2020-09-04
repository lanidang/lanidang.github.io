import React, { Component } from 'react'
import '../css/Contact.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import resume from '../addons/laniResume.pdf'

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <div className="Contact-content" id="contact">
                    <div className="left">
                        <h1 id="title">
                            contact
                        </h1>
                        <p>Feel free to reach out and say hi! I'm open to all questions, comments, and concerns. For professional inqiries, my resume can be found <a className="link" target="blank" href={resume}>here</a>.</p>
                        <p>My email is <a className="link" href="mailto:lanidang@cs.washington.edu">lanidang@cs.washington.edu</a>.</p>
                        <div>
                        <a style={{ color: '#7d84b2', fontSize: '30px', paddingRight: '20px' }} target="blank" href="https://github.com/lanidang"><FaGithub /></a>
                        <a style={{ color: '#7d84b2', fontSize: '30px', paddingRight: '20px' }} target="blank" href="https://www.linkedin.com/in/lani-dang-85467a168/"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;