import React from "react";
import toast from "react-hot-toast";
import useTask from "../../../Hooks/useTask";
import axiosPrivate from "../../axiosPrivate/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import TaskCard from "./TaskCard";

const TaskManager = () => {
  const { data, isLoading, error, refetch } = useTask();
  if (isLoading) {
    return <Loading></Loading>;
  }
  const { data: tasks } = data;
  const handleComplete = async (id) => {
    const confirm = window.confirm("You want to complete it here?");
    if (confirm) {
      const url = `http://localhost:5000/task/${id}`;
      const { data } = await axiosPrivate.put(url,{complete: confirm});
      if(data.matchedCount > 0){
         toast.success("Completed",{
             id: 'completed'
         })
         refetch()
      }
    }
  };
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are You Sure?");
    if (confirm) {
      const url = `http://localhost:5000/task/${id}`;
      const { data } = await axiosPrivate.delete(url);
      console.log(data)
      if(data?.deletedCount > 0){
        toast.success("Delete Task",{
            id: "delete"
        })
        refetch()
      }
    }
  };
  return (
    <div className="container mx-auto grid grid-cols-1 gap-y-5 py-10">
      <PageTitle title="Task-manage"></PageTitle>
      {tasks.map((task) => {
        return (
          <TaskCard
            key={task._id}
            task={task}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          ></TaskCard>
        );
      })}
    </div>
  );
};

export default TaskManager;
