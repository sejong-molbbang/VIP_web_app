import React, { Component } from 'react'
import logo from 'image/logo.png';
import { Link } from 'react-router-dom';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends Component {
    render() {
        const { onChange, signin } = this.props;

        return (
            <div className='login-form'>
            <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                height: 100%;
                }
            `}</style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 500 }}>
                <Header as='h2' color='black' textAlign='center'>
                    <Image src={logo} /> Log-in to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                    <Form.Input
                        fluid
                        icon='user' 
                        iconPosition='left' 
                        placeholder='E-mail address'
                        name='email'
                        onChange={onChange}
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name= 'passwd'
                        onChange={onChange}
                    />

                    <Button
                     color='red' fluid size='large'
                     onClick={signin}>
                        Login
                    </Button>
                    </Segment>
                </Form>
                <Message>
                    Join or Sign up for membership!<br/> <Link to="/signup">Sign Up</Link>
                </Message>
                </Grid.Column>
            </Grid>
            </div>
        )
    }
}

export default LoginForm