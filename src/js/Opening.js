import React, { Component } from 'react'
import '../css/Opening.css';

class Opening extends Component {
    render() {
        return (
            <div className="Opening">
                <header className="Opening-header">
                    <p className="intro">
                        hi, i'm <span style={{color: "#7d84b2"}}>lani</span>
                    </p>
                </header>
            </div>
        );
    }
}

export default Opening;