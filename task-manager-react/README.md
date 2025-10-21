# React Task Manager

A fully interactive task management application built with React, featuring state management, filtering, and a responsive design.

## 🔗 Live Demo

**[View Live Application →](https://ucb-info-frontend-webarch.github.io/assignment-2-jayyee23/)**

The application is deployed and accessible at: https://ucb-info-frontend-webarch.github.io/assignment-2-jayyee23/

## 🚀 Features

### Core Features
- **Add Tasks**: Create new tasks with a simple form interface
- **Complete Tasks**: Mark tasks as complete/incomplete with checkboxes
- **Delete Tasks**: Remove tasks from the list with a delete button
- **Task Counter**: Real-time display of task statistics (total, active, completed)
- **Empty State**: Helpful message when no tasks are present

### Enhanced Features
- **Task Filtering**: Filter tasks by All, Active, or Completed status
- **Visual Feedback**: Active filter highlighting and dynamic counter updates
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle transitions for better user experience

## 🛠️ Tech Stack

- **React 18**: Component-based UI library
- **Vite**: Fast build tool and development server
- **CSS3**: Custom styling with responsive design
- **JavaScript ES6+**: Modern JavaScript features

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd task-manager-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
task-manager-react/
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx      # Form for adding new tasks
│   │   ├── TaskCounter.jsx   # Displays task statistics
│   │   ├── TaskList.jsx      # Container for task items
│   │   └── TaskItem.jsx      # Individual task component
│   ├── App.jsx               # Main application component
│   ├── App.css              # Application styles
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── index.html               # Root HTML file
├── package.json            # Project dependencies
└── vite.config.js         # Vite configuration
```

## 🎯 Component Architecture

### App Component
- Main container managing global state
- Uses `useState` for tasks array and filter state
- Passes props and callbacks to child components

### TaskForm Component
- Controlled form component with local state
- Validates input before submission
- Clears input after adding task

### TaskCounter Component
- Calculates and displays task statistics
- Updates based on current filter
- Shows total, active, and completed counts

### TaskList Component
- Renders list of TaskItem components
- Displays empty state when no tasks
- Uses unique keys for list items

### TaskItem Component
- Individual task display with checkbox
- Visual distinction for completed tasks
- Delete button for task removal

## 💡 Key React Concepts Used

### State Management
- `useState` hook for managing application state
- Immutable state updates using spread operators
- Lifting state up to parent components

### Props & Data Flow
- Unidirectional data flow from parent to child
- Callback functions for child-to-parent communication
- Prop destructuring for cleaner code

### Event Handling
- Form submission with `onSubmit`
- Checkbox changes with `onChange`
- Button clicks with `onClick`

### Controlled Components
- Form inputs controlled by React state
- Two-way data binding for input fields

### List Rendering
- Using `.map()` to render arrays of components
- Unique `key` props for efficient updates
- Conditional rendering for empty states

## 🎨 Styling Features

- Clean, modern interface design
- Responsive grid layout
- Custom checkbox styling
- Hover and active states
- Smooth transitions and animations
- Mobile-optimized navigation

## 📱 Responsive Design

- **Desktop**: Full sidebar navigation with search bar
- **Tablet**: Collapsible sidebar, adjusted layout
- **Mobile**: Horizontal navigation, stacked form inputs

## 🚦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🚀 Deployment

### ✅ Already Deployed!

This application is **already deployed and live** on GitHub Pages:

🔗 **Live URL**: https://ucb-info-frontend-webarch.github.io/assignment-2-jayyee23/

### How It Was Deployed (GitHub Pages)

The app was deployed using GitHub Pages with the following steps:

1. **Installed gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Added deployment scripts to package.json:**
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Deployed to GitHub Pages:**
   ```bash
   npm run deploy
   ```

4. **Configured in GitHub Settings:**
   - Navigate to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

The application automatically deploys when changes are pushed using the `npm run deploy` command.

## 🔄 State Management Pattern

```javascript
// Task object structure
{
  id: "unique-id",
  text: "Task description",
  completed: false
}

// Filter states
'all' | 'active' | 'completed'
```

## 📝 Usage Guide

1. **Adding Tasks**
   - Type task description in input field
   - Click "Add Task" or press Enter
   - Task appears in the list below

2. **Completing Tasks**
   - Click checkbox to mark as complete
   - Task gets strikethrough styling
   - Counter updates automatically

3. **Filtering Tasks**
   - Click filter buttons to view subsets
   - "All" shows everything
   - "Active" shows incomplete tasks
   - "Completed" shows finished tasks

4. **Deleting Tasks**
   - Click the × button on any task
   - Task is permanently removed
   - Counter updates accordingly

## 🤔 Reflection: React vs Vanilla JavaScript

Working with React provides significant advantages over vanilla JavaScript for building interactive UIs. The component-based architecture makes code more modular and reusable, while the declarative nature of React simplifies complex state management. The virtual DOM ensures efficient updates, and the unidirectional data flow makes the application more predictable and easier to debug.

Compared to Assignment 1's vanilla JavaScript approach, React eliminates manual DOM manipulation, provides better separation of concerns, and makes it easier to manage application state. The development experience is enhanced with hot module replacement, and the component lifecycle is more intuitive than manually managing event listeners and DOM updates.

## 🏆 Features Checklist

✅ Component-based architecture  
✅ useState hook for state management  
✅ Props and data flow  
✅ Event handling  
✅ Controlled form components  
✅ Task filtering (All/Active/Completed)  
✅ Responsive design  
✅ Visual feedback for interactions  
✅ Empty state handling  
✅ Immutable state updates  

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)

## 📄 License

This project is created for educational purposes as part of INFO 153A/253A Front-End Web Architecture course.

---

**Assignment 2** - React Task Manager  
**Course**: INFO 153A/253A Front-End Web Architecture  
**Term**: Fall 2025