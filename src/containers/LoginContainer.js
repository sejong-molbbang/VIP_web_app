import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from 'components/Login';
import * as service from 'services'
import * as loginActions from 'store/modules/loginReducer';

class LoginContainer extends Component {

    handleLoginClick = async (e) => {
        const { LoginActions, email, password } = this.props;
        e.persist();

        await service.loginRequest(email, password, function(result) {
            LoginActions.login_result({'result' : result});
        });
    }

    handleChange = (e) => {
        const { LoginActions } = this.props;
        const { name, value } = e.target;
        LoginActions.change_value({name: name, value: value});
    }

    render() {
        const { id, password } = this.props;
        const isProcessing = false;

        return (<Login
            onChange={this.handleChange}
            signin={this.handleLoginClick} />
        );
    }
}

// props로 넣어줄 스토어 상태 값
const mapStateToProps = state => ({
    ...state.loginReducer
});

// props로 넣어줄 액션 생성 함수
const mapDispatchToProps = dispatch => ({
    LoginActions: bindActionCreators(loginActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginContainer);