import "./style.css";

const Form = () => (
    <form className="form ">
        <input className="form__input" placeholder="What you're up to?" />
        <button className="addTask form__button">Add task</button>
    </form>
);

export default Form;