import React from 'react';
import Chooseopt from './Common/Chooseopt';
import Chooseoptobj from './ElementArrays/Chooseoptobj';
import img0 from '../images/ServiceImg/collection1.png'
import img1 from '../images/ServiceImg/collection2.jpg'
import img2 from '../images/ServiceImg/collection3.jpg'




const img_arr = [img0, img1, img2]
const newArr = (currentData, currentIndex) => {
    return <Chooseopt
        URL={currentData.URL}
        heading={currentData.heading}
        image={img_arr[currentIndex]}
    >
    </Chooseopt>
}

const Service = () => {
    console.log(Chooseoptobj);
    return <>
        <div className='main_service_cont'>
            <div className='slant_cont'></div>
        </div>
        <div className='row my_navbar_con my_service_container_main'>
            <div className=' col-md-10 col-12 mx-auto '>
                <h1 className='left_heading_1 service_heading'>Pick your Interest and get's <span>started</span></h1>
                <div className='row center_main_cont'>

                    {Chooseoptobj.map(newArr)}
                </div>
            </div>
        </div>
    </>
}

export default Service;