import { Button } from 'react-bootstrap';
import React from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    //google sign in
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                const {displayName, email} = user;
                const newUser = {...loggedInUser};
                newUser.isSignedIn = true;
                newUser.name = displayName;
                newUser.email = email;
                setLoggedInUser(newUser);
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email);
            });
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="login-area ">
                <h2 className="mb-5">Login</h2>
                <Button onClick={handleGoogleSignIn} variant="primary">Continue with Google</Button>
            </div>
        </div>
    );
};

export default Login;