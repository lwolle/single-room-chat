import React from 'react';
import { shallow } from 'enzyme';
import { Message } from './Message';
import { Container } from './Container';
import { Content } from './Content';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

describe('Chat/Message', () => {
    describe('should render', () => {
        it('Container', () => {
            const root = shallow((
                <Message
                    isMine
                    text="the-message"
                    creatorName="the-name"
                />
            ));
            const container = root.find(Container);

            expect(container).toExist();
        });

        it('Content', () => {
            const root = shallow((
                <Message
                    isMine
                    text="the-message"
                    creatorName="the-name"
                />
            ));
            const content = root.find(Content);

            expect(content).toExist();
            expect(content).toHaveProp('isMine', true);
        });


        it('Typography', () => {
            const root = shallow((
                <Message
                    isMine
                    text="the-message"
                    creatorName="the-name"
                />
            ));

            const typography = root.find(Typography);

            expect(typography).toExist('isMine', true);
            expect(typography).toHaveProp('variant', 'body2');
            expect(typography).toHaveProp('component', 'div');
        });

        it('Avatar', () => {
            const root = shallow((
                <Message
                    isMine
                    text="the-message"
                    creatorName="the-name"
                />
            ));

            const avatar = root.find(Avatar);

            expect(avatar).toExist('isMine', true);
            expect(avatar).toHaveProp('children', 't');
        });
    });
});
