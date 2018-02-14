import * as React from 'react';
import Todo from "./Todo";
import TodoModel from "../models/TodoModel";

interface TodoListProps {
    todos: TodoModel[],
    handleToggleState: (model: TodoModel) => void
}

interface TodoListState {

}

export default class TodoList extends React.Component<TodoListProps, TodoListState> {

    render() {
        const todos = this.props.todos.map(item => (
            <Todo key={item.id} model={item} handleToggleState={this.props.handleToggleState} />
        ));

        return (
            <div className="todo-list">
                { todos }
            </div>
        );
    }
}