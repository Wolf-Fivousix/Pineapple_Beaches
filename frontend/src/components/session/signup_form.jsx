import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import LogoNav from '../nav/logonav';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.setErrorArray = this.setErrorArray.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    demoUser(e) {
        e.preventDefault();

        const demo = {
            username: "DemoUser",
            password: "password"
        }

        this.props.demoUser(demo);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    // Once the user refreshes it clears errors
    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history);
    }
    
    // Set error array to change length of form height
    setErrorArray() {
        let errorArray = [];

        Object.keys(this.state.errors).map((error) => (
            errorArray.push(this.state.errors[error])
        ))

        return errorArray;
    }

    renderErrors() {
        return (
            <ul className="error-ul">
                {Object.keys(this.state.errors).map((error, i) => (
                    <li className="error-signup" key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        if (this.setErrorArray().length > 0) {
            return (
                <div className="signup-content-container">
                    <LogoNav />
                    <div className="signup-form-container">
                        <form className="signup-form-errors" onSubmit={this.handleSubmit}>
                            <div className="s-form-content">
                                <Link className="back-arrow" to="/">&#8592;</Link>
                                <h1 className="signup-label">Sign Up</h1>
                                <br/>
                                <input className="signup-input" type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    placeholder="Username"
                                />
                                <br />
                                <input className="signup-input" type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                />
                                <br />
                                <input className="signup-input" type="password"
                                    value={this.state.password2}
                                    onChange={this.update('password2')}
                                    placeholder="Confirm Password"
                                />
                                <br />
                                <input className="signup-submit" type="submit" value="Sign Up" />
                                <div className="signup-bottom-content">
                                    <h3 className="already-account">Already have an account?</h3>
                                    <Link className="to-login" to="/login">Log In Here!</Link>
                                    <button className="demo-but" onClick={this.demoUser}>Demo Login</button>
                                </div>
                                <br/>
                                {this.renderErrors()}
                            </div>
                        </form>
                    </div>
                    <h1 className="trade-mark-sessions">®</h1>
                </div>
            );
        } else {
            return (
                <div className="signup-content-container">
                    <LogoNav />
                    <div className="signup-form-container">
                        <form className="signup-form" onSubmit={this.handleSubmit}>
                            <div className="s-form-content">
                                <Link className="back-arrow" to="/">&#8592;</Link>
                                <h1 className="signup-label">Sign Up</h1>
                                <br/>
                                <input className="signup-input" type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    placeholder="Username"
                                />
                                <br />
                                <input className="signup-input" type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                />
                                <br />
                                <input className="signup-input" type="password"
                                    value={this.state.password2}
                                    onChange={this.update('password2')}
                                    placeholder="Confirm Password"
                                />
                                <br />
                                <input className="signup-submit" type="submit" value="Sign Up" />
                                <div className="signup-bottom-content">
                                    <h3 className="already-account">Already have an account?</h3>
                                    <Link className="to-login" to="/login">Log In Here!</Link>
                                    <button className="demo-but" onClick={this.demoUser}>Demo Login</button>
                                </div>
                                <br/>
                            </div>
                        </form>
                    </div>
                    <h1 className="trade-mark-sessions">®</h1>
                </div>
            );
        }
    }
}

export default withRouter(SignupForm);