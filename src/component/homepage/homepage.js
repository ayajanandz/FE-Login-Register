import React from 'react';
import './homepage.css';
import { useNavigate } from 'react-router-dom';

 import TheatersIcon from '@mui/icons-material/Theaters';
 import ImportContactsIcon from '@mui/icons-material/ImportContacts';

import Button from '@mui/material/Button';
 


const Homepage =() => {
    const navigate = useNavigate()
    
    return(
        <>
        <Button variant="contained" onClick={() => navigate("/login")} className='diffBtn'>Logout</Button>
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
        
    )
}

export default Homepage;