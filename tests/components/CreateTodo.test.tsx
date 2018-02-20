import * as React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import CreateTodo from '../../src/components/CreateTodo';
import Mock = jest.Mock;

describe('<CreateTodo />', () => {
    let createTodo: ShallowWrapper;
    let handleAddTodo: Mock;

    beforeEach(() => {
        handleAddTodo = jest.fn();

        createTodo = shallow(<CreateTodo handleAddTodo={handleAddTodo}/>);
    });

    test('It\'s rendering properly', () => {
        expect(createTodo.find('.description').length).toBe(1);
        expect(createTodo.find('.add-button').length).toBe(1);
    });

    test('Clicking the Add button should call the handler', () => {
        createTodo.setState({
            text: 'Nothing to do'
        });

        createTodo.find('.add-button').simulate('click');
        expect(handleAddTodo.mock.calls.length).toBe(1);
    });

});
