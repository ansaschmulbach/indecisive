import useForm from '../components/useForm.js';
import validate from '../components/validateInfo.js';
import logo from '../imgs_svgs/logo.svg';
import '../App.css';
import '../Form.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

	const { handleChange, values, handleSubmit, errors } = useForm(validate);

	return (
		<div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
				<img src={logo} alt=""/>
                <div className="form-inputs">
                    <input type="text" name="email" className="form-input"
                    placeholder="Email" value={values.email} onChange={handleChange}/>
					{errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <input type="text" name="name" className="form-input"
                    placeholder="Full Name" value={values.name} onChange={handleChange}/>
					{errors.name && <p>{errors.name}</p>}
				</div>
                <div className="form-inputs">
                    <input type="text" name="username" className="form-input"
                    placeholder="Username" value={values.username} onChange={handleChange}/>
					{errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <input type="password" name="password1" className="form-input"
                    placeholder="Password" value={values.password1} onChange={handleChange}/>
					{errors.password1 && <p>{errors.password1}</p>}
                </div>
                <div className="form-inputs">
                    <input type="password" name="password2" className="form-input"
                    placeholder="Confirm Password" value={values.password2} onChange={handleChange}/>
					{errors.password2 && <p>{errors.password2}</p>}
                </div>
				<button className="form-input-btn" type="submit">Sign up</button>
                <span className="form-input-other">
                    Already have an account?<br/>
					Log in <Link to="/SignIn">here</Link>.
                </span>
            </form>
		</div>
	);
};

export default Register;
