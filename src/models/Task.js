import uuid from 'node-uuid';

export default class Task {
  /**
   *
   * @param {Number} id
   * @param {String} text
   * @param {Date|String} created
   */
  constructor(id, text, created) {
    this.id = id;
    this.text = text;
    this.created = (typeof created === 'string') ? new Date(created) : created;
  }

  /**
   * Create new task
   *
   * @param {String} text
   * @return {Task}
   */
  static create(text) {
    return new Task(uuid.v4(), text, new Date());
  }
}
