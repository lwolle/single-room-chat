import React from 'react';
import { Message } from './Message';
import { shallow } from 'enzyme';
import { Container } from './Container';
import { Content } from './Content';

describe('Chat/Message', () => {
    it('should render', () => {
        const root = shallow(<Message isMine text="the-message" />);

        const container = root.find(Container);
        expect(container).toExist();

        const content = root.find(Content)
        expect(content).toExist();
        expect(content).toHaveProp('isMine', true);
        expect(content).toHaveProp('children', 'the-message');
    });
});
