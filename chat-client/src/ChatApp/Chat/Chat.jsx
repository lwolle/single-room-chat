import React from 'react';
import { Message } from './Message/Message';
import {
    Layout,
    Inner,
} from './Layout';
import { Textarea } from '../../core/Textarea/Textarea';
import { Button } from '../../core/Button/Button';
import { messages as uiMessages } from '../config/messages';
import { StyledTextarea } from './StyledTextarea';
import { MessageListContainer } from './MessageListContainer';
import { TextareaContainer } from './TextareaContainer';
import { SearchFieldConnected } from './Search/SearchField.connected';

export class Chat extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { messageText: '' };
    }

    handleChange = (event) => {
        this.setState({ messageText: event.currentTarget.value });
    };

    handleSubmit = async () => {
        const result = await this.props.sendMessage(this.state.messageText);

        if (result) {
            this.setState({ messageText: '' });
        }
    };

    renderMessages = (messages, userId) => (
        messages.map((message) => (
            <Message
                key={ message.id }
                text={ message.text }
                isMine={ message.creatorId === userId }
            />
        ))
    );

    render() {
        const {
            userId,
            messages,
        } = this.props;
        return (
            <>
                <Layout>
                    <Inner>
                        <SearchFieldConnected />
                        <MessageListContainer>
                            { this.renderMessages(messages, userId) }
                        </MessageListContainer>
                        <TextareaContainer>
                            <StyledTextarea>
                                <Textarea
                                    resize="none"
                                    onChange={ this.handleChange }
                                    value={ this.state.messageText }
                                />
                            </StyledTextarea>
                            <Button onClick={ this.handleSubmit }>
                                { uiMessages['chat.submitbutton.label'] }
                            </Button>
                        </TextareaContainer>
                    </Inner>
                </Layout>
            </>
        );
    }
}
