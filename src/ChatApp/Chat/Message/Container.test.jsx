import React from 'react';
import { mount } from 'enzyme';
import { Container } from './Container';

describe('Chat/Message/Container', () => {
    it('should render', () => {
        const root = mount(<Container />);

        expect(root).toHaveStyleRule('background', 'lightblue');
        expect(root).toHaveStyleRule('margin', '40px 20px 40px 120px');
    });

    it('should render variant', () => {
        const root = mount(<Container isMine />);

        expect(root).toHaveStyleRule('background', 'lightgray');
        expect(root).toHaveStyleRule('margin', '40px 120px 40px 20px');

    });
});
