import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Form,
    Label,
    Segment,
    Message,
  } from 'semantic-ui-react'

const style = {
    base : {
        margin:'0.5rem',
        padding:'0.5rem'
    },
    row : {
        display : 'flex',
        flexDirection : 'row',
    },
    paddinglr : {
        paddingLeft : '6%',
        paddingRight : '6%'
    }
};

class PersonalInput extends Component {

    render() {
        const { onCertificate,
              onChange, onClickSendMail,
              check, sended } = this.props;
    
        return (
            <div>
                <Form>
                    <Segment piled style={style.paddinglr}>
                        <Label style={style.base}> Email </Label>
                        { !check.email && <Label pointing='below' color='red' basic>Please enter a valid email address </Label>}
                        <Form.Input disabled={sended} onChange={onChange} name='email' fluid icon='at' iconPosition='right' placeholder='E-mail address'/>
                        <Label style={style.base}> Password </Label>
                        { !check.password && <Label pointing='below' color='red' basic>The password must be between 8 and 20 characters and it must be a mixture of numbers and alphabetic characters. </Label>}
                        <Form.Input onChange={onChange} name='password' fluid icon='lock' placeholder='Password' type='password'/>
                        <Label style={style.base}> Password Check </Label>
                        { !check.pcheck && <Label pointing='below' color='red' basic>Passwords do not match. Please check again. </Label>}
                        <Form.Input onChange={onChange} name='pcheck' fluid icon='check' placeholder='Password Check' type='password'/>
                        <Label style={style.base}> Email Authentication </Label>
                        <div>
                            <Form.Input disabled={!sended} onChange={onChange} name='certification_number' fluid icon='at' iconPosition='right' placeholder='Certification Number'/>
                            <Message style={{fontSize:'1rem'}} content="If you don't receive our mail, click 're-send' button" icon='info circle' info />
                            <Button onClick={onClickSendMail}> {sended ? 'Re-send' : 'Send email'} </Button>
                            <Button disabled={!sended} onClick={onCertificate} primary>confirm</Button>
                        </div>
                    </Segment>
                    { !check.enable_next &&
                        (<Button disabled={true} color='teal' fluid size='large'>Sign Up</Button>)}
                    { check.enable_next &&
                        (<Link to='/signup/2'><Button disabled={false} onClick={this.handleSubmit} color='teal' fluid size='large'>Sign Up</Button></Link>) }
                </Form>
            </div>
        );
    };
}

export default PersonalInput;