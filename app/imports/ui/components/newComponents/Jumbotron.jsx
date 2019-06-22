import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            //   <div className="jumbotron jumbotron-fluid">
            //     <div className="container">
            //       <h1 className="display-3">{this.props.title}</h1>
            //       <p className="lead">{this.props.subtitle}</p>
            //     </div>
            //   </div>
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Explore</a>
                </p>
            </div>
        );
    }
}

export default Jumbotron;

