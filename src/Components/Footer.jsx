import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return <>
        <footer className="bg-light text-center text-lg-start">

            <div className="row footerrow">

                <div className="col-md-2">
                </div>
                <div className="col-md-8 text-center p-3 footerDiv">
                    © 2020 Copyright:
            <span className="text-dark">GetSource</span>
                </div>
                <div className="col-md-2">

                    <span className="connectspan">
                        <NavLink to="https://www.instagram.com/l_mr_ocean_l/" target="_blank"><i
                            className="fab fa-instagram myconnecticon"></i></NavLink>
                        <NavLink to="https://www.facebook.com/abhishek.sagar.50364/" target="_blank"><i
                            className="fab fa-facebook-f myconnecticon"></i></NavLink>
                        <NavLink to="https://twitter.com/Mr_OceanAbhi" target="_blank"><i
                            className="fab fa-twitter myconnecticon"></i></NavLink>

                    </span>
                </div>

            </div>

        </footer>

    </>
}

export default Footer;