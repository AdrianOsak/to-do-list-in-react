import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button
                    onClick={toggleHideDone}
                    className="buttons__hidden">
                    {hideDone ? "Show" : "Hide"} done
                </button>
                <button
                    className="buttons__hidden"
                    disabled={tasks.every(({ done }) => done)}
                    onClick={setAllDone}
                >
                    Mark all as done
                </button>
            </>
        )}
    </div>
);


export default Buttons;