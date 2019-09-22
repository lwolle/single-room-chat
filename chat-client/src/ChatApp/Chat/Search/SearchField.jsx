import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        padding: '2px 8px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
    },
    input: {
        flex: 1,
        spacing: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
};

export class SearchFieldBase extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
    }

    search = () => {
        this.props.startSearch(this.state.searchTerm);
    };

    handleChange = (event) => {
        const { value } = event.currentTarget;
        this.setState({
            searchTerm: value,
        });
    };

    clearSearch = () => {
        this.props.clearSearch();
        this.setState({
            searchTerm: '',
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <Paper className={ classes.root }>
                <InputBase
                    value={ this.state.searchTerm }
                    onChange={ this.handleChange }
                    className={ classes.input }
                    placeholder="Search"
                />
                <IconButton
                    onClick={ this.search }
                    className={ classes.iconButton }
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
                <IconButton
                    onClick={ this.clearSearch }
                    color="primary"
                    className={ classes.iconButton }
                    aria-label="directions"
                >
                    <ClearIcon />
                </IconButton>
            </Paper>
        );
    }
}

export const SearchField = withStyles(styles)(SearchFieldBase);
