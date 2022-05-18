import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='h-[94vh] flex justify-center items-center flex-col'>
            <h1 className='text-5xl'>404</h1>
            <p className='text-xl'>Not Found</p>
            <button onClick={() => navigate('/')} class="btn btn-wide mt-3">Go Home</button>
        </div>
    );
};

export default NotFound;