import uuid from 'node-uuid';

export default class Task {
  /**
   *
   * @param {Number} id
   * @param {String} text
   * @param {Date} created
   * @param {Boolean} isDone
   */
  constructor(id, text, created, isDone) {
    this.id = id;
    this.text = text;
    this.created = created;
    this.isDone = isDone;
  }

  /**
   * Create new task
   *
   * @param {String} text
   * @return {Task}
   */
  static create(text) {
    return new Task(uuid.v4(), text, new Date(), false);
  }
}
