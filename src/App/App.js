import { Component } from "react/cjs/react.production.min";
// import Todo from '../components/Todo'
// import Input from '../components/Input'
import shortid from "shortid";
// import Checkbox from '../components/Checkbox'
// import Filter from '../components/Filter'
import Feedback from "../components/Feedback";
class App extends Component {
  state = {
    // todos: [
    //   { id: 'id-1', plan: 'выучить React', completed: false },
    //   { id: 'id-2', plan: 'осознать React ', completed: true },
    //   { id: 'id-3', plan: 'обуздать Redux', completed: true }
    // ],
    // filter: '',
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  }
  

  positivePercent = () => {
    const {total, good} = this.state
    const goodPercent = good/total * 100
      return Math.round(goodPercent)
    }
  
  // addTodo = messege => {
  //   const randId = shortid.generate()
  //   const newTodo = {
  //     id: randId,
  //     plan: messege,
  //     completed: false
  //   }
  //   this.setState(prevState => ({todos: [ ...prevState.todos, newTodo]}))
  // }
  // deleteTodo = id => this.setState(
  //   prevState => ({ todos: prevState.todos.filter(todo => todo.id !== id) })
  // )
  
  
//  filterInputHandler = (e) => {
//     this.setState({ filter: e.target.value })
    
//   }
  // filterTodo = () => {
  //   const toLowerCaseFilter = this.state.filter.toLowerCase()

  //   return this.state.todos.filter((todo)=>    todo.plan.toLowerCase().includes(toLowerCaseFilter))
  // }
onClickFeedbackChange = (e) => {
  const name = e.target.name
  this.setState(prevState => {
    return {
        
      [name]: prevState[name] + 1,
      total: prevState.total + 1,
        
    }
  })
}
  render() {
    const { good, neutral, bad, total } = this.state
    const procent = this.positivePercent()
    // const filteredTodos = this.filterTodo()
    return (
      <div>
        <Feedback good={good} neutral={neutral} bad={bad} total={total} positivePercentage={procent} onClickFeedbackChange={ this.onClickFeedbackChange}/>
        {/* <h2>Form</h2> */}
        {/* <Checkbox /> */}
        {/* <Input onSubmit={this.addTodo} /> */}
        
        {/* <Filter filter={this.todosFilter} /> */}
        {/* <label > */}
        {/* Filter */}
        {/* <input type="text" onChange={this.filterInputHandler} /> */}
      {/* </label > */}
        {/* <Todo todos={filteredTodos} onDelete={this.deleteTodo}/> */}
      </div>
    )
  
  }
}
export default App;
