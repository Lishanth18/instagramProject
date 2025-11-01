import React, { useEffect, useState } from 'react'

function Suggesstion() {
  const [profile, setProfile] = useState(null)
  const [suggesstion, setSuggession] = useState([])


  useEffect(() => {
    fetch("http://localhost:2000/profile")
    .then((response) =>  response.json())
    .then((data) => setProfile(data))
    .catch((error) => console.log(error))

    fetch("http://localhost:2000/suggestion")
    .then((response) =>  response.json())
    .then((data) => setSuggession(data))
    .catch((error) => console.log(error))
  },[])


  return (
    <div className='w-75 m-5'>
      { profile ? 
        <div className='d-flex my-2'>
          <img className='dp rounded-circle' src={profile.userProfile} alt="profile-pic"/>
          <h5>{profile.username}</h5>
          <small className='text-primary ms-auto'>switch</small>
        </div>: 
        <p>Loading</p>}
        <div className='d-flex'>
          <h6>Suggesstion for you</h6>
          <small className='ms-auto text-bold'>view all</small>
        </div>
        <div className='suggest'>
        {suggesstion.length > 0 ?
          (
          <div>{suggesstion.map((suggess) => (
            <div className='my-2' key = {suggess.id}>
              <div className='d-flex'>
                <img className='dp rounded-circle' src={suggess.userProfile} alt="profile-pic"/>
                <h5>{suggess.username}</h5>
                <small className='text-primary ms-auto'>follow</small>
              </div>
             
            </div>
          ))}</div>
          )
          :
          (
          <div>Loading</div>
          )
        }
      </div>
    </div>
  )
}

export default Suggesstion