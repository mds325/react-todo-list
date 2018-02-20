import * as React from 'react';

import './CreateTodo.scss';

interface CreateTodoProps {
    handleAddTodo: (ev, context) => void,
}

interface CreateTodoState {
    text: string
}

export default class CreateTodo extends React.Component<CreateTodoProps, CreateTodoState> {

    state: CreateTodoState = {
        text: ''
    };

    handleInputChange = ev => this.setState({text: ev.target.value});
    handleAddTodo = (ev) => this.props.handleAddTodo(ev, this);

    render() {
        return (
            <form className="create-todo" onSubmit={this.handleAddTodo}>
                <input
                    className="description"
                    onChange={this.handleInputChange}
                    value={this.state.text}
                />
                <button type="submit" className="add-button">Add</button>
            </form>
        );
    }
}
