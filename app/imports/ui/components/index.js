import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from './_nav_bar';
import LoginForm from './login/login_form';
import SignUp from './signup/SignUp';
import IndexContent from './_index_content';
import Home from './pages/Home.jsx'


class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Index;

// class Index extends Component{
//   render(){
//     return(
//       <BrowserRouter>
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
//                 component={SignUp}
//               />
//             </Switch>
//           </BrowserRouter>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }



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