import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PersonalInput } from 'components/Register';
import * as inputActions from 'store/modules/personalInputReducer';

class PersonalInputContainer extends Component {
    // 처리 함수 정의
    handleChange = (e) => {
        const { InputActions } = this.props;
        const { name, value} = e.target;
        InputActions.change_value({name: name, value: value});
    }

    handleSendMail = (e) => {
        const { InputActions } = this.props;
        InputActions.send_email();
    }

    handleCertificate = (e) => {
        const { InputActions } = this.props;
        InputActions.certification();
    }

    render() {
        const {certification_number, check, sended} = this.props;

        return <PersonalInput
            onChange={this.handleChange}
            onClickSendMail={this.handleSendMail}
            onCertificate = {this.handleCertificate}
            certification_number={certification_number}
            check={check} sended={sended} />;
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
  )(PersonalInputContainer);