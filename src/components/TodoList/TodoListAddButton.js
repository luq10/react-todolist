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

    let value = this.input.value;

    if(!value){
      // Disable submit empty text
      return;
    }

    this.props.onSubmit(value);
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
        <div className="input-group">
          <input type="text" className="form-control input-lg" ref={(element) => this.input = element} />
          <span className="input-group-btn">
            <button className="btn btn-success btn-lg" type="submit">Dodaj</button>
          </span>
        </div>
      </form>
    );
  }
}
