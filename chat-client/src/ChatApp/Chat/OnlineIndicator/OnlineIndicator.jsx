import React from 'react';
import { Typography } from '@material-ui/core';
import { FlexRow } from './FlexRow';
import { ConnectionIcon } from './ConnectionIcon';

export const OnlineIndicator = ({ online }) => (
    <FlexRow>
        <ConnectionIcon online={ online } />
        <Typography>
            { online ? 'online' : 'offline' }
        </Typography>
    </FlexRow>
);
