import store from 'store';
import Task from '../models/Task';

export default class TaskListProvider {
  static STORE_KEY = '$task-list';

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

    this.data = store.get(this.STORE_KEY) || [];

    // Create model objects
    this.data = this.data.map(task => {
      return new Task(task.id, task.text, task.created);
    });

    return this.data;
  }

  /**
   * Add new task
   *
   * @param {Task} task
   */
  static add(task){
    this.data.push(task);
    store.set(this.STORE_KEY, this.data);
  }

  /**
   * Remove from storage task on index position
   *
   * @param {Number} index
   */
  static removeByIndex(index){
    this.data.splice(index, 1);
    store.set(this.STORE_KEY, this.data);
  }

  /**
   * Clear all storage
   */
  static clear(){
    this.data = [];
    store.remove(this.STORE_KEY);
  }
}
