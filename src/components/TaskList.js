import Task from './Task'

function TaskList(props) {
	const { todos } = props

	return (
		<ul className='todo-list'>
			{todos.map(todo => (
				<Task key={todo.id} todo={todo} />
			))}
		</ul>
	)
}

export default TaskList
