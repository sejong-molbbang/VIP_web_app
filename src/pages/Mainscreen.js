import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Container, Progress, Image, Modal, Button, Menu, Label} from 'semantic-ui-react'
import logo from 'image/logo.png';
import screen from 'image/video_screen.png'
import ReactPlayer from 'react-player'
import FileUpload from 'upload/upload.js' ;
import {ImageUploadModal} from 'components/Modal';
import {VideoUploadModal} from 'components/Modal';
import  { Redirect } from 'react-router-dom'
import * as service from 'services';
import { Link } from 'react-router-dom';  
import { SSL_OP_EPHEMERAL_RSA } from 'constants';

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
      images: [],
      video: "",
      converting: false,
      open: false,
      only_face : false,
      status: 0,
    }

    show = () => this.setState({open: true, converting:false})
    close = () => this.setState({open: false})

    handleLogout = (e) => {
      this.setState({
        logout: true,
      });
      service.logoutRequest();
    }

    getImageUrl = (data) => {
      const { images } = this.state;
      this.setState({
        ...this.state,
        images: images.concat(data.urls)
      });
    }

    getVideoUrl = (data) => {
      const { video } = this.state;
      this.setState({
        ...this.state,
        video: data.url,
      });
    }

    timer = null;

    handleMasking = async (e) => {
      const { video, images, converting, only_face, success, error } = this.state;
      const { location } = this.props;
      
      this.setState({
        ...this.state,
        converting: true,
        status: 0,
      });
      await service.maskingRequest(video, images, location.state, only_face, function(result, url) {
        if (result == 'not choose video') {
          this.show();
        }
        else if(result == 'complete') {
          this.setState({
            ...this.state,
            converting: false,
            status: 1,
            video: url,
          })
        }
        else {
          this.setState({
            ...this.state,
            converting:false,
            status:2
          })
        }
      }.bind(this));
    }

    handleChangeCheck = (e) => {
      this.setState({
        only_face:  e.target.checked
      })
    }
    
    render() {
        const { location } = this.props;
        const { open, video, converting, status } = this.state;
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
                    { (video == "") && <Image style={{ marginTop: '7em'}} src={screen}/>}
                    { (video != "") &&
                      <ReactPlayer controls={true} style={{ marginTop: '7em'}} text url={'http://localhost:8000'+ video} playing /> }
                      <div class="ui toggle checkbox" style={{ marginTop: '3em', marginRight:'1em'}}>
                          <input type="checkbox" name="public" checked={this.state.only_face} onChange={this.handleChangeCheck}/>
                          <label >얼굴만 인식</label>
                     </div>
                      {converting && <Button color='blue' loading>진행 중</Button>}
                      {(status == 1) && <Button color='green'>완료!</Button>}
                      {(status == 2) && <Button color='red'>오류로 중단됨</Button>}
                                        
                     <div class="ui four column doubling stackable grid container" style={{ marginTop: '2em'}}>
          
                       <div class="column">
                          <VideoUploadModal email={location.state} handler={this.getVideoUrl}/>
                       </div>
          
                       <div class="column">
                          <ImageUploadModal email={location.state} handler={this.getImageUrl}/>
                       </div>
          
                       <div class="column">
                          <button class="ui inverted green button" style={{ marginLeft: '-1.5em' }} >수작업 마스킹</button>
                       </div>
          
                       <div class="column">
                          <button class="ui inverted red button" onClick={this.handleMasking} style={{ marginLeft: '-1.5em' }} >자동 마스킹 시작</button>

                          <Modal size={'mini'} open={open} onClose={this.close}>
                            <Modal.Header>경고!</Modal.Header>
                            <Modal.Content>
                              <p>마스킹할 영상을 업로드해주세요.</p>
                            </Modal.Content>
                            <Modal.Actions>
                              <Button positive icon='checkmark' labelPosition='right' content='확인' onClick={this.close}/>
                            </Modal.Actions>
                          </Modal>
                       </div>           
          
                      </div>  
               </div>
              </Container>
            </div>
        )
    }
}

export default Mainscreen

