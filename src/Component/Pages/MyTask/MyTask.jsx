import React from "react";
import toast from "react-hot-toast";
import useTask from "../../../Hooks/useTask";
import Loading from "../../Shared/Loading/Loading";
import Task from "./Task";

const MyTask = () => {
  const { data, isLoading, error, refetch } = useTask();
  if (isLoading) {
    return <Loading></Loading>;
  }
  if(error){
    return toast.error(error?.message,{
      id: 'error'
    })
  }
  const { data: tasks } = data;
  return (
    <div>
      <h1 className="text-4xl uppercase border-b-gray-400 border-b-2 w-96 mx-auto pb-2">
        My Task
      </h1>
      {tasks?.length ? <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {tasks?.map((task) => (
          <Task key={task._id} task={task}></Task>
        ))}
      </div> : <p className="my-3 text-red-400"><small>No Task Found</small></p>}
    </div>
  );
};

export default MyTask;
