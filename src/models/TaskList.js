export default class TaskList {
  /**
   *
   * @param {Task[]} [tasks]
   */
  constructor(tasks) {
    this.tasks = tasks || [];
  }

  /**
   * Get length of list
   *
   * @return {Number}
   */
  get length() {
    return this.tasks.length;
  }

  /**
   * Get task from index
   *
   * @param {Number} index
   * @return {Task|*}
   */
  get(index) {
    let task = this.tasks[index];

    if(!task){
      throw new Error('Index parameter is incorrect');
    }

    return task;
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
      throw new Error('Index parameter is incorrect');
    }

    this.tasks.splice(index, 1);
    return this;
  }

  /**
   * Remove task from list by task id parameter
   *
   * @param {Number} idTask
   * @return {this}
   */
  removeById(idTask){
    let index = this.findIndex(idTask);

    if(false === index){
      throw new Error('Task don`t exist in this tasklist');
    }

    this.tasks.splice(index, 1);
    return this;
  }

  /**
   * Find task by id
   *
   * @param {Number} idTask
   */
  find(idTask){
    let task;

    for(let i = 0, ilen = this.tasks.length; i < ilen; i++){
      let task = this.tasks[i];

      if(task.id === idTask){
        return task;
      }
    }

    return false;
  }

  /**
   * Find index of task by id
   *
   * @param {Number} idTask
   */
  findIndex(idTask){
    let task;

    for(let i = 0, ilen = this.tasks.length; i < ilen; i++){
      let task = this.tasks[i];

      if(task.id === idTask){
        return i;
      }
    }

    return false;
  }
}

