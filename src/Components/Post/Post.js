import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
      console.log(props);
      const{title,body,id} =  props.post;

      const postStyle ={
            border :'1px solid purple',
            margin :'10px',
            padding : '10px'
      }
      return (
            <div style={postStyle}>
            <h1>Id  : {id}</h1>
                <h1> Title :{title} </h1> 
                <p> Body : {body}</p>
                <Link to={`/details/${id}`}><button>Show Details</button></Link>

            </div>
      );
};

export default Post;