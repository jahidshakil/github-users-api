import React, { useEffect, useState } from 'react'
import './useEffectApi.css';

const UseEffectApi = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://api.github.com/users');
    //  setUsers(await response.json());
    // const data = await response.json();
    // console.log(data);
     setUsers(await response.json());
  
   
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (

      <div className='container-fluid'>
      <h2>List of Github Users</h2>
      <div className='row'>
        
        {
          users.map((props) => {
            return (
              <div>
              <div className='card'>
          <img src={props.avatar_url} alt='' />
          <div className='class-info'>
            <div className='name'>
              <h4 className='users-name'>{props.login} </h4>
            </div>
            <div className='details'>
                      <div className='details-info'><h4>id</h4><span>{props.id}</span></div>
                      <div className='details-info'><h4>Followers</h4><span>980</span></div>
              <div className='details-info'><h4>Rating</h4><span>4.5</span></div>     
            </div>
          </div>

        </div> 
              </div>
                
            )
          })
        }    
      </div>
      </div>
      
  )
}

export default UseEffectApi