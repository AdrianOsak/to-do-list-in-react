import "./style.css";

const Tasks = ({tasks, hideDone}) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li 
            key={task.id}
            className={`tasks__item${task.done && hideDone ? " task__item--hidden" : ""}`}
            >
            <button className="tasks__button tasks__button--toggleDone">
            <i className="fa-solid fa-check">
            </i>
            </button>
            <span className={`task__content${task.done ? " task__content--done" : ""}`}>{task.content}</span>
            <button className="tasks__button tasks__button--delete">
            <i className="fa-regular fa-trash-can">
            </i>
            </button>
            </li>
        ))}
    </ul>
);

export default Tasks;