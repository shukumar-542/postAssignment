import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Post = (props) => {
      console.log(props);
      const{title,body,id} =  props.post;

      const postStyle = {
            margin:'50px',
      }

      
      return (
            <div style={postStyle}>
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               <b>Title</b> : {title}
              </Typography>
              <Typography variant="h5" component="div">
               {id}
              </Typography>
              
              <Typography variant="body2">
                {body}
                
              </Typography>

            </CardContent>

            <CardActions>
            <Link to={`/details/${id}`} style={{textDecoration:'none' }}> <Button variant="contained">Show Details</Button></Link>

            </CardActions>
          </Card>
                

                
               


            </div>

            
      );
};

export default Post;