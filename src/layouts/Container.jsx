//CSS
import ContainerStyle from '../styles/ContainerStyle'

//COMPONENTS
import ToDoList from '../components/ToDoList'

const Container = () => {
  return (
    <ContainerStyle>
      <h2>Qual planejamento de hoje?</h2>
      <ToDoList />
    </ContainerStyle>
  )
}

export default Container