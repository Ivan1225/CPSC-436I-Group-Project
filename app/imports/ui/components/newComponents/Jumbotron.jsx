import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">WStore Adventures</h1>
                <p className="lead">Explore our high-quality products from our credible partners.</p>
                <hr className="my-4" />
                <p>From Local but not only Local.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Explore</a>
                </p>
            </div>
        );
    }
}

export default Jumbotron;

