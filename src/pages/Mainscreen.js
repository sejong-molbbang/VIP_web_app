import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Container, Divider, Dropdown, Grid, Header, Image,  List, Menu, Segment,} from 'semantic-ui-react'
import logo from 'image/logo.png';
import ReactPlayer from 'react-player'
import FileUpload from 'upload/upload.js' ;
import ImageModal from 'modal/imagemodal.js';
import VideoModal from 'modal/videomodal.js';


class Mainscreen extends Component {
    state = {
      logout : false,
    }
    render() {
        return (
            <div>
              <Menu fixed='top' inverted>
                <Container>
                  <Menu.Item as='a' header >
                    <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                    VIP WEB
                  </Menu.Item>
                  <Menu.Item as='a'>Personal Infomation Protect</Menu.Item>
                  <button class="negative ui button" style={{ marginLeft: '63.6em' }}>Logout</button>
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
                          <VideoModal></VideoModal>
                       </div>
          
                       <div class="column">
                          <ImageModal></ImageModal>
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

