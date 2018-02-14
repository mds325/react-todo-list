import * as React from 'react';
import TodoModel from "../models/TodoModel";


interface TodoProps {
    model: TodoModel,
    handleToggleState: (model: TodoModel) => void
}

interface TodoState {

}

export default class Todo extends React.Component<TodoProps, TodoState> {

    render() {
        const model = this.props.model;

        return (
            <div className="todo-item">
                <input
                    type="checkbox" checked={ model.completed }
                    onChange={ ev => this.props.handleToggleState(model) }
                />
                <span>{ model.description }</span>
            </div>
        );
    }
}