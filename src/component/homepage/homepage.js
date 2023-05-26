import React, { useEffect } from 'react';
import './homepage.css';
import { useNavigate } from 'react-router-dom';

 import TheatersIcon from '@mui/icons-material/Theaters';
 import ImportContactsIcon from '@mui/icons-material/ImportContacts';

import Button from '@mui/material/Button';
 


const Homepage =(props) => {
    const navigate = useNavigate()
    let isauth = localStorage.getItem("login");

    const setFalse = () =>{
        localStorage.setItem("login", false);
        navigate('/login');
    }
    if(isauth==="true"){
    return(
        <>
        <Button variant="contained" onClick={() =>setFalse() } className='diffBtn'>Logout</Button>
        <div className='homepage'>
       
       
            <h1 className='txt'>
                Your preference..
            </h1>
            
                <div className='btn_div'>
                <button onClick={() => navigate("/loadbook")} className='btn_book'>
                <ImportContactsIcon/>
                </button>
                <button onClick={() => navigate("/loadmovie")} className='btn_mov'>
                <TheatersIcon/>
                 

                </button>
                </div>       
            
            
          {/* <Button variant="contained" onClick={() => navigate("/login")} className='diffBtn'>Logout</Button> */}
    
        </div>
        </>
        
    )}
    else{ return(
        <>
        <div>
            Oops seems like you are logged out. Login to view this page
        </div>
        <Button variant="contained" onClick={() =>setFalse() } className='diffBtn'>Log Me In</Button>
    </>
    )
    }
}

export default Homepage;