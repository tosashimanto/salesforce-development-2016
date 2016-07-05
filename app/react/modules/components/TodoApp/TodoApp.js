import React from 'react'
import Header from '../Header/Header'
import PageHeader from '../PageHeader/PageHeader'
import SideMenu from '../SideMenu/SideMenu'
import TodoCreator from '../TodoCreator/TodoCreator'
import TodoList from '../TodoList/TodoList'

export default React.createClass({

  getInitialState: function(){
    return {
      todos: []
    }
  },

  onAdd: function(newTodo){
    this.setState({
      todos : this.state.todos.concat({item:newTodo, status:0})
    });
  },

  onDelete: function(i){
    var targetTodo = this.state.todos[i];
    targetTodo.status = !targetTodo.status;
    this.setState({
      todos: this.state.todos
    });
  },

  render: function(){
    return (
      <div className="todo-app-component">
        <Header />
        <div className="slds-grid">
          <nav role="nav" className="slds-col slds-size--2-of-12 siteNavi">
            <SideMenu />
          </nav>
          <main className="slds-col slds-size--10-of-12 siteMain">
            <PageHeader title="Todo Pages" />
            <div className="slds-m-around--small">
              <div className="TodoApp">
                <TodoCreator onAdd={this.onAdd}/>
                <TodoList todos={this.state.todos} onDelete={this.onDelete}/>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
})