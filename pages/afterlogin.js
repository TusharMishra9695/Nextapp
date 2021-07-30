import React,{useEffect,useState} from "react"; 
import axios from 'axios'
import {Typography,List,ListItem,Button,Container, Card, CardHeader, CardContent, CardMedia, CardActionArea} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },

}));

export const getStaticProps = async () =>{
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return{
    props:{ninjas:data}
  }
}
//https://fakestoreapi.com/products


 const Afterlogin=({ninjas})=>{


  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);


  const handleChange = () => {
    setChecked((prev) => !prev);
  };


 

  return(<div>
{ninjas.map(ninja =>{
return(

  <Card className="card">
    <center>
    <CardActionArea>
<CardContent>
  <Typography variant="h5" color="primary" >{ninja.id} {ninja.category}</Typography>
</CardContent>
<img src={ninja.image} alt="error " className="Handleimg" />
<CardContent>
<Typography variant="h5" color="primary" >{ninja.title} </Typography>
<div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Get Details"
      />
      <div className={classes.container}>
     
        <Collapse in={checked} >
          <Paper elevation={4} className={classes.paper}>
     <Typography variant="h6" color="primary">Price   ({ninja.price}) || {ninja.description}</Typography>  
          </Paper>
        </Collapse>
      </div>
    </div>
</CardContent>
</CardActionArea>
</center>
  </Card>
)
})}

  </div>)
}


export default Afterlogin;
