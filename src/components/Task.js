function Task(props) {
	const { todo } = props

	return (
		<li
			className={`${todo.isCompleted ? 'completed' : ''} ${
				todo.isEditing ? 'editing' : ''
			}`}
		>
			<div className='view'>
				<input className='toggle' type='checkbox' />
				<label>
					<span className='description'>{todo.text}</span>
					<span className='created'>{todo.createdAt}</span>
				</label>
				<button className='icon icon-edit'></button>
				<button className='icon icon-destroy'></button>
			</div>
			<input
				type='text'
				className='edit'
				value={todo.text}
				onChange={e => console.log(e)}
			></input>
		</li>
	)
}

export default Task
