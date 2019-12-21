
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AppBar from "@material-ui/core/AppBar";
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
});


class FooterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                <AppBar className={classes.appBar} position="fixed" color="default">
                    <Grid container spacing={8} direction="row" justify="center" alignItems="center">
                        <Grid item xs={6}>
                            <Typography variant="h6" style={{ textAlign : "left", width : "100%", paddingLeft : "20px"}}>
                                Gallereasy POC web app
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" style={{ textAlign : "right", width : "100%", paddingRight : "20px" }}>
                                2359 Media
                        </Typography>
                        </Grid>
                    </Grid>


                </AppBar>
            </React.Fragment>
        );
    }
}

//Define the Properties Type
FooterComponent.propTypes = {
};

FooterComponent.defaultProps = {
};

export default withStyles(styles, { withTheme: true })(FooterComponent);