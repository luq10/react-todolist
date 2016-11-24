export default class TaskList {
  /**
   *
   * @param {Task[]} [tasks]
   */
  constructor(tasks) {
    this.tasks = tasks || [];
  }

  /**
   * Add new task on end of array
   *
   * @param {Task} task
   * @return {this}
   */
  add(task) {
    this.tasks.push(task);
    return this;
  }

  /**
   * Remove task from list by task list index parameter
   *
   * @param {Number} index
   * @return {this}
   */
  removeByIndex(index){
    if(index > this.tasks.length - 1){
      return new Error('Index parameter is incorrect');
    }

    this.tasks.splice(index, 1);
    return this;
  }

  /**
   * Remove task from list by task id parameter
   *
   * @param {Number} idTask
   * @return {this}
   * @todo
   */
  removeById(idTask){

  }

  /**
   *
   * @param {Number} idTask
   * @todo
   */
  find(idTask){

  }
}
