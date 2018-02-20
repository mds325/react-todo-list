import * as React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Todo from '../../src/components/Todo';
import TodoModel from '../../src/models/TodoModel';
import Mock = jest.Mock;

describe('<Todo />', () => {
    let todo: ShallowWrapper;
    let model: TodoModel;
    let handleToggleState: Mock;

    beforeEach(() => {
        handleToggleState = jest.fn()
            .mockImplementation((model) => {
                model.completed = !model.completed;
            });
        model = new TodoModel('Do Something Today');
        todo = shallow(<Todo model={model} handleToggleState={handleToggleState}/>);
    });

    test('Renders the component properly after creation', () => {
        expect(todo.hasClass('todo')).toBeTruthy();
        expect(todo.hasClass('done')).toBeFalsy();
    });

    test('Renders the description properly', () => {
        expect(todo.find('span').text()).toEqual('Do Something Today');
    });

    test('Toggles state when clicked', () => {
        expect(todo.hasClass('done')).toBeFalsy();
        expect(model.completed).toBeFalsy();

        todo.simulate('click', model);
        todo.setState({});

        expect(handleToggleState.mock.calls.length).toBe(1);
        expect(model.completed).toBeTruthy();
        expect(todo.hasClass('done')).toBeTruthy();
    })
});
