import logo from '../imgs_svgs/logo.svg';
import '../App.css';
import '../Form.css';

import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {

	return (
		<div className="form-container-login">
            <form className="form">
				<img src={logo} alt=""/>
                <div className="form-inputs">
                    <input type="text" name="username" className="form-input"
                    placeholder="Username or Email"/>
                </div>
                <div className="form-inputs">
                    <input type="password" name="password" className="form-input"
                    placeholder="Password"/>
                </div>
				<button className="form-input-btn" type="submit">Log in</button>
                <span className="form-input-other">
                    Don't have an account?<br/>
					Register <Link to="/Register">here</Link>.
                </span>
            </form>
		</div>
	);
};

export default SignIn;
