import Task from '../../src/models/Task';

describe('Task', function() {
  it('each created tasks should have different id', function(){
    let task1 = Task.create('foo');
    let task2 = Task.create('bar');

    expect(task1.id).not.toBe(task2.id);
  });

  it('should filled property after created', function(){
    let task = Task.create('foo');

    expect(task.id).not.toBe(null);
    expect(task.id).not.toBe(undefined);
    expect(task.text).toBe('foo');
    expect(task.created instanceof Date).toBe(true);
    expect(task.isDone).toBe(false);
  });

  it('should have correct created date', function(){
    let task = Task.create('foo');
    let date = new Date();

    expect(+task.created).toBe(+date);
  });
});
