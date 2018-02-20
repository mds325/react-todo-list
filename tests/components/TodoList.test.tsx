import * as React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import TodoModel from '../../src/models/TodoModel';
import TodoList from '../../src/components/TodoList';
import Mock = jest.Mock;

describe('<TodoList />', () => {
    let todoList: ShallowWrapper;
    let todos: TodoModel[];
    let handleToggleState: Mock;

    beforeEach(() => {
        handleToggleState = jest.fn();

        todos = [
            new TodoModel('Do Something Today'),
            new TodoModel('Do Something Tomorrow'),
            new TodoModel('Do Something the next week'),
            new TodoModel('Do Something on friday'),
        ];

        todoList = shallow(<TodoList todos={todos} handleToggleState={handleToggleState}/>);
    });

    test('Renders the correct amount of items', () => {
        expect(todoList.children().length).toBe(4);
    });

    test('When an item is added the item is rendered', () => {
        expect(todoList.children().length).toBe(4);

        todos.push(new TodoModel('Do nothing the next month'));
        todoList.setState({});

        expect(todoList.children().length).toBe(5);
    });

});
