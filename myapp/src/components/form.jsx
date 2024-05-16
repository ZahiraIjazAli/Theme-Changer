import React from 'react'
import '../App.css'
import Checkbox from '../components/check'

import Button from '@mui/material/Button';
function Form() {

    return (
        <div className='container'>

            <h1 className='heading'>Sign Up</h1> <br />

            <div className="row">

                <div class="form-floating col-6 mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="First name" />
                    <label for="floatingInput">First name</label>
                </div>

                <div class="form-floating col-6 mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Last name" />
                    <label for="floatingInput">Last name</label>
                </div>
            </div>

            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="Enter Email" />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <Checkbox/>
         <br/>
         <Button type='submit' variant="contained" style={{backgroundColor:"black"}}>Sign Up</Button>
        </div>
    )
}

export default Form