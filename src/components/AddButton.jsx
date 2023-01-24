//ICONS
import { FiPlus } from 'react-icons/fi'

//CSS
import AddButtonStyle from '../styles/AddButtonStyle'

const AddButton = () => {
	return (
		<AddButtonStyle>
			<i onClick={() => alert('Função de Adicionar')}><FiPlus /></i>
			<p>Adicionar</p>
		</AddButtonStyle>

	)
}

export default AddButton