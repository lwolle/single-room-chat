import React from 'react';
import { Login } from './Login';
import { Layout } from './Layout';
import { InputContainer } from './InputContainer';
import { Button } from '../../core/Button/Button';
import { Input } from '../../core/InputField/InputField';
import { shallow } from 'enzyme/build';

describe('Login', () => {
    const login = () => {
    };
    it('should render', () => {
        const root = shallow(<Login login={ login } />);

        expect(root.find(Layout)).toExist();
        expect(root.find(InputContainer)).toExist();
    });

    describe('Input', () => {
        it('should be rendered', () => {
            const root = shallow(<Login login={ login } />);

            expect(root.find(Input)).toExist();
        });

        it('update on change', () => {
            const root = shallow(<Login login={ login } />);
            const input = root.find(Input);

            const fakeEvent = {
                currentTarget: {
                    value: 'user-name',
                },
            };
            input.simulate('change', fakeEvent);

            const inputAfterUpdate = root.find(Input);
            expect(inputAfterUpdate).toHaveProp('value', 'user-name');
        });
    });

    describe('Button', () => {
        it('should be rendered', () => {
            const root = shallow(<Login login={ login } />);

            expect(root.find(Button)).toExist();
        });

        it('should call props.login with input value', () => {
            const login = jest.fn();

            const root = shallow(<Login login={ login } />);

            const fakeEvent = {
                currentTarget: {
                    value: 'user-name',
                },
            };

            root.find(Input).simulate('change', fakeEvent);

            root.find(Button).simulate('click');
            expect(login).toHaveBeenCalledWith('user-name');
        });
    });
});
