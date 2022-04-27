import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetails from '../CommentDetails/CommentDetails';

const Comment = () => {
      const {commentId} =  useParams()

      const urls =`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`
      const[comment, setComment ] = useState([])
      console.log(comment);

      useEffect(()=>{
            fetch(urls)
            .then(res => res.json())
            .then(data => setComment(data))
      },[])
      return (
            <div>
                  
                  {
                        comment.map(com => <CommentDetails comment ={com}></CommentDetails>)
                  }
            </div>
      );
};

export default Comment;