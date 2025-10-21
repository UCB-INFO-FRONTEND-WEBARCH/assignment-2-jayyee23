import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskCounter from './components/TaskCounter'
import TaskList from './components/TaskList'

function App() {
  // State for managing tasks
  const [tasks, setTasks] = useState([])
  // State for managing filter ('all', 'active', 'completed')
  const [filter, setFilter] = useState('all')

  // Add a new task
  const addTask = (taskText) => {
    const newTask = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      text: taskText,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Filter tasks based on the current filter
  const getFilteredTasks = () => {
    if (filter === 'active') {
      return tasks.filter(task => !task.completed)
    }
    if (filter === 'completed') {
      return tasks.filter(task => task.completed)
    }
    return tasks // 'all'
  }

  const filteredTasks = getFilteredTasks()

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Task Manager</h1>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Quick Find" 
              className="search-input"
            />
          </div>
        </header>

        <nav className="sidebar">
          <ul className="nav-list">
            <li className={filter === 'all' ? 'nav-item active' : 'nav-item'}>
              <button onClick={() => setFilter('all')} className="nav-button">
                <span className="nav-icon">📥</span>
                <span>Inbox</span>
                <span className="nav-count">{tasks.length}</span>
              </button>
            </li>
            <li className={filter === 'active' ? 'nav-item active' : 'nav-item'}>
              <button onClick={() => setFilter('active')} className="nav-button">
                <span className="nav-icon">📅</span>
                <span>Today</span>
                <span className="nav-count">{tasks.filter(t => !t.completed).length}</span>
              </button>
            </li>
            <li className={filter === 'completed' ? 'nav-item active' : 'nav-item'}>
              <button onClick={() => setFilter('completed')} className="nav-button">
                <span className="nav-icon">✅</span>
                <span>Completed</span>
                <span className="nav-count">{tasks.filter(t => t.completed).length}</span>
              </button>
            </li>
          </ul>
        </nav>

        <main className="main-content">
          <div className="content-header">
            <h2>
              {filter === 'all' && 'Inbox'}
              {filter === 'active' && 'Today'}
              {filter === 'completed' && 'Completed'}
            </h2>
            <TaskCounter 
              tasks={tasks} 
              filteredTasks={filteredTasks}
              filter={filter}
            />
          </div>

          <TaskForm onAddTask={addTask} />

          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={filter === 'active' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button 
              className={filter === 'completed' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>

          <TaskList 
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </main>
      </div>
    </div>
  )
}

export default App
