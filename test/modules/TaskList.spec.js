import TaskList from '../../src/models/TaskList';
import Task from '../../src/models/Task';

describe('TaskList', function() {
  it('should be empty when init by empty array', function(){
    let taskList = new TaskList([]);

    expect(taskList.length).toBe(0);
  });

  it('should be empty when init by no param', function(){
    let taskList = new TaskList();

    expect(taskList.length).toBe(0);
  });

  it('should have correct length when init by array of tasks', function(){
    let taskList1 = new TaskList([
      Task.create('first'),
      Task.create('second')
    ]);
    let taskList2 = new TaskList([
      Task.create('first'),
      Task.create('second'),
      Task.create('third')
    ]);

    expect(taskList1.length).toBe(2);
    expect(taskList2.length).toBe(3);
  });

  it('should have correct length when add and remove tasks', function(){
    let taskList = new TaskList([
      Task.create('first')
    ]);

    expect(taskList.length).toBe(1);

    taskList
      .add(new Task('second'))
      .add(new Task('third'));

    expect(taskList.length).toBe(3);

    taskList.removeByIndex(2);

    expect(taskList.length).toBe(2);
  });

  it('should get task by index', function(){
    let taskList = new TaskList();
    let task1    = Task.create('first');
    let task2    = Task.create('second');

    taskList
      .add(task1)
      .add(task2);

    expect(taskList.get(0).id).toBe(task1.id);
    expect(taskList.get(1).id).toBe(task2.id);
    expect(taskList.get.bind(taskList, 2)).toThrowError(Error, 'Index parameter is incorrect');
  });

  it('should throw error when try removeByIndex non exist task', function(){
    let taskList = new TaskList([
      Task.create('first')
    ]);

    expect(taskList.removeByIndex.bind(taskList, 1)).toThrowError(Error, 'Index parameter is incorrect');
    expect(taskList.removeByIndex.bind(taskList, 2)).toThrowError(Error, 'Index parameter is incorrect');
    expect(typeof taskList.removeByIndex(0)).toBe('object');
  });

  it('should find correctly task by id', function(){
    let taskList  = new TaskList();
    let task1     = Task.create('first');
    let task2     = Task.create('second');

    taskList
      .add(task1)
      .add(task2);

    expect(taskList.find(task1.id)).toEqual(task1);
    expect(taskList.find(task2.id)).toEqual(task2);
    expect(taskList.find('some-not-exist-id')).toBe(false);
  });

  it('should find correctly index of task', function(){
    let taskList  = new TaskList();
    let task1     = Task.create('first');
    let task2     = Task.create('second');

    taskList
      .add(task1)
      .add(task2);

    expect(taskList.findIndex(task1.id)).toEqual(0);
    expect(taskList.findIndex(task2.id)).toEqual(1);
    expect(taskList.findIndex('some-not-exist-id')).toBe(false);
  });

  it('should correct remove task', function(){
    let taskList  = new TaskList();
    let task1     = Task.create('first');
    let task2     = Task.create('second');
    let task3     = Task.create('third');

    taskList
      .add(task1)
      .add(task2)
      .add(task3);

    taskList.removeById(task2.id);

    expect(taskList.length).toBe(2);

    expect(taskList.get(0).id).toBe(task1.id);
    expect(taskList.get(1).id).toBe(task3.id);
    expect(taskList.get.bind(taskList, 2)).toThrowError(Error, 'Index parameter is incorrect');
  });
});
