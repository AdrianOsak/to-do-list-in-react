import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "odwieźć Paulę do pracy", done: true },
];
const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Tasks list" />
      <Section
        title="Add new task"
        body={<Form />}
      />
      <Section
        title="Tasks list"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
