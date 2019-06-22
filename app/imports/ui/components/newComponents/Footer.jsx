import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css'

$('#basicExampleModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">
                        © 2019 Wstore, Inc. All rights reserved
                        <div class ="container">
                        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>


                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal">
                                Launch demo modal
                            </button>
                            <div class="modal fade" id="basicExampleModal" tabindex="-1">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h3>A title</h3>
                                        </div>
                                        <div class="modal-body">
                                            adadadadadada
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </span>
                </div>
            </footer>
            // <footer class="page-footer font-small cyan darken-3">
            //     <div class="container">
            //         {/* <div class="row"> */}
            //         <div class="col-md-12 py-5">
            //             <div class="mb-5 flex-center">

            //                 <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal">
            //                     Launch demo modal
            //                 </button>
            //                 <div class="modal fade" id="basicExampleModal" tabindex="-1">
            //                     <div class="modal-dialog">
            //                         <div class="modal-content">
            //                             <div class="modal-header">
            //                                 <h3>A title</h3>
            //                             </div>
            //                             <div class="modal-body">
            //                                 adadadadadada
            //                             </div>
            //                             <div class="modal-footer">
            //                                 <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </footer>

        );
    }
}

export default Footer;

//&#169; {new Data().getFullYear()}