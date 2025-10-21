import TaskItem from './TaskItem'

function TaskList({ tasks, onToggle, onDelete }) {
  // Show empty state message when no tasks
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-message">No tasks yet! Add one above to get started.</p>
      </div>
    )
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TaskList
