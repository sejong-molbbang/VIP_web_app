import React, { Component } from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';

class CompleteRegister extends Component {

    style = {
        display: 'flex',
        justifyContent: 'center',
        margin:'2rem'
    }

    render () {
        return (
            <div>
                <Header as='h1' icon textAlign='center'>
                    <Icon name='users' circular/>
                    <Header.Content>Congratulations!</Header.Content>
                </Header>
                <Header as='h2' textAlign='center'>
                     From now on, protect personal infomation in video
                </Header>

                <a  style={this.style} href='/'><Button size='large' color='red'>Home</Button></a>
                
            </div>
        )
    }
}

export default CompleteRegister;