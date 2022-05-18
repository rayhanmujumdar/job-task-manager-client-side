import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }
    useEffect(() => {
        if(loading){
            <Loading></Loading>
        }
    },[loading])
    useEffect(() => {
        if(user){
            toast.success('SuccessFully Login',{
                id: 'success'
            })
            navigate(from,{ replace: true })
        }
    },[user])
    useEffect(() => {
        if(error){
            toast.error(error.code,{
                id: 'error'
            })
        }
    },[error])
    return (
        <div className='h-[93vh] flex justify-center items-center'>
            <button onClick={handleGoogleSignIn} className="btn btn-wide">
            <i className="fa-brands fa-google mr-2"></i>
            Continue With Google
            </button>
        </div>
    );
};

export default Login;