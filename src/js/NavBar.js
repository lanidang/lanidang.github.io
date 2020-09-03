import React, { Component } from 'react'
import '../css/NavBar.css';
import {Link} from 'react-scroll'

class NavBar extends Component {
    state = {}
    render() {
        return (
            <div className="navbar">
                <ul>
                    <Link activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="navItem"
                    >
                        about
                    </Link>
                </ul>
            </div>
        );
    }
}

export default NavBar;