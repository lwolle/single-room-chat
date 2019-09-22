import React from 'react';
import { shallow } from 'enzyme';
import { Configure } from './Configure';

describe('ChatApp/Configure', () => {
    it('should render children', () => {
        const configureSocket = jest.fn();
        const Child = () => null;
        const root = shallow(
            <Configure configureSocket={ configureSocket }>
                <Child />
            </Configure>,
        );

        expect(root.find(Child)).toExist();
    });

    it('should props.configureSocket', () => {
        const configureSocket = jest.fn();
        shallow(<Configure configureSocket={ configureSocket } />);

        expect(configureSocket).toBeCalledTimes(1);
    });
});
