import React, { useEffect,useContext,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Context';
import app from '../configs/authMethod';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 245,
    margin:'5px 0px',
    fontFamily:'roboto',
  },
  media: {
    height: 200,
    fontFamily:'roboto',
    width:200,
    paddingTop: '56.25%', // 16:9
    position:'relative',
    textAlign: 'center',
    color: 'white',

  },
  expand: {
    transform: 'rotate(0deg)',
    fontFamily:'roboto',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    fontFamily:'roboto',
    transform: 'rotate(180deg)',
  },
  avatar: {
    fontFamily:'roboto',
    backgroundColor: red[500],
  },
}));

export default function QCard({value}) {
  const [Score, setScore] = useState(null)
  const classes = useStyles();
  const {currentUser}=useContext(AuthContext)
 
  const [expanded, setExpanded] = React.useState(false);
  console.log('quizkalba',value.quiz)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <Link style={{textDecoration:'none',fontFamily:'roboto'}} to={{
    pathname: "/courses",
    state: { quiz:value.quiz}
  }}>
      <CardMedia
        
        className={classes.media}
        image={value.image}
        title="Paella dish"
        
      />
      <div style={{position:'relative',bottom:'55px',color:'#fff',height:0,display:'flex',justifyContent:'space-between',textAlign:'start', fontFamily:'roboto',}}>
        <div>
      <p style={{fontSize:14,fontWeight:'bold',padding:9,fontFamily:'roboto'}}>{value.title}</p>
      <p style={{fontSize:14,padding:9,fontFamily:'roboto'}}>{value.students} Students</p>
      </div>
      <p style={{fontSize:14,padding:9,fontFamily:'roboto'}}>{value.rating}</p>
      </div>
      
      
       
        
      </Link>
     
    </Card>
  );
}
