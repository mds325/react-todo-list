import * as React from 'react';
import TodoModel from '../models/TodoModel';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import DataService from '../services/DataService';

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
        const todos = this.state.todos;
        todos.push(new TodoModel(context.state.text));

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
            <div>
                <CreateTodo handleAddTodo={this.handleAddTodo} />
                <TodoList todos={this.state.todos} handleToggleState={this.handleToggleState} />
            </div>
        )
    }
}
