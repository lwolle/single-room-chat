import React from 'react';
import SignalWifi4BarIcon from '@material-ui/icons/SignalWifi4Bar';
import { makeStyles } from '@material-ui/styles';
import { theme } from '../../../core/theme';

const useStyles = makeStyles(() => ({
    root: {
        color: (props) => (props.online ? theme.color.online : theme.color.offline),
        marginRight: 30,
    },
}));

export const ConnectionIcon = (props) => {
    const classes = useStyles(props);
    return (
        <SignalWifi4BarIcon className={ classes.root } />
    );
};
