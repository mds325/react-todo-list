import * as React from 'react';

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
            <div>
                <input
                    onChange={ev => this.setState({text: ev.target.value})}
                    value={this.state.text}
                />
                <button onClick={() => this.props.handleAddTodo(this)}>Add</button>
            </div>
        );
    }
}