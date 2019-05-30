import React, {Component} from 'react'
import LoginContainer from 'containers/LoginContainer';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import FileUpload from '../upload/upload.js' ;

import ImageModal from '../modal/imagemodal.js';
import VideoModal from '../modal/videomodal.js';


import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import logo from '../image/logo.png';

const styles = {
    
    grow: {
      flexGrow: 1,
      
    },
    
    menuButton: {
     
      marginLeft: -12,
      marginRight: 20,
    },

    logoutButton:{
        color:'white',
    },
  
    video:{
      display: 'flex',
      alignItems: 'center',
      padding: '4em 6em 6em 6em',
      justifyContent: 'center',
    },  
  
    buttons:{
     
      flexDirection: 'row',
      alignItems: 'left',
      justifyContent: 'right',
    },
  
    button1:{
      alignItems: 'center',
      padding: '3em 3em 3em 3em',
      height: '2rem',
    },
    videoStyle:{
      width : '55em',
      height: '35em',
      marginRight: '10em'
    }
  
  };
  
  function ButtonAppBar(props) {
    const { classes } = props;
    return (
      
      <div >
        <div className={classes.root} >
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
             </IconButton>
             <Typography variant="h6" color="inherit" className={classes.grow}>
                 Visual Information Protector
             </Typography>
             <Link to="/"><Button className={classes.logoutButton}>Log-out</Button></Link>
          
            </Toolbar>        
         </AppBar>      
       </div>
           <div className={classes.video} >
             <ReactPlayer style={styles.videoStyle} url='https://www.youtube.com/watch?v=LCKwD1xLLNk' playing />  
              <div className={classes.buttons}>
  
                <div className={classes.button1}>
                  <VideoModal> </VideoModal>
                </div>
  
                <div className={classes.button1}>
                  <ImageModal> </ImageModal>
                </div>

                <div className={classes.button1}>
                   <button class="ui inverted green button">수작업 마스킹</button>
                </div>
  
                <div className={classes.button1}>
                  <button class="ui inverted red button">파일변환 시작</button>
                </div>
            </div>          
         </div>
      </div>
    );
  }
  
  ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ButtonAppBar);