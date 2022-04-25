import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
      const [posts , setpost] = useState([])
     useEffect(()=>{
           fetch('https://jsonplaceholder.typicode.com/posts')
           .then(res => res.json())
           .then(data =>  setpost(data))
     },[]) 
      return (
            <div>
                  {
                        posts.map(post => <Post post= {post}></Post>)
                  }
            </div>
      );
};

export default Home;