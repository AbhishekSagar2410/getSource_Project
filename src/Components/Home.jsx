import React from 'react';
import right_img from '../images/HomeImg/bg1.jpg';
import CommonPage1 from './Common/CommonPage1';
const Home=()=>{
    return <>
        <CommonPage1 
            heading1='Learn,Implement'
            heading2='&'
            heading2_span='Deploy'
            para='Get the best source to start the journey of learning.'
            btn_text='Get Started'
            img_src={right_img}
            URL='/service'
            ></CommonPage1>
    </>
}

export default Home;