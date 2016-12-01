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
    <ul className="list-unstyled">
      {
        props.taskList.getAll().map((task) => {
          return (
            <li key={task.id}>
              <div>
                <DateTime date={task.created}/>
                <button className="btn btn-danger btn-xs pull-right" onClick={props.onRemove.bind(this, task)}>Usuń</button>
              </div>
              <span>{task.text}</span>
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
