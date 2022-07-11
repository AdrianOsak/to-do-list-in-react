import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__hidden">
                    {hideDone ? "Show" : "Hide"} done
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