import { useState } from 'react';

//ICONS
import { FiPlus } from 'react-icons/fi'

//CSS
import AddButtonStyle from '../styles/AddButtonStyle'

const AddButton = ({ tasks }) => {
	const [inputText, setInputText] = useState('');

	const submit = (e) => {
		e.preventDefault();

		tasks({
			id: Math.floor(Math.random()*10000),
			text: inputText
		})
		setInputText('')
	}

	return (
		<AddButtonStyle onSubmit={submit}>
			<button ><FiPlus /></button>
			<input
				type="text"
				placeholder='Adicionar nota'
				value={inputText}
				name='text'
				onChange={(e) => setInputText(e.target.value)}
			/>
		</AddButtonStyle>

	)
}

export default AddButton