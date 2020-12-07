import React from 'react'

export const form = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h4>Lorem ipsum placeholder text
                    here. Lorem ipsum.
                </h4>
                <div className="form-inputs">
                    <input type="text" name="email" className="form-input"
                    placeholder="Email or Mobile Number"/>
                </div>
                <div className="form-inputs">
                    <input type="text" name="name" className="form-input"
                    placeholder="Full Name"/>
                </div>
                <div className="form-inputs">
                    <input type="text" name="username" className="form-input"
                    placeholder="Username"/>
                </div>
                <div className="form-inputs">
                    <input type="password" name="password1" className="form-input"
                    placeholder="Password"/>
                </div>
                <div className="form-inputs">
                    <input type="password" name="password2" className="form-input"
                    placeholder="Confirm Password"/>
                </div>
                <button className="form-input-btn" type="submit">Sign up</button>
                <span className="form-input-login">
                    Already have an account? Log in <Link to="/SignIn">here</Link>.
                </span>
            </form>
        </div>
    )
}
