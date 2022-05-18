import React from 'react';
import { useForm } from 'react-hook-form';
import axiosPrivate from '../../axiosPrivate/axiosPrivate'
import toast from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import useTask from '../../../Hooks/useTask';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import { signOut } from 'firebase/auth';
import PageTitle from '../../Shared/PageTitle/PageTitle';
const Task = () => {
  const {refetch} = useTask()
  const [user] = useAuthState(auth)
    const {
      register,
      handleSubmit,
      formState:{errors}
    } = useForm();
    const onSubmit = async (Data,e) => {
      const fromData = {...Data,email: user?.email,completed: false}
        const url = 'https://boiling-lake-25232.herokuapp.com/task'
        const {data} = await axiosPrivate.post(url,fromData)
        console.log(data)
        if(data?.insertedId){
            toast.success('Task added',{
              id: 'success'
            })
            refetch()
            e.target.reset()
        }
        if(data.status === 401 || data.status === 403){
          toast.error(data.message,{
              id: 'error'
          })
          signOut(auth)
        }
    };
    return (
      <div>
        <PageTitle title={'MyTask'}></PageTitle>
        <div className='my-10 bg-current rounded-md w-96 mx-auto py-10'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-y-4'>
          <input type="text" {...register("taskName",{required: {value: true,message: 'task name is required'}})} placeholder="Task name" className="input pl-2 w-full max-w-xs input-bordered" />
          <textarea {...register("description",{required:{value: true,message:'Description is required'}})} className='input input-bordered pl-2 input-lg w-full max-w-xs resize-none overflow-hidden h-[200px]' placeholder='Description'></textarea>
          {errors?.description?.type === 'required' && <p className='text-red-500'>{errors?.description.message}</p>}
          {errors?.taskName?.type === 'required' && <p className='text-red-500'>{errors?.taskName.message}</p>}
          <input type="submit" className='btn btn-primary bg-gray-600 border-0'/>
        </form>
      </div>
      <Outlet></Outlet>
      </div>
    );
};

export default Task;