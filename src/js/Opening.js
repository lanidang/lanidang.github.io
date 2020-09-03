import React, { Component } from 'react'
import '../css/Opening.css';
import { GiFlowerPot } from "react-icons/gi"

class Opening extends Component {
    render() {
        return (
            <div className="Opening">
                <header className="Opening-header">
                    <p className="intro">
                        hi, i'm lani
                    </p>
                </header>
                <p className="flower">
                    <GiFlowerPot size="250px" />
                </p>
            </div>
        );
    }
}

export default Opening;