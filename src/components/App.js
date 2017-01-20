import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div className="container text-center">
    <h2 style={{ marginTop: '1em', marginBottom: '2em' }}>Todo List App</h2>
    <AddTodo />
    <Footer />
    <VisibleTodoList />
  </div>
);

export default App;
