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
import { Star } from '@material-ui/icons';

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
    backgroundColor:'#F5E1EC'

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
 console.log('con',value.chapters)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <Link style={{textDecoration:'none',fontFamily:'roboto'}} to={{
    pathname: `/course/:${value.Course}`,
    state:  value.Course
  }}>
      <CardMedia
        
        className={classes.media}
        
        title="Paella dish"
        
      />
      <div style={{position:'relative',bottom:'89px',color:'#000',height:0,display:'flex',justifyContent:'space-between',textAlign:'start', fontFamily:'roboto',}}>
        <div>
      <Typography style={{fontSize:19,fontWeight:'bold',padding:9,fontFamily:'roboto'}}>{value.Course}</Typography>
      <Typography style={{fontSize:14,padding:9,color:'#000',fontFamily:'roboto'}}>{value.students} Students</Typography>
      </div>
      <Typography style={{fontSize:19,padding:9,color:'#000',fontFamily:'roboto'}}>4.6 <Star /> </Typography>
      </div>
      
      
       
        
      </Link>
     
    </Card>
  );
}
