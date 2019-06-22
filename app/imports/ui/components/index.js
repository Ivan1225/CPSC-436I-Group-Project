import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from './newComponents/NavBar.jsx'
import LoginForm from './login/login_form';
import SignUp from './signup/SignUp';
import IndexContent from './_index_content';
import Home from './pages/Home.jsx'
import Profile from './profile/profile'
<<<<<<< HEAD
<<<<<<< HEAD
import Popup from './newComponents/Popup';
=======
>>>>>>> 0c511e0... Profile added
=======
>>>>>>> 0c511e0... Profile added

class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/:id([a-zA-Z0-9-]+)/profile"
              component={Profile}
            />
            <Route
              exact
              path="/login"
              component={LoginForm}
            />
            <Route
              exact
              path="/signup"
              component={SignUp}
            />
          </Switch>
<<<<<<< HEAD
<<<<<<< HEAD
          <Popup />
=======
>>>>>>> 0c511e0... Profile added
=======
>>>>>>> 0c511e0... Profile added
        </div>
      </BrowserRouter>
    );
  }
}
export default Index;

// import styled from 'styled-components';
// const Button = styled.button `
//   font-family: sans-serif;
//   font-size: 1.3rem;
//   border: none;
//   border-radius: 5px;
//   padding: 7px 10px;
//   background: ${(props) => (props.primary ? 'red': 'green')};
//   color: #fff;
//   &:hover{
//     background: blue;
//   }
// `;

// function mapStateToProps(state) {
//   return {
//     loginPopup: state.main.loginPopup,
//   };
// }

// class Index extends Component {
//   static propTypes = {
//     loginPopup: PropTypes.bool.isRequired,
//   };

//   render() {
//     const {
//       loginPopup
//     } = this.props;

//     return (
//       <div>
//         <div>
//           <BrowserRouter>
//             <NavBar />
//             <Switch>
//               <Route
//                 exact
//                 path="/"
//                 component={IndexContent}
//               />
//               <Route
//                 exact
//                 path="/login"
//                 component={LoginForm}
//               />
//               <Route
//                 exact
//                 path="/signup"
//                 component={RegisterForm}
//               />
//             </Switch>
//           </BrowserRouter>
//           {/* <div>
//             <Button> try </Button>
//           </div> */}
//         </div>
//       </div>
//     );
//   }
// }

// export default connect(
//   mapStateToProps,
// )(Index);