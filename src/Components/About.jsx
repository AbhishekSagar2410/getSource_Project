import React from 'react';
import right_img from '../images/HomeImg/bg3.jpg';
import CommonPage1 from './Common/CommonPage1';

const About=()=>{
    return <>
        <CommonPage1 
            heading1='Hey, This is'
            heading2=''
            heading2_span='Abhishek Sagar'
            para='getSource provides you high-quality material to start learning.'
            btn_text='Contact Now'
            img_src={right_img}
            URL='/contact'
            ></CommonPage1>
    </>
}

export default About;