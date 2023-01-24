import { useState } from 'react';


//COMPONENTS
import AddButton from './AddButton'

const ToDoList = () => {
	const [toDos, setToDos] = useState([]);

	const addTodo = toDo => {
		if (!toDo.text || /^\s*$/.test(toDo.text)) {
			return
		}

		const newToDos = [toDo, ...toDos];
		setToDos(newToDos)
		console.log(...toDos)
	}

	return (
		<div>
			<AddButton tasks={addTodo} />
		</div>
	)
}

export default ToDoList