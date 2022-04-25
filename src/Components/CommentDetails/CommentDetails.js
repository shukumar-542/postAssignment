import React from 'react';

const CommentDetails = (props) => {
      const {name,  email,body} = props.comment
      return (
            <div>
                  <p>Name : {name}</p>
                  <p>Email: {email}</p>
                  <p> Comment : {body}</p>
            </div>
      );
};

export default CommentDetails;