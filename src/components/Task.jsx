import PropTypes from 'prop-types';

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor='checked'
        aria-label={`archiveTask ${id}`}
        className='checkbox'
      >
        <input
          type='checkbox'
          disabled={true}
          name='checked'
          id={`archiveTask ${id}`}
          checked={state === 'TASK_ARCHIVED'}
        />
      </label>
      <label htmlFor='title' aria-label={title} className='title'>
        <input
          type='text'
          value={title}
          name='title'
          readOnly={true}
          placeholder='Input title'
        />
      </label>
      {state !== 'TASK_ARCHIVED' && (
        <button
          type='button'
          className='pin-button'
          onClick={() => onPinTask(id)}
          aria-label={`pinTask ${id}`}
          id={`pinTask ${id}`}
          key={`pinTask ${id}`}
        >
          <span className='icon-star' />
        </button>
      )}
      {/* <button
        type='button'
        onClick={() => onPinTask(id)}
        aria-label='pinTask'
        className='pin-button'
      >
        <span className='icon-pin' />
      </button> */}
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func.isRequired,
  onPinTask: PropTypes.func,
};
