function TaskCounter({ tasks, filteredTasks, filter }) {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const activeTasks = totalTasks - completedTasks
  
  // Calculate display based on current filter
  const getCounterDisplay = () => {
    if (filter === 'all') {
      return `${completedTasks} of ${totalTasks} tasks completed`
    } else if (filter === 'active') {
      return `${activeTasks} active task${activeTasks !== 1 ? 's' : ''}`
    } else if (filter === 'completed') {
      return `${completedTasks} completed task${completedTasks !== 1 ? 's' : ''}`
    }
    return `${completedTasks} of ${totalTasks} tasks`
  }

  return (
    <div className="task-counter">
      <p className="counter-text">{getCounterDisplay()}</p>
      {totalTasks > 0 && (
        <div className="counter-stats">
          <span className="stat">
            <strong>{totalTasks}</strong> Total
          </span>
          <span className="stat">
            <strong>{activeTasks}</strong> Active
          </span>
          <span className="stat">
            <strong>{completedTasks}</strong> Completed
          </span>
        </div>
      )}
    </div>
  )
}

export default TaskCounter
