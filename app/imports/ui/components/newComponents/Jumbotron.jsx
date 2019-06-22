import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Jumbotron.css';


function mapStateToProps(state) {
    return {
        intro: state.main.intro,
        subIntro: state.main.subIntro,
    };
}

class Jumbotron extends Component {
    static propTypes = {
        intro: PropTypes.string.isRequired,
        subIntro: PropTypes.string.isRequired,
      };

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">WStore Adventures</h1>
                <p className="lead">{this.props.intro}</p>
                <hr className="my-4" />
                <p>{this.props.subIntro}</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Explore</a>
                </p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Jumbotron);