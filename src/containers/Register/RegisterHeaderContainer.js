import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RegisterHeader } from 'components/Register';
import * as inputActions from 'store/modules/personalInputReducer';

class RegisterHeaderContainer extends Component {
    // 처리 함수 정의
    handleClickHome = () => {
        const { InputActions } = this.props;
        InputActions.to_home();
    }

    render() {
        const { number } = this.props;
        return <RegisterHeader number={number} onClickHome={this.handleClickHome}/>
    }
}

// props로 넣어줄 스토어 상태 값
const mapStateToProps = state => ({
    ...state.personalInputReducer
});

// props로 넣어줄 액션 생성 함수
const mapDispatchToProps = dispatch => ({
    InputActions: bindActionCreators(inputActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterHeaderContainer);