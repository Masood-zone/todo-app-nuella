import React from "react";

function AddTask() {
  return (
    <form>
      <h1 className=" text-bold text-xl">Task Details </h1>
      <label for="title" className="text-sm">
        Title
      </label>
      <input type="text" placeholder="Add a task title" name="tittle" />
      <div className="flex">
        <div>
          <label for="priority" className=" p-2">
            Priority{" "}
          </label>
          <select id="language" name="language">
            <option value="hey">Hey</option>
            <option value="you">You</option>
            <option value="us">Us</option>
            <option value="man">Man</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default AddTask;
