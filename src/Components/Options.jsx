import React from 'react';
import { useParams ,NavLink} from 'react-router-dom';
import Optionshtml from './Common/Optionshtml';
import Language from './ElementArrays/Language';
import WebDev from './ElementArrays/WebDev';
import AppDev from './ElementArrays/AppDev';

const newArr=(currentData,currentIndex)=>{
    return <Optionshtml
                heading={currentData.course}
                yt_URL={currentData.get_link}
                img_src={currentData.img_src}
    ></Optionshtml>

}

const Options = () => {
    const { choose } = useParams();
    console.log(choose)
    return <>
        <div className='main_service_cont'>
            <div className='slant_cont'></div>
        </div>
        <div className='row my_navbar_con my_service_container_main my_service_container_main_options'>
            <div className=' col-md-10 col-12 mx-auto '>
                <h1 className='left_heading_1 service_heading'>Get free and informative playlists on <span>YOUTUBE</span></h1>
                <p className='myPara  myPara_options'>Recommended by IITians, Top MNCs </p>
                <div className='row center_main_cont center_main_cont_options'>
                {choose =='language' ? Language.map(newArr) :null }
                {choose =='webdev' ? WebDev.map(newArr) :null }
                {choose =='appdev' ? AppDev.map(newArr) :null }
                    
                </div>
            </div>
        </div>
    </>
}

export default Options;