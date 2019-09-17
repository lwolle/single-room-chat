import { default as KiwiTextarea } from '@kiwicom/orbit-components/lib/Textarea';
import React from 'react';
import { messages } from '../../ChatApp/config/messages';

export const Textarea = (props) => (
    <KiwiTextarea
        placeholder={ messages['chat.textarea.placeholder'] }
        { ...props }
    />
);
