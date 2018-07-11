
import React, { Component } from 'react';
import firebase from "firebase";
// import axios from "axios";
import "./SignUp.css";
import Navbar from "../Navbar";

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignedIn: false,
            username: "",
            email: "",
            profileImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAaqSURBVHhe7Z11qC1VFIev3YHdoqiIPgMbUbETE8EEC2xB7ABFxEIUFBXFeCaKqAiKgV3YgQGiqKio2N35/ZDB9Zb7vHvOmdjn3r0++OD98ZjZZ83cmR1rrxkLgiAIgiAIgiRz4zK4Bm6AU3ApnBODllGQd8YL8UH8Av/u4R/4Cl6Ku+IsGDTExngb/oip4Pfj+7gnBjVYDx/DVICH9SqcCYMB0OPlLPwdU0G1fopv4jP4AL6MH+BvmPr/8lbcHOMx1gd6T9yDqUDqvaC/mBNRj7EFsRdz4dZ4Cf6MqeN9jefjohgkmA2fQB84BfRiXBaHYWl8Ff1xK3/CgzFwXI4+WM/iKliXJfAb9Me3XokzYAC7oQ/QvTgHNoUeY+vgUfgw+vPJc7B4Zsa30AbmJdQjrE02xHfRnlduhkVzANqA/IorYxcsjG+jPf8bWHTX+HG0AVHPqEv0jvLd5B2wSDQP9RdWgdC/l8OuuQztBbkDi2Q/tIFQtzcHmpy07fgWi3xsXYE2EKdjLjTfZduyFhaHHwhuj7m4GW1b9sXi8HflipiLM9G25TQsDj+BODvm4nC0bSlykGgDIHNyGNq2aHGrKGZEG4AfMCf+gqgrXBx2DKIRek7igoCfgW1yMnFQzkDblpxd8Gy8gzYIi2MurkPblgOxOB5FGwSl8uTCr99rxbE4rkcbhJyZIR+hbUvOMVE2tD5ug6DneA4WQ9sOzWWpF1gcW6INhFYJc6BkOtuOh7BIlDliA6FsxBych7Yd52Kx+J7WCtg1L6JtQ5Ev9Aqlidpg7IVdoowUO0BVWlDO8VBWlHZzH9oLohysLjkI7fk1Az0rFsnuaIMhlaLTJVejb8NJWCTKx7WBuAm156NLlOPr10KUH1wkX6ENhDbb5EBjji/RtkVjk+Lwk4s5n91+9VIZMcXhg7A25kBZ98qur9qhXtc8WBx3ob0gh2AONkHbjvewSI5FG4inMQe+p3UtFsny+CfaYFyDR+Cw+0H6ZV48FDVtYh9XMmc6UnZuQRuMSgWrTTbC1Hm1La7ofSLqXuqZ7QNzAbbJ/ujPqWn3IjMWPRoMHo82OE9im/gdW1rCjf2GBg3O7LhE+9K1mactVFjAXpDVMXD4HbhtvVzVmbAzvLoRilwhHI9T0F6QO7ENzkZ7Ho2HggTarGO7wcr9bXp+S5OJPqFhbwx6kJoBbhI/GNUEZ84k75FnF7QBk1tgE6gXpa6tPXbb3etJwf1og/YZqjRTnQGbNnc+h/a4SqqYH4NxUJLaL2iDJ+fDYUmV7VCCddAnetH6DT0L4LD4CzIVo1TTgDS5aKSZZHus1TAYkCYviK8IFBdkCOKCjBh+AFcn8eAFtMdaE4MB8WOGOuvcfv+H1kOCAbEBlHW4G+2xii0wMyz6a7AB/A7r4Cs17IHBAPjCNJ9gHVQi1h6v2ESGYVAP6HO0AbwB67AP2uNpPUQXPRiHbVFzVzZ4KjC2KtZBq4+q8WuPq2yTUzFG7Ak0xlB+lF3JqzwBm2BdTJUsVyFmJcsFoLVsXYheBY9VfL9JdkKfh1WpvYU7YnHLufrBmk5XAFKBkXpMHYNt5EhtheokpM4rVRjzSJz0+b1aINK6eSoPy6oysetjm2jUr9qKqfNXamCqqkB1318jx6aoDEUVmEn98ErV71VJiy4fGWpbP19h0P9RYYMJW8RfDVeZPKVmpn5gpV7i2me4HeZ8dmtua3rvskrtrjoOlRs8IdAzX3eSL1Ds1dcJLsKVcJRYCE/GVNVrq3ZcKWFipBMkVG71eUz9gMqnUAOyUd96rL/WbfB2nN73SLREMHLzYhp0qWhkr3eE+v4qCDZRX47qAGgAqQ/IpH6f1ONuJB5jSpRWjZJUI79HfS1nEZwM6PGkYpkfY+r3voZZ9yYq0Oqi+obpRa2NNzkLkrWJbkJVnEt1ALSoluVJoI2SmnLwDVIvRAOvElCul6+TIj9ElezoDPWkbkTfEO3pqJOqMxHRVm7NRPtY6Gbt7AOXKhDjG6AVuVJzZHWDas7Nx0QVIlpHQffZIBr8dXY3jCi6KH4qRpWFWn/JqzCLPalmTiOl5l9UkM1/ElZ1JVtDCzl6adsTqv8d/MfRaOOjsZk+rdQK+mCWPZmM/KZpUTa9HlU2Rq0ldfvahK9j8H/0eVcbp9a2zD2C9kRdV3+bKKhmi42TplxawdeUUnqm7oZwWlMroY3vgdeHHv1Jwv7VV0YbRbthUycK+1MLcI0yBVMnCvuz8fK32t+n0uDhcC6JQRAEQRAEQRAEI8TY2D8NP4pQUXv+pAAAAABJRU5ErkJggg==",
            password: "",
            confirmPassword: ""
        }
        // firebase ==============================================
        this.uiConfig = {
            signInFlow: 'popup',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            callbacks: {
                signInSuccessWithAuthResult: () => false,
            },
        };
        this.componentDidMount = () => {
            console.log("Mounted!")
            firebase.auth().onAuthStateChanged(user => {
                this.setState({ isSignedIn: !!user })
                console.log(firebase.auth().currentUser)



                // if (this.state.isSignedIn === true) {
                //     const newAuth = {
                //         authID: firebase.auth().currentUser.uid,
                //         username: firebase.auth().currentUser.displayName,
                //         email: firebase.auth().currentUser.email
                //     }
                //     console.log(newAuth)
                //     axios.post("api/signup", newAuth).then(newAuth => {
                //         console.log(newAuth)
                //     })
                // }


            })
        }
        this.handleInputsChanges = event => {
            const { target: { name, value } } = event;
            this.setState({ [name]: value });
        }
        this.handleSignUpSubmit = event => {
            event.preventDefault();


            const { username, password, confirmPassword, email } = this.state;
            const localUsername = username;
            // console.log(localUsername)
            if (password !== confirmPassword) {
                this.setState({
                    passwordErr: "Password does not match the confirm password"
                })
            } else {
                firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)

                    .then(function (user) {
                        // console.log(user.user)
                        user.user.updateProfile({
                            displayName: localUsername
                        })
                        // this.setState({ username: localUsername })
                        // console.log(user.user)

                    });
                   
            }
            this.setState({
                username: username ? username : "",
                email: "",
                password: "",
                confirmPassword: "",
                passwordErr: ""
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.isSignedIn ?
                    (
                        <div>
                            <Navbar
                                profileImage={this.state.profileImage}
                                displayName={this.state.username}
                                logOut={() => firebase.auth().signOut()}
                            />
                        </div>
                    )
                    :
                    (
                        <div className="container-login100" >
                            <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
                                <form className="login100-form validate-form">
                                    <span className="login100-form-title p-b-37">
                                        Sign Up
                        </span>
                                    <p className="passwordErr">{this.state.passwordErr}</p>
                                    <div className="wrap-input100 validate-input m-b-25" data-validate="Enter password">
                                        <input className="input100" placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleInputsChanges} />
                                        <span className="focus-input100"></span>
                                    </div>

                                    <div className="wrap-input100 validate-input m-b-20" data-validate="Enter username or email">
                                        <input className="input100" type="email" placeholder="example@example.com" name="email" required title="Must be a example.com email address" onChange={this.handleInputsChanges} />
                                        <span className="focus-input100"></span>
                                    </div>

                                    {/* ========================== */}
                                    <div className="wrap-input100 validate-input m-b-20" data-validate="Password">
                                        <input className="input100" placeholder="password" name="password" type="current password" value={this.state.password} onChange={this.handleInputsChanges} />
                                        <span className="focus-input100"></span>
                                    </div>

                                    <div className="wrap-input100 validate-input m-b-25" data-validate="Enter password">
                                        <input className="input100" placeholder="Confirm Password" name="confirmPassword" type="new password" value={this.state.matchedPassword} onChange={this.handleInputsChanges} />
                                        <span className="focus-input100"></span>
                                    </div>
                                    {/* =========================== */}

                                    <div className="container-login100-form-btn">
                                        <button className="login100-form-btn" onClick={this.handleSignUpSubmit}>
                                            Sign Up
                            </button>
                                    </div>

                                    <div className="text-center">
                                        <ul>
                                            <li>
                                                <a href="/" className="txt2 hov1">Home</a>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>

                    )}
            </div>
        );
    }
}

export default SignUp;