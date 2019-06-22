import React, { Component } from 'react';

class Popup extends Component {
  render() {
    return (
      <div>
        <div className="modal" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Policy</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Wstore adopts the following privacy policy regarding the use of the website and related investment websites and services (“this website”), but the following policies Associated sites with separate privacy policies are not covered. This Privacy Policy applies to materials collected through this website or provided directly by the user, but does not cover any personal or non-personal data collected through other websites (including the websites of our affiliates) or sources. The privacy policy of this website may be updated periodically to reflect changes in the way we collect, use and/or share information, and the last update date will be indicated on this page. It is your responsibility to review this Privacy Policy and understand the changes. Therefore, each time you use this website, please review this Privacy Policy to ensure that you have a clear understanding of how we have changed our personal data. By continuing to use this website, you accept any changes to our privacy policy.
                </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" aria-label="Close">Got it</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;