import React, { Component } from 'react';
import Login from 'components/Login';
import { connect } from 'react-redux';

class LoginContainer extends Component {

  render() {
    const { id, password } = this.props;

    return (
      <Login/>
    );
  }
}

// props로 넣어줄 스토어 상태 값
const mapStateToProps = state => ({
  ...state.login
});

// props로 넣어줄 액션 생성 함수
const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);