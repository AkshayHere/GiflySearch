import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        minHeight: "300px"
    },
    demo: {
        height: 240,
    },
    paper: {
        padding: theme.spacing(2),
        height: '100%',
        color: theme.palette.text.secondary,
    },
    control: {
        padding: theme.spacing(2),
    },
});

class LoaderComponent extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid
                className={classes.root}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item >
                        <CircularProgress thickness={7}  />
                    </Grid>
                </Grid>

        );
    }
}

export default withStyles(styles)(LoaderComponent);

