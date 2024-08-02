import { useState } from 'react'
import './App.css'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

function App() {
	const [todos, setTodos] = useState([
		{
			text: 'Todo 1',
			isCompleted: false,
			isEditing: false,
			createdAt: 'created 17 seconds ago',
			id: Math.random(),
		},
		{
			text: 'Todo 2',
			isCompleted: false,
			isEditing: false,
			createdAt: 'created 4 seconds ago',
			id: Math.random(),
		},
		{
			text: 'Todo 3',
			isCompleted: false,
			isEditing: false,
			createdAt: 'created 5 minutes ago',
			id: Math.random(),
		},
	])

	function toggleCompletedTodoHandler(id) {
		setTodos(
			todos.map(todo =>
				todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo }
			)
		)
	}

	function deleteTodoHandler(id) {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	function editedTodoHandler(id) {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : { ...todo }
			)
		)
	}

	function updateEditedTodoHandler(newText, id) {
		setTodos(
			todos.map(todo =>
				todo.id === id
					? { ...todo, text: newText, isEditing: !todo.isEditing }
					: { ...todo }
			)
		)
	}

	return (
		<section className='todoapp'>
			<header className='header'>
				<h1>todos</h1>
				<NewTaskForm />
			</header>
			<section className='main'>
				<TaskList
					todos={todos}
					toggleCompletedTodo={toggleCompletedTodoHandler}
					deleteTodo={deleteTodoHandler}
					editedTodo={editedTodoHandler}
					updateEditedTodo={updateEditedTodoHandler}
				/>
				<Footer />
			</section>
		</section>
	)
}

export default App
