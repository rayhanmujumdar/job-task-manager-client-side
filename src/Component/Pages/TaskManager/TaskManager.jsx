import userEvent from "@testing-library/user-event";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../../firebase/firebase.init";
import useTask from "../../../Hooks/useTask";
import axiosPrivate from "../../axiosPrivate/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import TaskCard from "./TaskCard";

const TaskManager = () => {
  const { data, isLoading, error, refetch } = useTask();
  const [user] = useAuthState(auth);
  if (isLoading) {
    return <Loading></Loading>;
  }
  const { data: tasks } = data;
  const handleComplete = async (id) => {
    const confirm = window.confirm("You want to complete it here?");
    if (confirm) {
      const url = `https://boiling-lake-25232.herokuapp.com/task/${id}`;
      const { data, res } = await axiosPrivate.put(url, {
        complete: confirm,
        email: user.email,
      });
      if (data.matchedCount > 0) {
        toast.success("Completed", {
          id: "completed",
        });
        refetch();
      }
      if (data.status === 401 || data.status === 403) {
        toast.error(data.message, {
          id: "error",
        });
        signOut(auth);
      }
    }
  };
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are You Sure?");
    if (confirm) {
      const url = `https://boiling-lake-25232.herokuapp.com/task/${id}`;
      const { data } = await axiosPrivate.delete(url, {
        data: {
          email: user?.email,
        },
      });
      if (data?.deletedCount > 0) {
        toast.success("Delete Task", {
          id: "delete",
        });
        refetch();
      }
      if (data.status === 401 || data.status === 403) {
        toast.error(data.message, {
          id: "error",
        });
        signOut(auth);
      }
    }
  };
  return (
    <div className="container mx-auto grid grid-cols-1 gap-y-5 py-10">
      <PageTitle title="Task-manage"></PageTitle>
      {tasks?.length ? (
        tasks.map((task) => {
          return (
            <TaskCard
              key={task._id}
              task={task}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            ></TaskCard>
          );
        })
      ) : (
        <div>
          <p className="text-red-500">No Task Here</p>
          <p class>Add Your Task!!</p>
        </div>
      )}
    </div>
  );
};

export default TaskManager;
