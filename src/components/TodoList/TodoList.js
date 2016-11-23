import React from 'react';

// models
import Task from '../../models/Task';

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
        props.tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox"/>
              <span>{task.text}</span> |
              <DateTime date={task.created}/>
            </li>
          );
        })
      }
    </ul>
  );
};

TodoList.propTypes = {
  tasks: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Task)).isRequired
};

export default TodoList;
