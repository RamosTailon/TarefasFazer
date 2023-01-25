import { useState } from "react"
import AddButton from "./AddButton"

//ICONS
import { FaTrashAlt } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'

const TodoItem = ({ todos, completeToDo }) => {
	const [edit, setEdit] = useState({
		id: null,
		value: ''
	});

	return todos.map((todo, index) => (
		<div className={todo.isComplete ? 'todo_row complete' : 'todo_row'} key={index}>
			<div key={todo.id} onClick={(() => completeToDo(todo.id))}>
				{todo.text}
			</div>
			<div className="icons">
				<BsCheckLg />
				<FaTrashAlt />
			</div>
		</div>
	))
}

export default TodoItem