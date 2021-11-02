import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AvatarLetter from '../Avatar/AvatarLetter'

export default function ClassCard({classItem}) {
    let {name} = classItem
  return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card  style={{
                    minHeight: 300,
                    position: 'relative'
                }}>
            <CardMedia
                component="img"
                alt="backgroundClass"
                height="100"
                image="/static/images/backgroundClass.jpg"
                
            >
            </CardMedia>
            <AvatarLetter/>
            <CardContent style={{paddingTop:40}}>
                <Typography tyle={{textAlign:"start"}} gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography style={{textAlign:"start"}} variant="body2" color="text.secondary">
                Tên giáo viên
                </Typography>
                <Typography style={{textAlign:"start"}}>
                    Phạm Hoàng Long
                </Typography>
            </CardContent>
        </Card>
      </Grid>
  );
}