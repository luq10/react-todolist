export default class TaskList {
  /**
   *
   * @param {TaskListProvider} provider
   */
  constructor(provider) {
    this.provider = provider;
  }

  /**
   * Get length of list
   *
   * @return {Number}
   */
  get length() {
    return this.provider.getAll().length;
  }

  /**
   *
   * @returns {Task[]}
   */
  getAll(){
    return this.provider.getAll();
  }

  /**
   * Get task from index
   *
   * @param {Number} index
   * @return {Task}
   */
  get(index) {
    let task = this.provider.getAll()[index];

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
    this.provider.add(task);
    return this;
  }

  /**
   * Remove task from list by task list index parameter
   *
   * @param {Number} index
   * @return {this}
   */
  removeByIndex(index){
    if(index > this.length - 1){
      throw new Error('Index parameter is incorrect');
    }

    this.provider.removeByIndex(index);
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

    return this.removeByIndex(index);
  }

  /**
   * Find task by id
   *
   * @param {Number} idTask
   */
  find(idTask){
    let data = this.provider.getAll();

    for(let i = 0, ilen = data.length; i < ilen; i++){
      let task = data[i];

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
    let data = this.provider.getAll();

    for(let i = 0, ilen = data.length; i < ilen; i++){
      let task = data[i];

      if(task.id === idTask){
        return i;
      }
    }

    return false;
  }
}

