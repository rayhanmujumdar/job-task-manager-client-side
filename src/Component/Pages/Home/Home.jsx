import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='h-[92vh] flex justify-center items-center animate-pulse'>
            <PageTitle title="Home"></PageTitle>
            <button onClick={() => navigate('/add-task')} class="btn btn-wide">Task Add</button>
        </div>
    );
};

export default Home;