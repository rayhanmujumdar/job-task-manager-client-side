import React from "react";

const TaskCard = ({task,handleDelete,handleComplete}) => {
    const {_id,email,taskName,description,completed} = task
  return (
    <div className="card bg-neutral lg:w-[800px] lg:mx-auto mx-5 text-neutral-content">
      <div className="card-body items-center text-center">
        <p>Email: {email}</p>
        {completed ? <s className="cart-title">{taskName}</s>:<h2 className="card-title">{taskName}</h2>}
        {completed ? <s className="mb-3">Description: {description}</s>:<p className="mb-3">Description: {description}</p>}
        <div className="card-actions justify-end">
          <button disabled={completed} onClick={() => handleComplete(_id)} className="btn btn-success">{completed ? "Completed": 'Complete'}</button>
          <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
