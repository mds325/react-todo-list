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

    handleInputChange = ev => this.setState({text: ev.target.value});
    handleAddTodo = () => this.props.handleAddTodo(this);

    render() {
        return (
            <div className="create-todo">
                <input
                    className="description"
                    onChange={this.handleInputChange}
                    value={this.state.text}
                />
                <button className="add-button" onClick={this.handleAddTodo}>Add</button>
            </div>
        );
    }
}
