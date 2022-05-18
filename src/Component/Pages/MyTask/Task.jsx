import React from "react";
import { useNavigate } from "react-router-dom";

const Task = ({task}) => {
  const {taskName,description} = task
  const navigate = useNavigate()
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-5">
      <h1 className="text-2xl mt-4 text-secondary-focus">Task</h1>
      <div className="card-body justify-start items-start">
        <h2 className="card-title">{taskName}</h2>
        <p>Description: {description}</p>
      </div>
      <div className="card-actions justify-start mb-4 ml-9">
      <button onClick={() => navigate('/task-manage')} className="btn bg-gray-600 border-0 btn-primary">Task Manage</button>
    </div>
    </div>
  );
};

export default Task;
