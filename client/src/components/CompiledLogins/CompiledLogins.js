import React, { Component } from 'react';
import './CompiledLogins.css';
import Login from "../Login";
// import firebase from "firebase";
import firebase from 'firebase/app';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Navbar from "../Navbar";
import FirebaseApi from "../config/Authantification";

// Initialize Firebase
firebase.initializeApp(FirebaseApi);

class CompiledLogins extends Component {
  state={
    username:"",
    email:"",
    password:"",
    isSignedIn:false
  }
  uiConfig = {
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
    }
  };

componentDidMount=()=>{
  firebase.auth().onAuthStateChanged(user=>{
    this.setState({isSignedIn:!!user})
  })
}

handleInputsChanges = event =>{
  const {target:{name, value}}= event;
  this.setState({[name]:value});
  console.log(event.target.value)
}
handleSinUpSubmit = event=>{
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
  .then((user)=>{
 
  console.log(firebase.auth().currentUser)
});
}

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ?
          (<div>
            <Navbar 
            profileImage={firebase.auth().currentUser.photoURL ? (firebase.auth().currentUser.photoURL ):("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAgmSURBVHhe7Z0FiDxVHMf/drcYKHYHiopd2I2iqBgoiondCnah2C02tpjYGIgtFigKYoDd3e33s3dfeDfu3c7ezs7t7ft94AM7c7szb96befP6JgRBEARBEARBEARBEAT9wvRyI3m0vFbeLR+Rt8qL5JFyJTmpDLrEFHJn+ZD8Xf5bwu/keXIBGVTEdPI4+YVsFukfy1fl0/IN+ZksfudPebKcXAajZGK5j/xSppHL9uVyMzmLbMbscjt5n/xH+rdPyRlk0CYLy+dlmhDc/btIsq52WEa+JH2cF+WUMijJDvJ76QjkidhXdvKCJqu6QfqYj0oKBBvISJxhmEpeKR1pZDUXyhllFUwiKYn5+PYneb6cWwaD8C54RjqSeCo2lVWzmOTpeE2SEGnC8FTuKLOHIulb0hHzpJxLdhuysfXkPTJ98R8ls2VR+al0ZNwm231pVwGVTBeXSZxdZXYsJD+STowLJEXdsYLwuK7zg5xDZgMv0A+lE+MY2QusLZ19XcWOHJhaviKdGKfJOiF7mmngY1NoDyNc1O6pYPY1E8k7pRODd0ZdUHy+QnJeSlinS4raRVaXDt/e7OhnNpG/Sl/wX5LmkW4yrdxPFptgkNr/gjKF99jnkr/ztPQ9ZFm7SV6cXDSJspasEp6GrSXvAVp800S4Q76cbBP5vNBTaAPjb683tjKBNqYfJRdO+xLZWVnmkzQeHiRPkdS0r5YPy/elIzv1bbmVBJphzpR+gVMP4kkyJCT7v21sZcQR0hFGh9JIUFk8Vr4n/ZtW/izvkltImk6KnCD93VPZMcgZkn1/N7YyYmZJlsXFn8SOJkwjeQp+kY68VCLtG0lCkRXdJClGl2k45Kl8XHIc3m1uz+KFzz4SNDtcBOZOLkLbE1mNIx/pjOLJWlmOVHwty3LSxz6YHeISyTbvl+x4UHLx9H+kUPzkzndkPSdXk92AxkbOQQMnXC/ZfrexlRk3Si7+ncbWAHNKty2RJZEFtfPSbxdnUWSfZHNupi/eJFngyhr1BPOYZB+loDqaxPeQnA/JJt8c/EwROTvohOLi/2hsDfSVO3IoztbB5tLnXEW6jlTX+XsKRpQ4Mqg00j/BZ+ooVfUWtiJtLtkm+XyYzI7dpSNgEUlRk8+XybpIE4S+dn/mac2ONDIOTT53u40rJQ3DNclnOtCyg3FSjgBX0nBjWRdpgrheRPP7ZDI7KM5+JR0hlkiqizRBLL2Z3Sxq9ywHyGJk4FgnCO4vs+MDycVTMaRDiD4KtpslCG1fNGvQT7E0O0rCd+kM47cco4gThHMTBjdgErbscKMh9RGgafwQuWxjayhuY3LklcWJjBezowDn4pweHcmUBr5L2LKDxkIu/oXG1shwlzti22n4S3sLy/QCEha+S9iyI21HatV6u6Tkbme4zrbsKAnf5Tf8lmOMRNolQNiyY13pu5c+jLGGMDg867AjN+g6pR2LCOAupqUVl5J1wbl8Xg+WI0xpt25WpM0VdqyLvVmP8QVGu98sHSF1tiOlrb2EgeFKgaBzyBHDUKG6SBs4YwJPAefhJza26oEJoZyTXsqgAGOriBzmidQFM3g55wONrWAIvEyJHEo5dcyYpe5Dyy7nPJwdwVCYgUvk1BVBrPrAuei/n58dwf9xtvWJ7OZLltHvHt3CChHBMFBD9lNyFju6xNnS56l6wHffwUhGIoqsZH12VMyG0oOts5h20CnMXvKEUKYUrCqrghGQXpyAbHE2GZSAOX8ehUIEVtHPTi3c46449hoyaAOaUDzriiyGjixGxLcLDYV0PDmb4pjdWJwgC7iLiUTLoIjjZZmshunNzAP5WqbHWFMGHZBGpuVuZ9gOs6HSGbN8Zh9/8xNRNOgQRyTTF6gzFCOaJ4DRjlh8GvgudZvbk31Bhzgi3a3KsFNq8gyua/YUsI+/8R2PQHSzDAYd4ohs1s/NbCqeAAZoI08Q+4pEglQAQ3SYkDlSgpQlTRCOyUzgoAQMbGOiZ7psk60qQSzn4FztDLzLAtbi3VN6TFRq+o6oKkGavXeelYSBsGQLC5idK117TmVBASbNzJvsqypBOCbHTld1sLQKnCOzao5fQjIS0YPSLM3hZCH0i6T47yyMPFpITB8nhXPxTnFTvCVsNDwS1r5lHsmkmGJCkF2wIulwK8oxGJvvcfe2Gn3YDN4RfgqZ+94Mzs0kU8KSho2wEmbC3jfQHUvWlC4TTtfpdZLJ+62gj8SJyOJnrHdSFhaX8YJpHINGy1YQJsLm7l0k7GRl4/4dw7indDk/XqjUmheX7cAyS34ZszAML+CRlg/nb3tJrwjEb9tdA4swMj06LQSQuOOyYZLh/WmvHD4hV5SjhQj20FNHzqWScVy0DCPjrJj/Tl+Hv/ebJAFHC2Em7D4eCcS1dbLAc63QRM4aub4A7lIiqoppYqwc1Kx0NJyU1laQnULYuYZ0DS6ucTTdAbVC3wML3zvQtLpWXYQkclj/ilJQsyIzL/9b5Jay6rmCXIvntSBjyJhj37OwRJIDe6/s9vBMluVjfZTlB+Vzt5ec5Zrul75O1mzpSXaSDiSNfP38Pzu4Ng9Zwp5bqpy70vP5eKHOKvsdrtGFB669p6ZSU7733cJ051xg7Udfd53zWlqSBqyvarUtSNvaDmRHr5A23qWPLmV1RnygF6Psl33Atfq6mdrQM6QJkkIdwPtdH+iXfcb7O2mNrpzhEoS7ibsqvbP6ZZ8ZVwmSA5EgPUbPJ4jnfedizydIrvZUgmwvm909OUlrcBAEQRAEQRAEQRAEQdAtJkz4D9tG3tEdxmsCAAAAAElFTkSuQmCC")}
            dispayName={firebase.auth().currentUser.displayName}
            logOut={()=>firebase.auth().signOut()}
            />
          <h1>Loged In!</h1>
          </div>
      ): 
      ( <div>
          <Login
            email ={this.state.email}
            password ={this.state.password}
            handleInputsChanges = {this.handleInputsChanges}
            handleSinUpSubmit = {this.handleSinUpSubmit}
            socialMediaLogins={
              <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth = {firebase.auth()}
            />}
          />
        </div>
        )}
      </div>
    );
  }
}

export default CompiledLogins;