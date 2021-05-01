import React from 'react';
import { NavLink } from 'react-router-dom';

const Chooseopt = (props) => {
    console.log(props);
    const setURL=`/service/${props.URL}`
    return <>
        <div className='col-md-3 col-12  mx-4 inner_main_cont card main_card'>
            <img src={props.image} class="card-img-top img-fluid" alt={props.heading} />
            <div class="card-body">
                <h5 class="card-title card_heading">{props.heading}</h5>
                <NavLink to={setURL}><button className='myBtn_signUp getting_start_btn'>Let's Start</button></NavLink>
            </div>
        </div>
    </>
}

export default Chooseopt;