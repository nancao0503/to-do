const AddTaskForm = (props) => {
  return (
    <>
      {/*add task*/}
      <div className="row">
        <div className="col">
          <input
            value={props.newTask}
            onChange={(e) => props.setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={props.addTask} className="btn btn-lg btn-success">
            Add Task
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default AddTaskForm;
