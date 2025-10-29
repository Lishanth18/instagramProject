import React, { useEffect, useState } from 'react'

function Post() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:2000/posts").
    then((response) => response.json()).
    then((data) => setPosts(data)).
    catch((err) => console.log(err))
  },[])
  
  return (
    <div>
      {posts.length > 0 ?
        (
        <div>{posts.map((post) => (
          <div key = {post.id}>
            <div className='d-flex'>
              <img className='dp rounded-circle' src={post.userProfile} alt="profile-pic"/>
              <h3>{post.username}</h3>
            </div>
            <img className='img' src={post.imageUrl} alt="image" />
          </div>
        ))}</div>
        )
        :
        (
        <div>False</div>
        )
      }
    </div>
  )
}

export default Post

