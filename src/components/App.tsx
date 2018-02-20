import * as React from 'react';
import * as $ from 'jquery';
import TodoModel from '../models/TodoModel';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import DataService from '../services/DataService';
import TitleBar from './TitleBar';

import './App.scss';

interface AppProps {

}

interface AppState {
    todos: TodoModel[]
}

window.DataService = DataService;

export default class App extends React.Component<AppProps, AppState> {

    state: AppState = {
        todos: DataService.todos || []
    };

    handleAddTodo = (ev, context: CreateTodo) => {
        ev.preventDefault();
        $(ev.target).find('.description').trigger('focus');

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
        return [
            <TitleBar key={'title-bar'}/>,
            <div key={'main-window'} className="app">
                <CreateTodo handleAddTodo={this.handleAddTodo} />
                <TodoList todos={this.state.todos} handleToggleState={this.handleToggleState} />
            </div>
        ];
    }
}
