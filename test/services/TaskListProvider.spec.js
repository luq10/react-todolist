import TaskListProvider from '../../src/services/TaskListProvider';
import Task from '../../src/models/Task';

describe('TaskListProvider', function() {
  beforeEach(function(){
    TaskListProvider.clear();
  });

  it('should return empty array when nothing in storage', function(){
    expect(TaskListProvider.get()).toEqual([]);
  });

  it('should can add task', function(){
    TaskListProvider.add(Task.create('first'));
    TaskListProvider.add(Task.create('second'));

    expect(TaskListProvider.get().length).toEqual(2);
  });

  it('should can remove task', function(){
    let task1 = Task.create('first');
    let task2 = Task.create('second');
    let task3 = Task.create('third');

    TaskListProvider.add(task1);
    TaskListProvider.add(task2);
    TaskListProvider.add(task3);

    expect(TaskListProvider.get().length).toEqual(3);

    TaskListProvider.removeByIndex(1);

    let data = TaskListProvider.get();

    expect(data[0].id).toBe(task1.id);
    expect(data[1].id).toBe(task3.id);
  });
});
