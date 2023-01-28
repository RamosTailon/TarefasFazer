import { useState } from 'react';

//CSS
import ToDoListStyle from '../styles/ToDoListStyle';

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

	const updateToDo = (todoId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return
		}

		setToDos(prev => prev.map(item => (
			item.id === todoId ? newValue : item
		)))
	}

	const removeTD = id => {
		const removeArr = [...toDos].filter(toDo => toDo.id !== id)

		setToDos(removeArr)
	}

	return (
		<ToDoListStyle>
			<AddButton tasks={addTodo} />
			<TodoItem
				todos={toDos}
				completeToDo={completeToDo}
				editToDo={updateToDo}
				removeToDo={removeTD}
			/>
		</ToDoListStyle>
	)
}

export default ToDoList