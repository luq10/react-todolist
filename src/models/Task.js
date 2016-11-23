export default class Task {
  /**
   * Id iterator
   *
   * @private
   * @type {Number}
   */
  static _ID = 0;

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
   * Get next id for new task
   *
   * @return {Number}
   */
  static getNextId() {
    return ++Task._ID;
  }

  /**
   * Create new task
   *
   * @param {String} text
   * @return {Task}
   */
  static create(text) {
    return new Task(Task.getNextId(), text, new Date(), false);
  }
}
