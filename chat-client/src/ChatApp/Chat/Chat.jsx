import React from 'react';
import { Message } from './Message/Message';
import { Layout } from './Layout';
import { Textarea } from '../../core/Textarea/Textarea';
import { Button } from '../../core/Button/Button';
import { messages as uiMessages } from '../config/messages';
import { StyledTextarea } from './StyledTextarea';
import { MessageListContainer } from './MessageListContainer';
import { TextareaContainer } from './TextareaContainer';

export class Chat extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { messageText: '' };
    }

    handleChange = (event) => {
        this.setState({ messageText: event.currentTarget.value });
    };

    handleSubmit = () => {
        this.props.sendMessage(this.state.messageText);
        this.setState({ messageText: '' });
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
                    <MessageListContainer>
                        { this.renderMessages(messages, userId) }
                    </MessageListContainer>
                    <TextareaContainer>
                        <StyledTextarea>
                            <Textarea
                                onChange={ this.handleChange }
                                value={ this.state.messageText }
                            />
                        </StyledTextarea>
                        <Button onClick={ this.handleSubmit }>
                            { uiMessages['chat.submitbutton.label'] }
                        </Button>
                    </TextareaContainer>
                </Layout>
            </>
        );
    }
}
