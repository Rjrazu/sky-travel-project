import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    const { signInUsingGoogle } = useAuth();
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    return (
        <div>
            <div className="text-center mt-5 mb-5"><button onClick={handleGoogleSignIn} className="btn btn-primary"> <span><i style={{ fontSize: '30px', color: 'white' }} className="fab fa-google"></i></span> <span style={{ fontSize: '25px', color: 'white' }} >Log in With Google Account!</span></button> </div>
        </div>
    );
};

export default Login;