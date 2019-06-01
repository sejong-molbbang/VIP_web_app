import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Container, Divider, Dropdown, Grid, Header, Image,  List, Menu, Segment, Label} from 'semantic-ui-react'
import logo from 'image/logo.png';
import ReactPlayer from 'react-player'
import FileUpload from 'upload/upload.js' ;
import {ImageUploadModal} from 'components/Modal';
import {VideoUploadModal} from 'components/Modal';
import  { Redirect } from 'react-router-dom'
import * as service from 'services';
import { Link } from 'react-router-dom';  

const style = {
  header: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  logout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}
class Mainscreen extends Component {
    state = {
      logout : false,
    }
    handleLogout = (e) => {
      this.setState({
        logout: true,
      });
      service.logoutRequest();
    }
    
    render() {
        const { location } = this.props;

        return (
            <div>
              {this.state.logout && <Redirect to='/'/>}
              <Menu fixed='top' inverted>
              <Container style={style.header}>
                <Menu.Item as='a' header >
                  <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                  VIP WEB
                  <Label color={'red'}>Personal Infomation Protect</Label>
                </Menu.Item>
                <font color='white' style={style.logout}>{location.state}</font>
                <Link to='/' id='logout' onClick={this.handleLogout} class="negative ui button" style={style.logout} ><label>Logout</label></Link>
              </Container>
              </Menu>
          
              <Container text style={{ marginTop: '5em'}}>
          
               <div>
                     <ReactPlayer text style={{ marginTop: '7em'}}  url='https://www.youtube.com/watch?v=LCKwD1xLLNk' playing />  
                    
                     <div class="ui toggle checkbox" style={{ marginTop: '3em'}}>
                          <input type="checkbox" name="public"/>
                          <label >얼굴만 인식</label>
                     </div>
                    
                     <div class="ui four column doubling stackable grid container" style={{ marginTop: '2em'}}>
          
                       <div class="column">
                          <VideoUploadModal email={location.state}/>
                       </div>
          
                       <div class="column">
                          <ImageUploadModal email={location.state}/>
                       </div>
          
                       <div class="column">
                          <button class="ui inverted green button" style={{ marginLeft: '-1.5em' }} >수작업 마스킹</button>
                       </div>
          
                       <div class="column">
                          <button class="ui inverted red button" style={{ marginLeft: '-1.5em' }} >파일변환 시작</button>
                       </div>           
          
                      </div>  
               </div>
              </Container>   
            </div>
        )
    }
}

export default Mainscreen

