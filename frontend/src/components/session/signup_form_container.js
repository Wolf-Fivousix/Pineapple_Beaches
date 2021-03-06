import { connect } from 'react-redux';
import { signup, clearErrors, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session,
        formType: 'Sign Up'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)),
        demoUser: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);