import * as React from 'react';
import TodoModel from '../models/TodoModel';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import DataService from '../services/DataService';

import './App.scss';

interface AppProps {

}

interface AppState {
    todos: TodoModel[]
}

export default class App extends React.Component<AppProps, AppState> {

    state: AppState = {
        todos: DataService.todos || []
    };

    handleAddTodo = (context: CreateTodo) => {
        console.log(this, context);
        let newTodoText: string = context.state.text;
        if (!newTodoText) {
            return;
        }
        const todos = this.state.todos;
        todos.push(new TodoModel(newTodoText));

        this.setState({
            todos
        });

        context.setState({
            text: ''
        });

        DataService.todos = todos;
    };

    handleToggleState = (todo) => {
        const todos = this.state.todos;
        todo = todos.filter(val => val === todo)[0];
        todo.completed = !todo.completed;

        this.setState({
            todos
        });

        DataService.todos = todos;
    };

    render() {
        return (
            <div className="app">
                <CreateTodo handleAddTodo={this.handleAddTodo} />
                <TodoList todos={this.state.todos} handleToggleState={this.handleToggleState} />
            </div>
        )
    }
}
