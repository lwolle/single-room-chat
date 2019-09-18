import React from 'react';
import { Message } from './Message/Message';
import { Layout } from './Layout';
import { Textarea } from '../../core/Textarea/Textarea';
import { Button } from '../../core/Button/Button';
import { messages } from '../config/messages';
import { TextareaContainer } from './StyledTextarea';

export class Chat extends React.PureComponent {
    state = { messageText: '' };

    handleChange = (event) => {
        this.setState({ messageText: event.currentTarget.value });
    };

    handleSubmit = () => {
        this.props.sendMessage(this.state.messageText);
        this.setState({ messageText: '' });
    };

    renderMessages = (messages, userId) => (
        messages.map(message => (
            <Message
                key={ message.id }
                text={ message.text }
                isMine={ message.creatorId === userId }
            />))
    );

    render() {
        return (
            <React.Fragment>
                <Layout>
                    { this.renderMessages(this.props.messages, this.props.userId) }
                    <TextareaContainer>
                        <Textarea
                            onChange={ this.handleChange }
                            value={ this.state.messageText }
                        />
                    </TextareaContainer>
                    <Button onClick={ this.handleSubmit }>
                        { messages['chat.submitbutton.label'] }
                    </Button>
                </Layout>
            </React.Fragment>
        );
    }
}
