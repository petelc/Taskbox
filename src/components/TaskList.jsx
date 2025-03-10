import PropTypes from 'prop-types';
import Task from './Task';

//const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className='loading-item'>
      <span className='glow-checkbox' />
      <span className='glow-text'>
        <span>Loading</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className='list-items' key={'loading'} data-testid='loading'>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className='list-items' key={'empty'} data-testid='empty'>
        <div className='wrapper-message'>
          <span className='icon-check' />
          <p className='title-message'>No tasks available</p>
          <p className='subtitle-message'>Sit back and relax.</p>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter((task) => task.state === 'TASK_PINNED'),
    ...tasks.filter((task) => task.state !== 'TASK_PINNED'),
  ];

  return (
    <div className='list-items'>
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  /** Checks if it's in loading state */
  loading: PropTypes.bool,
  /** The list of tasks */
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
};
TaskList.defaultProps = {
  loading: false,
};
