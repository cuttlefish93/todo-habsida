import './App.css'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

function App() {
	const todos = [
		{
			text: 'Completed task',
			isCompleted: true,
			isEditing: false,
			createdAt: 'created 17 seconds ago',
			id: Math.random(),
		},
		{
			text: 'Editing task',
			isCompleted: false,
			isEditing: true,
			createdAt: '',
			id: Math.random(),
		},
		{
			text: 'Active task',
			isCompleted: false,
			isEditing: false,
			createdAt: 'created 5 minutes ago',
			id: Math.random(),
		},
	]

	return (
		<section className='todoapp'>
			<header className='header'>
				<h1>todos</h1>
				<NewTaskForm />
			</header>
			<section className='main'>
				<TaskList todos={todos} />
				<Footer />
			</section>
		</section>
	)
}

export default App
