import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const PostDetails = () => {
      const {postid} = useParams();
      const urls = `https://jsonplaceholder.typicode.com/posts/${postid}`
      const [details, setDetails]= useState({})
      // console.log(details.title);

      useEffect(()=>{
            fetch(urls)
            .then(res => res.json())
            .then(data => setDetails(data) )
      },[])
      return (
            <div>
           
                  <h1>Post details</h1>
                  <h1>Id : {details.id}</h1>
                  <p>Post Id  {details.postId}</p>
                  <h1>{details.title}</h1>
                  <p>{details.body}</p>
                  
                  <Link to={`/comment/${details.id}`}><button>Show Comment</button></Link>
            </div>
      );
};

export default PostDetails;