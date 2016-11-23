import React from 'react';

/**
 * Presentation component for a new task add button
 */
export default class TodoListAddButton extends React.Component {
  static propTypes = {
    onSubmit: React.PropTypes.func.isRequired
  };

  /**
   * Reference for input element
   *
   * @type {Node|null}
   */
  input = null;

  /**
   *
   * @param {Object} props
   * @param {Function} props.onSubmit
   */
  constructor(props) {
    super(props);
  }

  /**
   * On submit form action - Click submit button or push Enter
   *
   * @param {Event} e
   */
  onSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.input.value);
    this.clear();
  }

  /**
   * Clear value of input
   */
  clear() {
    this.input.value = '';
  }

  /**
   *
   * @return {XML}
   */
  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <input type="text" ref={(element) => this.input = element}/>
        <button type="submit">Dodaj</button>
      </form>
    );
  }
}
