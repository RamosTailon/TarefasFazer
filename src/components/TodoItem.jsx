import { useState } from "react"
import AddButton from "./AddButton"

//CSS
import ToDoItemStyle from '../styles/ToDoItemStyle'

//ICONS
import { FaTrashAlt } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'

const TodoItem = ({ todos, completeToDo, editToDo, removeToDo }) => {
	const [edit, setEdit] = useState({
		id: null,
		value: ''
	});

	const submitUpdate = value => {
		editToDo(edit.id, value);
		setEdit({
			id: null,
			value: ''
		})
	}

	if (edit.id) {
		return <AddButton tasks={submitUpdate} />
	}

	return todos.map((todo, index) => (
		<ToDoItemStyle className={todo.isComplete ? 'todo_row complete' : 'todo_row'} key={index}>
			<div key={todo.id} onClick={(() => setEdit({ id: todo.id, value: todo.text }))}>
				{todo.text}

			</div>
			<div className="icons">
				<BsCheckLg id="define" onClick={(() => completeToDo(todo.id))} />
				<FaTrashAlt id="delete" onClick={(() => removeToDo(todo.id))} />
			</div>
		</ToDoItemStyle>
	))
}

export default TodoItem