import React from 'react';
import { shallow } from 'enzyme';
import { Chat } from './Chat';
import { Textarea } from '../../core/Textarea/Textarea';
import { Button } from '../../core/Button/Button';
import { Message } from './Message/Message';
import { StyledTextarea } from './StyledTextarea';
import { TextareaContainer } from './TextareaContainer';
import { MessageListContainer } from './MessageListContainer';
import { OnlineIndicator } from './OnlineIndicator/OnlineIndicator';

describe('src/Chat', () => {
    describe('should render', () => {
        it('Textarea', () => {
            const root = shallow(<Chat messages={ [] } />);
            const textarea = root.find(Textarea);

            expect(textarea).toHaveProp('resize', 'none');
            expect(textarea).toExist();
        });

        it('StyledTextarea', () => {
            const root = shallow(<Chat messages={ [] } />);
            const textareaContainer = root.find(StyledTextarea);

            expect(textareaContainer).toExist();
        });

        it('TextareaContainer', () => {
            const root = shallow(<Chat messages={ [] } />);
            const textareaContainer = root.find(TextareaContainer);

            expect(textareaContainer).toExist();
        });

        it('TextareaContainer', () => {
            const root = shallow(<Chat messages={ [] } connected="not-online" />);
            const indicator = root.find(OnlineIndicator);

            expect(indicator).toExist();
            expect(indicator).toHaveProp('online', 'not-online');
        });

        it('Button', () => {
            const root = shallow(<Chat messages={ [] } />);
            const button = root.find(Button);

            expect(button).toExist();
        });

        it('MessageListContainer', () => {
            const root = shallow(<Chat messages={ [] } />);
            const container = root.find(MessageListContainer);

            expect(container).toExist();
        });
    });

    it('should update onChange', () => {
        const sendMessage = jest.fn();
        const root = shallow(<Chat sendMessage={ sendMessage } messages={ [] } />);
        const textarea = root.find(Textarea);
        const button = root.find(Button);

        const fakeEvent = {
            currentTarget: {
                value: 'the-message',
            },
        };

        textarea.simulate('change', fakeEvent);
        button.simulate('click');

        expect(sendMessage).toHaveBeenCalledWith('the-message');
    });

    describe('messages', () => {
        it('should be rendered', () => {
            const userId = 'me';
            const messages = [
                { id: 1, text: 'content', creatorId: 'not-me', creatorName: 'name' },
                { id: 2, text: 'content2', creatorId: 'me', creatorName: 'other-name' },
            ];
            const root = shallow(<Chat userId={ userId } messages={ messages } />);
            const rendererMessages = root.find(Message);

            expect(rendererMessages).toHaveLength(2);
            expect(rendererMessages.at(0).props()).toEqual({
                text: 'content',
                isMine: false,
                creatorName: 'name',
            });

            expect(rendererMessages.at(1).props()).toEqual({
                text: 'content2',
                isMine: true,
                creatorName: 'other-name',
            });
        });
    });
});
