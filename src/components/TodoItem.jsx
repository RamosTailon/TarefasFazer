import { useState } from "react"
import AddButton from "./AddButton"

//CSS
import ToDoItemStyle from '../styles/ToDoItemStyle'

//ICONS
import { FaTrashAlt } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'

const TodoItem = ({ todos, completeToDo }) => {
	const [edit, setEdit] = useState({
		id: null,
		value: ''
	});

	return todos.map((todo, index) => (
		<ToDoItemStyle className={todo.isComplete ? 'todo_row complete' : 'todo_row'} key={index}>
			<div key={todo.id}>
				{todo.text}
			</div>
			<div className="icons">
				<BsCheckLg id="define" onClick={(() => completeToDo(todo.id))} />
				<FaTrashAlt id="delete" />
			</div>
		</ToDoItemStyle>
	))
}

export default TodoItem