
import React from "react";
import "./Login.css";
const Login = (props) => (
    <div>
        <div className="container-login100" >        
		<div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
			<form className="login100-form validate-form">
				<span className="login100-form-title p-b-37">
					Sign In
				</span>
				<p style={{color:"red"}}>{props.err}</p>
                <div className="wrap-input100 validate-input m-b-20" data-validate="Enter email">
                    <input className="input100" placeholder="email" name="email"  value={props.email}type="email" onChange={props.handleInputsChanges}/>
				<span className="focus-input100"></span>
				</div>

				<div className="wrap-input100 validate-input m-b-25" data-validate = "Enter password">
                <input className="input100" placeholder="password" name="password" value={props.password} type="password" onChange={props.handleInputsChanges}/>
					<span className="focus-input100"></span>
				</div>

				<div className="container-login100-form-btn">
					<button className="login100-form-btn" onClick={props.handleSinUpSubmit}>
						Sign In
					</button>
				</div>
				<div className="text-center p-t-57 p-b-20">
					<span className="txt1">
						Or login with
					</span>
				</div>
				<div className="flex-c p-b-112">
                    <div className="login-col">{props.socialMediaLogins}</div>
				
				</div>
				<div className="text-center">
                    <ul>
                        <li>
                            <a href="/signup" className="txt2 hov1">Sign Up</a>
                        </li>

                        <li>
                            <a href="/" className="txt2 hov1">Home</a>
                        </li>
                    </ul>
				</div>
                </form>
		    </div>
	    </div>
    </div>
);

export default Login;