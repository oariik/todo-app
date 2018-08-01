import React, { Component } from 'react';
import { TodoList } from './todoList';
import { TodoForm } from './todoForm';
import { Header } from './inc/header';
import { Footer } from './inc/footer';


const myTasks = [

  "To-Do List ",
  "Run",
  "Read a Book",
  "Drive Rc Car",
  "Wake Up Early"
];


class App extends Component {
  addTask(val) {
    myTasks.push(val);
  }
  render() {


    return (
      <div className="content">
        <Header />
        <TodoForm addTasks={this.addTask} />
        <TodoList myTasks={myTasks} />
        <Footer />
      </div>
    );
  }
}

export default App;
