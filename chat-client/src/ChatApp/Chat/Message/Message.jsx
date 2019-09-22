import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import ColorHash from 'color-hash';
import { makeStyles } from '@material-ui/styles';
import { Content } from './Content';
import { Container } from './Container';

const useStyles = makeStyles({
    avatar: {
        color: (props) => props.color,
        margin: '0 15px',
    },
});

const colorhash = new ColorHash();
export const Message = ({ isMine, text, creatorName }) => {
    const classes = useStyles({ color: colorhash.rgb(creatorName) });
    return (
        <Container>
            <Content isMine={ isMine }>
                <Avatar className={ classes.avatar }>{ creatorName[0] }</Avatar>
                <Typography variant="body2" component="div">
                    { text }
                </Typography>
            </Content>
        </Container>
    );
};

