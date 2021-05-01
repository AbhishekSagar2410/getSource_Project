import React from 'react';
import {NavLink} from 'react-router-dom'

const Optionshtml=(props)=>{
    console.log(props);
    return <>
                    <div className='col-md-2 col-12 mx-4 inner_main_cont card main_card main_card_options'>
                        <img src={props.img_src} class="card-img-top img-fluid" alt="" />
                        <div class="card-body">
                            <h5 class="card-title card_heading card_heading_options">{props.heading}</h5>
                            <a href={props.yt_URL} target='_blank'><button className='myBtn_signUp getting_start_btn getting_start_btn_options'>Youtube</button></a>
                        </div>
                    </div> 
    </>
}

export default Optionshtml;