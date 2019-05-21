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

import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

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
      padding: '70px 40px',
      justifyContent: 'center',
    },  
  
    buttons:{
     
      flexDirection: 'row',
      alignItems: 'left',
      justifyContent: 'center',
      
    },
  
    button1:{
     
      alignItems: 'center',
      padding: '20px 40px',
    },
   
  
  };
  
  const StyledButton = withStyles({
    root: {
      
      background: 'linear-gradient(45deg, #000000 30%, #5577FF 90%)',
      borderRadius: 10,
      border: 0,
      color: 'white',
      height: 48,
      width: '100%',
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
  

  function ButtonAppBar(props) {
    const { classes } = props;
    return (
      
      <div >
        <div className={classes.root} >
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
             </IconButton>
             <Typography variant="h6" color="inherit" className={classes.grow}>
                News
             </Typography>
             <Link to="/"><Button className={classes.logoutButton}>Log-out</Button></Link>
          
            </Toolbar>        
         </AppBar>      
       </div>
           <div className={classes.video} >
             <ReactPlayer url='https://www.youtube.com/watch?v=LCKwD1xLLNk' playing />  
            <div className={classes.buttons}>
  
              <div className={classes.button1}>
                <StyledButton>Uplaod Video</StyledButton>
              </div>
  
              <div className={classes.button1}>
                 <StyledButton>Upload image</StyledButton>
              </div>
  
              <div className={classes.button1}>
                 <StyledButton>video conversion</StyledButton>
              </div>
  
              <div className={classes.button1}>
                 <StyledButton>-----------------</StyledButton>
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