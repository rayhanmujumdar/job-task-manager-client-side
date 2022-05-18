import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading'
import axiosPrivate from '../../axiosPrivate/axiosPrivate'
const Task = () => {
    const {
      register,
      handleSubmit,
      formState:{errors}
    } = useForm();
    const {data,isLoading,isError,refetch} = useQuery('AddTask',() => {
        axiosPrivate.post()
    })
    const onSubmit = async(data) => {
        const url = 'http://localhost:5000/task'
        const {data} = await axiosPrivate.post(url,data)
        if(data){
            
        }
    };
    if(isLoading){
        return <Loading></Loading>
    }
    return (
      <div className='my-10 bg-current rounded-md w-96 mx-auto py-10'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-y-4'>
          <input type="text" {...register("taskName",{required: {value: true,message: 'task name is required'}})} placeholder="Task name" className="input pl-2 w-full max-w-xs input-bordered" />
          <textarea {...register("description",{required:{value: true,message:'Description is required'}})} className='input input-bordered pl-2 input-lg w-full max-w-xs resize-none overflow-hidden h-[200px]' placeholder='Description'></textarea>
          {errors?.description?.type === 'required' && <p className='text-red-500'>{errors?.description.message}</p>}
          {errors?.taskName?.type === 'required' && <p className='text-red-500'>{errors?.taskName.message}</p>}
          <input type="submit" className='btn btn-primary bg-gray-600 border-0'/>
        </form>
      </div>
    );
};

export default Task;