import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { ButtonBase, Divider, Typography } from '@material-ui/core';
import Auth from './auth';
import Star from '@material-ui/icons/Star'
import background from '../images/backlog.png'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DateRange from '@material-ui/icons/DateRange'
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import Language from '@material-ui/icons/Language'
import QueryBuilder from '@material-ui/icons/QueryBuilder'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const courseData = [1, 2]

const useStyles = makeStyles((theme) => ({
    root: {

        fontFamily: 'roboto',


    },
    heros: {
        textAlign: 'left',
        display: 'flex',
        fontFamily: 'roboto',
        color: 'black',
        height: 490,

        backgroundColor: 'rgb(248,248,248)',



        [theme.breakpoints.down('sm')]: {
            paddingLeft: 20,
            flexWrap: 'wrap'

        },

        fontFamily: 'roboto'

    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        display: 'flex',
        width: '100%',

        justifyContent: 'center',
        padding: '10px 20px 50px 30px',
        fontFamily: 'roboto',
        gap: '45px'


    },
    cardContainer: {
        width: '100%',
        marginTop: 30,
        fontFamily: 'roboto',
        [theme.breakpoints.down('md')]: {
            marginTop: 10,


        },



    },
    category: {
        width: 40,
        height: 40,
        backgroundColor: '#FDB2D7',
        borderRadius: 30,
        borderWidth: 0,
        boxShadow: '1px 1px #888888',
        fontFamily: 'roboto'

    },
    blog: {
        width: '100%',
        justifyContent: 'center',
        marginLeft: 100,

    },
    adContainer: {
        height: '300px',
        background: 'Gray'
    },
    slider: {
        padding: '100px 60px',
        height: 300,
        fontFamily: 'roboto',
        [theme.breakpoints.down('md')]: {
            padding: '30px 5px'


        },
    },
    background: {
        width: 600,
        height: 300,
        marginLeft: 275,
        backgroundSize: 'cover',
        [theme.breakpoints.down('sm')]: {
            display: 'none'



        },

    },
    appbar: {
        width: '50%',
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '20px 0',
    },
    courseTitle: {
        width: '100px'
    },
    courseDetails: {
        width: '900px',
        textAlign: 'initial',
        gap: 20

    },






}));

const CoursePage = () => {
    let data = useLocation();

    const classes = useStyles();
    const quiz = data.state.quiz
    console.log(quiz)

    return (

        <Grid container xs={12}>
            <Auth />
            <Grid item component="div" display="inline" className={classes.heros} xs={12} md={12} lg={12}>
                <Grid item className={classes.slider}>
                    <h3 style={{ color: '#000', fontFamily: 'roboto' }}><Typography variant='h5' fontFamily='roboto'>Online Quiz Courses Catalogue</Typography></h3>
                    <div style={{ display: 'flex' }}>
                        <Star style={{ color: 'gold' }} /><Star style={{ color: 'gold' }} /><Star style={{ color: 'gold' }} /><Star style={{ color: 'gold' }} /><Star style={{ color: 'gold' }} />
                        <Typography fontFamily='roboto' style={{ marginBottom: 20, marginLeft: 10, fontSize: 16 }}>800 Evaluated </Typography>
                    </div>
                    <Typography fontFamily='roboto' style={{ marginBottom: 20 }}>1000 Already Registred </Typography>
                    <div style={{ display: 'flex' }}>
                        <Typography fontFamily='roboto' style={{ marginBottom: 20, fontWeight: 'bold' }}>Instractor :</Typography>
                        <Typography fontFamily='roboto' style={{ marginBottom: 20, marginLeft: 10 }}>Mr Adam Smith </Typography>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Typography fontFamily='roboto' style={{ marginBottom: 20, fontWeight: 'bold' }}>Subtitles :</Typography>
                        <Typography fontFamily='roboto' style={{ marginBottom: 20, marginLeft: 10 }}>English , French </Typography>
                    </div>
                    <Link style={{ textDecoration: 'none', fontFamily: 'roboto' }} to={{
                        pathname: "/courses",
                        state:  quiz 
                    }}>
                    <button class ="button button4" style={{width: 200,height: 70, backgroundColor: '#F0A8E5',color: '#fff',fontWeight: 'bold'}}>Free Register</button>
                   </Link>
                    <Typography fontFamily='roboto' style={{marginBottom: 20,marginLeft: 10,marginTop: 30,fontSize: 12 }}>Finantial supporting available</Typography>
                </Grid>
                <Grid item className={classes.background}>
                    <img src={background} style={{ width: 800, height: 490, borderRadius: ' 10% 0 10%  0' }} />
                </Grid>
            </Grid>
            <Grid container xs={12} >
                <div className={classes.appbar}>
                    <Typography>About us</Typography>
                    <Typography>Instractors</Typography>
                    <Typography>Planning</Typography>
                    <Typography>Avis</Typography>
                    <Typography>Registring Option</Typography>
                    <Typography>FAQ</Typography>
                </div>
                <Divider />
                <Grid Container style={{ display: 'flex', gap: 20 }}>
                    <Grid item style={{ textAlign: 'initial', padding: '20px 50px', width: '70%', gap: 20 }}>
                        <Typography variant='h5'> About us</Typography>
                        <Typography variant='body2' style={{ fontWeight: 'bold' }}> 103 Recently Consulted</Typography>
                        <Typography variant='body1' style={{ width: '90%' }}> It is a long established fact that a reader will  distracted by the readable
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            of content of  page when looking at its layout.</Typography>


                    </Grid>
                    <Grid Item >
                        <List sx={{ width: '100%', bgcolor: 'gray' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <DateRange />
                                </ListItemAvatar>
                                <ListItemText primary="Dates limites flexibles" secondary="Jan 9, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <VerifiedUser />
                                </ListItemAvatar>
                                <ListItemText primary="Certificat partageable" secondary="Jan 7, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <QueryBuilder />
                                </ListItemAvatar>
                                <ListItemText primary="100 % en ligne" secondary="July 20, 2014" />
                            </ListItem>
                        </List>
                    </Grid>


                </Grid>
                <Grid Container xs={12} >
                    <Grid Item >
                        <div >
                            <Typography variant='h5' style={{ textAlign: 'center' }}>
                                Course's Planning
                            </Typography>
                        </div>
                    </Grid>

                </Grid>
                {courseData.map((course, key) => (
                    <Grid Container xs={12} style={{ display: 'flex', justifyContent: 'space-between', padding: '50px 150px' }}>


                        <Grid Item classeName={classes.courseTitle} >
                        <Link style={{ textDecoration: 'none', fontFamily: 'roboto' }} to={{
                        pathname: "/courses",
                        state:  {quiz,course} 
                    }}>
                            <Typography variant='body1'>chapter</Typography>
                            <Typography variant='h4' style={{ fontSize: 79 }}>{course}</Typography>
                      </Link>
                        </Grid>
                        <Grid Item className={classes.courseDetails}>
                            <div style={{ display: 'flex', paddingRight: 200, gap: 10, margin: 10 }}>
                                <QueryBuilder style={{ color: '#FDB2D7' }} />
                                <Typography>2 hours to finish</Typography>
                            </div>
                            <Typography style={{ margin: 10 }}>Worldview</Typography>
                            <Typography style={{ margin: 10 }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. </Typography>

                        </Grid>


                    </Grid>
                ))}

            </Grid>

        </Grid>
    )
}

export default CoursePage
