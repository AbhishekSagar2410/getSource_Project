import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <>
        
            <div className='row my_navbar_con'>
                <div className='col-md-10 col-12 mx-auto'>
                    <nav class="navbar navbar-light mynavbar">
                        <NavLink to="/"><i className="fas fa-podcast navicon"></i>getSource</NavLink>
                        <div className=" navbar_div" id="navbarSupportedContent">
                            <ul class="navbar_ul">
                                <li className="nav-item li_items">
                                    <NavLink activeclassName="myLinks" to="/">Home</NavLink>
                                </li>
                                <li class="nav-item li_items">
                                    <NavLink activeclassName="myLinks" to="/service">Services</NavLink>
                                </li>
                                <li class="nav-item li_items">
                                    <NavLink activeclassName=" myLinks" to="/about">About</NavLink>
                                </li>
                                <li class="nav-item li_items">
                                    <NavLink activeclassName=" myLinks" to="/contact">Contact</NavLink>
                                </li>
                            </ul>

                        </div>
                        <NavLink className='signA' to="/contact">
                            <button className='myBtn_signUp'>Sign Up</button>
                        </NavLink>
                        
                    </nav>
                </div>
            </div>
        
    </>
}

export default Navbar;