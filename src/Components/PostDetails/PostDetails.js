import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


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
      const postDetailsStyle ={
            margin: "50px",
            padding: "20px"
      }
      return (
            <div style={postDetailsStyle}>
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               <b>Title</b> : {details.title}
              </Typography>
              <Typography variant="h5" component="div">
               {details.id}
              </Typography>
              
              <Typography variant="body2">
                {details.body}
                
              </Typography>

            </CardContent>

            <CardActions>
           
                  <Link to={`/comment/${details.id}`} style={{textDecoration:'none' }}><Button variant='contained'>Show Comment</Button></Link>
                  </CardActions>
          </Card>
            </div>
      );
};

export default PostDetails;