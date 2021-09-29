import React, {useState, useEffect, useContext} from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link } from 'react-router-dom';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar'
import {useHistory} from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/auth';
import { AuthContext } from '../context/Context';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
     
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      display: 'flex !important',
      gap: 3,
      color:'gray',
      
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        
      },
    },
    search: {
      position: 'relative',
      fontFamily:'roboto',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      fontFamily:'roboto'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
      fontFamily:'roboto'
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
      
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    orange:{
      background:'#F3105F',
      color:'#fff'
    },
    appMenu:{
      padding:'15px 7px 5px 10px'
    },
    menu:{
      color:'gray',
      "&:hover": {
        background: "#F3105F",
        color:'#fff'
      },
    }
  }));
  const drawerWidth = 240;
  
  export default function Auth() {
    const{currentUser}=useContext(AuthContext)
     const history=useHistory();
    const classes = useStyles();
    const [user, setUser] = useState(currentUser)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    console.log(user)
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    

    const handelLogout= async()=>{
      try{
        await firebase.auth().signOut().then((result) =>
           {history.push('/login')})
                  
                }
        catch (error) {
          alert(error);}

    }
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };

    const [userui, setUserui] = useState(user);
    //fetch user

   
    const drawer = (
      <div>
      
     
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
             
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose} onClick={()=>handelLogout()}><Typography font='roboto'>Signout</Typography> </MenuItem>
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="mails" color="inherit">
            <Badge  color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  
    return (
      <div className={classes.grow}>
        <AppBar position="static" style={{paddingLeft:30,paddingRight:30}}>
          <Toolbar>
              {user?(
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            
            </IconButton>):(<div></div>)}
            <Link to="/welcome" style={{textDecoration:'none'}}>
            <Typography fontFamily='roboto' className={classes.title} variant="h6" noWrap>
              Learn <div style={{color:'#F3105F'}}>Quiz</div>
            </Typography>
            </Link>
           
            <div className={classes.grow} />
            {user?(
            <div className={classes.sectionDesktop}>
            
            <Link className={classes.menu} to="/course" style={{ textDecoration: 'none' }} ><div className={classes.appMenu}>Course</div></Link>
            <Link className={classes.menu}  style={{ textDecoration: 'none' }} ><div className={classes.appMenu}>About us</div></Link>
            <Link className={classes.menu} style={{ textDecoration: 'none' }} ><div className={classes.appMenu}>Blog</div></Link>
               
             
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
               <Avatar className={classes.orange} src='../images/user.png' />
              <Typography fontFamily='roboto' style={{fontSize:14,paddingLeft:10}}> hello..!<br /> {user.displayName}</Typography>
              </IconButton>
            </div>):(<div></div>)}
            {user?(
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                
              >
                <MoreIcon />
              </IconButton>
            </div>):<dic></dic>}
          </Toolbar>
        </AppBar>
        
        {renderMobileMenu}
        {renderMenu}
      
        
        
      </div>
    );
  }