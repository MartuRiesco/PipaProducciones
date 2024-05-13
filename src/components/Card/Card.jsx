import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './styles.css'
import {CardActionArea, } from '@mui/material';

 function CardProyect ({name, img}) {
  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='texto-title'>
            {name}
          </Typography>
         {/*  <Typography variant="body2"  className='texto'>
            {text}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
} export default CardProyect