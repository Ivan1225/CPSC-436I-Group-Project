import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import NavBar from '../newComponents/NavBar.jsx'
import Footer from '../newComponents/Footer.jsx'
import Jumbotron from '../newComponents/Jumbotron.jsx'


class Home extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <Jumbotron title ="Welcome" subtitle ="this is our website" />
                <Footer/>
            </div>
        );
    }
}

export default Home;