export default class TaskListProviderMock {
  static data = null;

  /**
   * Get storage
   *
   * @return {Array}
   */
  static getAll(){
    if(this.data){
      return this.data;
    }

    this.data = [];
    return this.data;
  }

  /**
   * Add new task
   *
   * @param {Task} task
   */
  static add(task){
    this.data.push(task);
  }

  /**
   * Remove from storage task on index position
   *
   * @param {Number} index
   */
  static removeByIndex(index){
    this.data.splice(index, 1);
  }

  /**
   * Clear all storage
   */
  static clear(){
    this.data = [];
  }
}
