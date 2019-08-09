import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="d-flex">
                    <div className="mr-auto p-2">© 2019 Wstore, Inc. All rights reserved</div>
                    <div className="p-2">    </div>
                </div>

            </footer>
        );
    }
}

export default Footer;
