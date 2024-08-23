import React, { useEffect, useState } from 'react';

import {BrowserRouter,  Routes, Route,Link} from 'react-router-dom'
const Home = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/')//Json
        .then(response => response.json())
       .then(data => setUsers(data)) 
    })
    return (
        <div style={{ textAlign:'center'}}>
            <h1>Home</h1>
            {
                users.map((item) => {
                    return <h1 key={item.id}><Link to={`/user/${item.id}`}>{item.name}</Link></h1>
                })
            }
        </div>
    );
}

export default Home;