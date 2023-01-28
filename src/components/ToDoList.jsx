import { useState } from 'react';


//COMPONENTS
import AddButton from './AddButton'
import TodoItem from './TodoItem';

const ToDoList = () => {
	const [toDos, setToDos] = useState([]);

	const addTodo = toDo => {
		if (!toDo.text || /^\s*$/.test(toDo.text)) {
			return
		}

		const newToDos = [toDo, ...toDos];
		setToDos(newToDos)
	}

	const completeToDo = id => {
		let updateTodos = toDos.map(todo => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo
		})
		setToDos(updateTodos)
	}
	
	// const completeToDo = id => {
	// 	alert('função completa')
	// }

	return (
		<div>
			<AddButton tasks={addTodo} />
			<TodoItem todos={toDos} completeToDo={completeToDo} />
		</div>
	)
}

export default ToDoList