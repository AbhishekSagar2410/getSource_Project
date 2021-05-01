import React from 'react';
import { NavLink } from 'react-router-dom';

const CommonPage1=(props)=>{
    return <>
            <div className='row my_navbar_con'>
                <div className='row col-md-10 col-12 mx-auto'>
                    <div className='col-md-7 col-12 right_left_main_container left_main_container'>
                        <h1 className='left_heading_1'>{props.heading1}</h1>
                        <h1 className='left_heading_1'>{props.heading2} <span>{props.heading2_span}</span></h1>
                        <p className='myPara'>{props.para} </p>
                        <NavLink to={props.URL}>
                            <button className='myBtn'>{props.btn_text}</button>
                        </NavLink>
                    </div>
                    <div className='col-md-5 col-12 right_left_main_container right_main_container'>
                        <img src={props.img_src} className='img-fluid myImg'></img>
                    </div>
                </div>
            </div>
    </>
}


export default CommonPage1;