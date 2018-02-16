import * as React from 'react';

import './CreateTodo.scss';

interface CreateTodoProps {
    handleAddTodo: (context) => void,
}

interface CreateTodoState {
    text: string
}

export default class CreateTodo extends React.Component<CreateTodoProps, CreateTodoState> {

    state: CreateTodoState = {
        text: ''
    };

    render() {
        return (
            <div className="create-todo">
                <input
                    onChange={ev => this.setState({text: ev.target.value})}
                    value={this.state.text}
                />
                <button onClick={() => this.props.handleAddTodo(this)}>Add</button>
            </div>
        );
    }
}