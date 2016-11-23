import React from 'react';

// models
import Task from '../models/Task';

// components
import TodoList from './TodoList';
import TodoListAddButton from './TodoListAddButton';

export default class TodoListContainer extends React.Component {
  static propTypes = {
    tasks: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Task))
  };

  /**
   *
   * @param {Object} props
   * @param {Task[]} [props.tasks=[]]
   */
  constructor(props) {
    super(props);

    this.state = {
      tasks: props.data || []
    };
  }

  /**
   *
   * @param {String} text
   * @todo: Save in localstorage
   */
  addTask(text) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat([Task.create(text)])
    }));
  };

  /**
   *
   * @return {XML}
   */
  render() {
    return (
      <div>
        <TodoList tasks={this.state.tasks}/>
        <TodoListAddButton onSubmit={this.addTask.bind(this)}/>
      </div>
    );
  }
}
