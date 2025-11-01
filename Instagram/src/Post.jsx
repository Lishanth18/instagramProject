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
    <div className='d-flex justify-content-center'>
      {posts.length > 0 ?
        (
        <div>{posts.map((post) => (
          <div className='my-5' key = {post.id}>
            <div className='d-flex'>
              <img className='dp rounded-circle' src={post.userProfile} alt="profile-pic"/>
              <h3>{post.username}</h3>
            </div>
            <img className='img' src={post.imageUrl} alt="image" />
            <div>
              <i className="bi bi-heart"></i>
              <i className="bi bi-chat"></i>
              <i className="bi bi-send"></i>
              <h6 className='fw-bold'>{post.likes}Likes</h6>
              <p>{post.caption}</p>
            </div>
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

