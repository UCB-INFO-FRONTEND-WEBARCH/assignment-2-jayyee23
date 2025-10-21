import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate that the task is not empty or just whitespace
    if (taskText.trim() === '') {
      return
    }
    
    // Call the parent's addTask function
    onAddTask(taskText.trim())
    
    // Clear the input
    setTaskText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="task-input"
          placeholder="Add a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit" className="add-btn">
          Add Task
        </button>
      </div>
    </form>
  )
}

export default TaskForm
