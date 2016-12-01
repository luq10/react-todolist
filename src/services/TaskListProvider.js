import store from 'store';

export default class TaskListProvider {
  static STORE_KEY = '$task-list';

  /**
   * Get storage
   *
   * @return {Array}
   */
  static get(){
    let data = store.get(this.STORE_KEY);

    if(!data){
      return [];
    }

    // Restore Date object
    data.forEach(task => {
      task.created = new Date(task.created);
    });

    return data;
  }

  /**
   * Add new task
   *
   * @param {Task} task
   */
  static add(task){
    let data = this.get();

    data.push(task);
    store.set(this.STORE_KEY, data);
  }

  /**
   * Remove from storage task on index position
   *
   * @param {Number} index
   */
  static removeByIndex(index){
    let data = this.get();

    data.splice(index, 1);
    store.set(this.STORE_KEY, data);
  }

  /**
   * Clear all storage
   */
  static clear(){
    store.remove(this.STORE_KEY);
  }
}
