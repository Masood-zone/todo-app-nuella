import React from "react";
import addButton from "../../assets/add.svg";
import AddTask from "./AddTask";

function Tasks() {
  return (
    <div className="max-w-3xl m-auto my-2 mt-5">
      <div className="flex items-center justify-between p-2">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <button
          className="bg-green-600 text-white text-sm  flex items-center py-2 px-5 rounded-md"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <img src={addButton} alt="Icon" className="w-5 h-5" />
          Add Task
        </button>
      </div>
      <dialog id="my_modal_3" className="modal bg-white max-w-xl h-max m-auto">
        Add Task
        <AddTask />
      </dialog>
    </div>
  );
}

export default Tasks;
