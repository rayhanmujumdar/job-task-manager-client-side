import { async } from '@firebase/util';
import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import axiosPrivate from '../../axiosPrivate/axiosPrivate';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';

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
            const email = user?.user?.email
            const url = `https://boiling-lake-25232.herokuapp.com/login`
            axiosPrivate.post(url,{email})
            .then(res => {
                if(res.data.token){
                    localStorage.setItem('accessToken',res.data.token)
                }
            })
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
            <PageTitle title={"Login"}></PageTitle>
            <button onClick={handleGoogleSignIn} className="btn btn-wide">
            <i className="fa-brands fa-google mr-2"></i>
            Continue With Google
            </button>
        </div>
    );
};

export default Login;