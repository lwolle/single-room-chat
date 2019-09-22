import React from 'react';
import { Message } from './Message/Message';
import { Layout } from './Layout';
import { Textarea } from '../../core/Textarea/Textarea';
import { Button } from '../../core/Button/Button';
import { messages as uiMessages } from '../config/messages';
import { TextareaContainer } from './StyledTextarea';

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
                    { this.renderMessages(messages, userId) }
                    <TextareaContainer>
                        <Textarea
                            onChange={ this.handleChange }
                            value={ this.state.messageText }
                        />
                    </TextareaContainer>
                    <Button onClick={ this.handleSubmit }>
                        { uiMessages['chat.submitbutton.label'] }
                    </Button>
                </Layout>
            </>
        );
    }
}
