function ListTodo(props) {
  const works = props.dataFromWrapper;

  return (
    <div className="list-todo">
      {works.map((work, index) => (
        <div className="list-item" key={index}>
          <input type="checkbox" id={index} />
          <label htmlFor={index}>{work}</label>
        </div>
      ))}
    </div>
  );
}

export default ListTodo;
