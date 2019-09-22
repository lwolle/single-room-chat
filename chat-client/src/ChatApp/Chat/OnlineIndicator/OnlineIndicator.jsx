import { FlexRow } from './FlexRow';
import React from 'react';
import { ConnectionIcon } from './ConnectionIcon';
import { Typography } from '@material-ui/core';

export const OnlineIndicator = ({ online }) => (
    <FlexRow>
        <ConnectionIcon online={ online } />
        <Typography>
            { online ? 'online' : 'offline' }
        </Typography>
    </FlexRow>
);
