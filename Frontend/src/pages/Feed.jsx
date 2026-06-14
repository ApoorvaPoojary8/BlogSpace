import React, { useState , useEffect } from 'react'
import axios from 'axios';


const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://ik.imagekit.io/Apoorva/image_ddiLYSZgk.jpg",
      caption: "Pokemon Delcatty",
    },
  ]);

  useEffect(()=>{

    axios.get("http://localhost:3000/posts").then((res)=>{
      console.log(res.data)
    })

  },[])









    return (
    <section className="feed-section">
      <h1>Feed</h1>

      {posts.map((post) => (
        <div key={post._id}>
          <img src={post.image} alt={post.caption} width="300" />
          <p>{post.caption}</p>
        </div>
      ))}
    </section>
  );
};
export default Feed