import { Container } from '@chakra-ui/react';
import './App.css';
import Title from './Components/Title';
import { AddTodo } from './Components/AddTodo';
import TodoList from './Components/TodoList';
import VisibilityFilter from './Components/visibilityFilter';

function App() {
  return (
    <Container>
      <Title/>
      <AddTodo/>
      <TodoList/>
      <VisibilityFilter/>
    </Container>
  );
}

export default App;
