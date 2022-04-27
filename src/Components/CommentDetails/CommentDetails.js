import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CommentDetails = (props) => {
      const {name,  email,body} = props.comment
      return (
            <div>
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               <b>Name :</b> : {name}
              </Typography>
              <Typography variant="h5" component="div">
               {email}
              </Typography>
              
              <Typography variant="body2">
                {body}
                
              </Typography>

            </CardContent>

            <CardActions>
            </CardActions>
          </Card>

            </div>
      );
};

export default CommentDetails;