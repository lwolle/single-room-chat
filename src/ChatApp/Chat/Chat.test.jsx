import React from 'react';
import { Chat } from './Chat';
import { Textarea } from '../../core/Textarea/Textarea';
import { Button } from '../../core/Button/Button';
import { shallow } from 'enzyme';
import { Message } from './Message/Message';
import { TextareaContainer } from './StyledTextarea';

describe('src/Chat', () => {
    it('Textarea should be rendered', () => {
        const root = shallow(<Chat messages={ [] } />);
        const textarea = root.find(Textarea);
        const textareaContainer = root.find(TextareaContainer);

        expect(textarea).toExist();
        expect(textareaContainer).toExist();
    });

    it('Button should be rendered', () => {
        const root = shallow(<Chat messages={ [] } />);
        const button = root.find(Button);

        expect(button).toExist();
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
                { id: 1, text: 'content', creatorId: 'not-me' },
                { id: 2, text: 'content2', creatorId: 'me' },
            ];
            const root = shallow(<Chat userId={ userId } messages={ messages } />);
            const rendererMessages = root.find(Message);

            expect(rendererMessages).toHaveLength(2);
            expect(rendererMessages.at(0).props()).toEqual({
                text: 'content',
                isMine: false,
            });

            expect(rendererMessages.at(1).props()).toEqual({
                text: 'content2',
                isMine: true,
            });
        });
    });
});
