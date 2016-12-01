import React, {Component} from 'react';

// models
import TodoList from '../models/TaskList';

// services
import TaskListProvider from '../services/TaskListProvider';

// components
import TodoListContainer from './TodoList/TodoListContainer';

import '../assets/styles/styles.scss';

/**
 * Main presentation component.
 *
 * @return {XML}
 * @constructor
 */
const App = () => {
  let taskList = new TodoList(TaskListProvider);

  return (
    <TodoListContainer taskList={taskList} />
  );
};

export default App;
