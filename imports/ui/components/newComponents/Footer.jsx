import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {

    };
}



class Footer extends Component {
    render() {
        return (
            <footer className="footer">

                {/* <span className="text-muted">
                        © 2019 Wstore, Inc. All rights reserved
                    </span>
                    <div className="d-flex flex-row-reverse">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                        Policy
                    </button>
                    </div> */}

                <div className="d-flex">
                    <div className="mr-auto p-2">© 2019 Wstore, Inc. All rights reserved</div>
                    <div className="p-2">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                            Policy
                    </button>
                    </div>
                    <div className="p-2">    </div>
                </div>

            </footer>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps,
)(Footer);

//&#169; {new Data().getFullYear()}