import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import Options from './Options'
import {Redirect, Route ,Switch} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Css/navbar.css';
import './Css/home.css'
import './Css/service.css'
import './Css/options.css';
import './Css/footer.css';
import './Css/contact.css';

const App=()=>{
    return <>

        <Navbar></Navbar>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/service' component={Service}></Route>
            <Route exact path='/service/:choose' component={Options}></Route>
            <Redirect to='/'></Redirect>
        </Switch>
        <Footer></Footer>
    </>
}

export default App;