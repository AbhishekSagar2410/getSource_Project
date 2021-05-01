import React from 'react';

const Contact = () => {
    return <>
        <div className='main_service_cont'>
            <div className='slant_cont'></div>
        </div>
        <div className='container-fluid my-5'>
            <h1 className='text-center contactHeading'>Contact US</h1>
        </div>
        <div className='container-fluid row'>
            <div className='col-md-6 col-12 mx-auto main_contact_div_inner'>

                <form className='myForm'>
                <div class="form-group">
                        <label for="exampleInputName">UserName</label>
                        <input type="text" class="form-control" id="exampleInputName" />
                    </div>
                <div class="form-group">
                        <label for="exampleInputNumber">Mobile No.</label>
                        <input type="number" class="form-control" id="exampleInputNumber" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
}

export default Contact;