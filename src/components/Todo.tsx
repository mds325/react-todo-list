import * as React from 'react';
import TodoModel from '../models/TodoModel';

import './Todo.scss';

interface TodoProps {
    model: TodoModel,
    handleToggleState: (model: TodoModel) => void
}

interface TodoState {

}

export default class Todo extends React.Component<TodoProps, TodoState> {

    handleTodoClick = ev => this.props.handleToggleState(this.props.model);

    render() {
        const model = this.props.model;

        return (
            <div
                className={
                    [
                        'todo',
                        model.completed ? 'done' : ''
                    ].join(' ')
                }
                onClick={this.handleTodoClick}
            >
                <span>{model.description}</span>
            </div>
        );
    }
}