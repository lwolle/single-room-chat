import React from 'react';
import { default as KiwiInput } from '@kiwicom/orbit-components/lib/InputField';

export const Input = React.memo((props) => <KiwiInput { ...props } />);

