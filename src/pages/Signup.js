import React, {Component} from 'react';
import {PersonalInputContainer} from 'containers/Register';
import {RegisterHeaderContainer} from 'containers/Register';
import {CompleteRegister} from 'components/Register';

import {
  Container,
} from 'semantic-ui-react'

const style = {
    h1: {
      marginTop: '3em',
    },
    h2: {
      margin: '4em 0em 2em',
    },
    h3: {
      marginTop: '0.5em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
    comp: {
        margin:'0.5rem',
        padding:'0.5rem'
    },
    base: {
        marginBottom: '2rem',
    }
}

class Signup extends Component {

    render() {
        const { match } = this.props;
        const number = match.params.number;

        return (
            <div>
                <RegisterHeaderContainer number={number} />
                <Container style={style.base}>
                    { (number === '1' || number === undefined) && <PersonalInputContainer />}
                    { (number === '2') && <CompleteRegister/>}
                </Container>
            </div>
        );
    };
}

export default Signup;