import * as React from 'react';
import Todo from "./Todo";
import TodoModel from "../models/TodoModel";

import './TodoList.scss';

interface TodoListProps {
    todos: TodoModel[],
    handleToggleState: (model: TodoModel) => void
}

interface TodoListState {

}

export default class TodoList extends React.Component<TodoListProps, TodoListState> {

    renderTodos = item =>
        <Todo key={item.id} model={item} handleToggleState={this.props.handleToggleState} />;

    render() {
        return (
            <div className="todo-list">
                {this.props.todos.map(this.renderTodos)}
            </div>
        );
    }
}