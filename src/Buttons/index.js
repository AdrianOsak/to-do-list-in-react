import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__hidden">
                    {hideDoneTasks ? "Show" : "Hide"} done
                </button>
                <button className="buttons__hidden"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Mark all as done
                </button>
            </>
        )}
    </div>
);


export default Buttons;