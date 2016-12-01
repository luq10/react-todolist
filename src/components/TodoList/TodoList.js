import React from 'react';

// models
import TaskList from '../../models/TaskList';

// components
import DateTime from '../DateTime';

/**
 * Presentation component for showing list of tasks
 *
 * @param {Object} props
 * @param {Task[]} props.tasks
 * @return {XML}
 * @constructor
 */
const TodoList = (props) => {
  return (
    <ul>
      {
        props.taskList.getAll().map((task) => {
          return (
            <li key={task.id}>
              <span>{task.text}</span> |
              <DateTime date={task.created}/>
              <button onClick={props.onRemove.bind(this, task)}>Usuń</button>
            </li>
          );
        })
      }
    </ul>
  );
};

TodoList.propTypes = {
  taskList: React.PropTypes.instanceOf(TaskList).isRequired,
  onRemove: React.PropTypes.func.isRequired
};

export default TodoList;
