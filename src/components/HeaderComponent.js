
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { connect } from 'react-redux';
import { setFavorites } from '../redux/actions'

const mapStoreStateToProps = (storeState) => {
    return {
        favImages: storeState.favImages
    }
}

const mapDispatchToStore = (dispatch) => {
    return {
        setFavorites: (payload) => dispatch(setFavorites(payload)),
    }
}

const styles = theme => ({
});


class HeaderComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    handleAppBarChange = (event) => {
        this.props.handleAppBarChange(event.target.id);
    }

    render() {

        const { classes, displayPage } = this.props;

        return (
            <React.Fragment>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h4" className={classes.title}>
                        Galler<strong>easy</strong> |
                        </Typography>
                        <Button color="inherit" onClick={this.handleAppBarChange}>
                        <Typography id={"search"} variant="h5" className={classes.title}>
                            {displayPage == "search" ? <strong>Search</strong> : "Search" } 
                        </Typography>
                        </Button>
                        <Button color="inherit" onClick={this.handleAppBarChange}>
                        <Typography id={"favourites"} variant="h5" className={classes.title}>
                            {displayPage == "favourites" ? <strong>Favourites</strong> : "Favourites" } 
                            { this.props.favImages.length > 0 && "("+this.props.favImages.length+")" }
                        </Typography>
                        </Button>
                    </Toolbar>
                    </AppBar>
            </React.Fragment>
        );
    }
}

//Define the Properties Type
HeaderComponent.propTypes = {
};

HeaderComponent.defaultProps = {
};

export default withStyles(styles, { withTheme: true })(connect(mapStoreStateToProps, mapDispatchToStore)(HeaderComponent));