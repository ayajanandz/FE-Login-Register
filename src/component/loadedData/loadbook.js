import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Loadbook = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/test?category=books')
        .then(res=> setData(res.data))
        .catch(err => console.log(err));
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
                <table className='table table-bordered' style={{fontSize:20, width:"100%", justifyItems: 'space-around'}}
                 >
                    <thead className='thead-dark'>
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Parts</th>
                            <th>StartYr</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          data.filter(val =>{
                            if(searchTerm === ""){
                                return val;
                            }
                            else if(
                                val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.author.toLowerCase().includes(searchTerm.toLowerCase())
                            ){
                                return val;
                            }
                          }).map((books, index)=>{
                            return<tr key={index}>
                                <td>{books.name}</td>
                                <td>{books.author}</td>
                                <td>{books.parts}</td>
                                <td>{books.startYr}</td>
                            </tr>
                          })  
                        }
                    </tbody>
                </table>
            {/* </div> */}
        </div>
    )
}
export default Loadbook;