import React, { useState, useEffect } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        const data = await response.json();
        setUsers(data); 
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchUsers(); 
  }, []); 

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Home</h1>
      {users.map(user => (
        <h1 key={user.id}>{user.company.catchPhrase}</h1> 
      ))}
    </div>
  );
};

export default Home;
