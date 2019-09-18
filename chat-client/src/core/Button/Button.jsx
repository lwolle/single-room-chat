import React from 'react';
import { default as KiwiButton } from '@kiwicom/orbit-components/lib/Button';

export const Button = React.memo((props) => (<KiwiButton { ...props } />));
