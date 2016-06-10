import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const Projects = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default Projects