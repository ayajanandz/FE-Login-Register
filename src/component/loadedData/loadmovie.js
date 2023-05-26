import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Loadmovie = () => {
    const navigate = useNavigate();
    let isauth = localStorage.getItem("login");
    const [data, setData] = useState([])
    useEffect(() => {
        if(isauth==="true"){
        axios.get('http://localhost:8000/test?category=movies')
        .then(res=> setData(res.data))
        .catch(err => console.log(err));
        }
        else {
            alert('Oops you are logged out');
            navigate('/login');
        }
    }, [])

    const[searchTerm, setsearchTerm] = useState("");

    return (
        <div className='container'>
            {/* <div className='mt-3'> */}

            <input type='text' placeholder='Search...' style={{marginTop:50, marginBottom:20, width:"40%", height:30, fontSize:20}}
                onChange={(e)=> {
                    setsearchTerm(e.target.value);
                }}
            />

                <table className='table table-bordered' style={{fontSize:20, width:"100%", justifyItems: 'space-around'}} >
                    <thead className='thead-dark'>
                        <tr>
                            
                            <th>Name</th>
                            <th>Director</th>
                            <th>Genre</th>
                            <th>Year</th>
                            <th>Rating</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                          data.filter(val =>{
                            if(searchTerm === ""){
                                return val;
                            }
                            else if(
                                val.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.Director.toLowerCase().includes(searchTerm.toLowerCase())
                                )
                            {
                                return val;
                            }
                          }).map((movie, index)=>{
                            return<tr key={index}>
                                
                                <td>{movie.Name}</td>
                                <td>{movie.Director}</td>
                                <td>{movie.Genre}</td>
                                <td>{movie.Year}</td>
                                <td>{movie.Rating}</td>
                                
                            </tr>
                          })  
                        }
                    </tbody>
                </table>
            {/* </div> */}
        </div>
    )
}
export default Loadmovie;