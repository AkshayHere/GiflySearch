import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import ImageCard from "../components/ImageCard";
import { connect } from "react-redux";
import { setFavorites } from "../redux/actions";

const mapStoreStateToProps = (storeState) => {
  return {
    favImages: storeState.favImages,
  };
};

const mapDispatchToStore = (dispatch) => {
  return {
    setFavorites: (payload) => dispatch(setFavorites(payload)),
  };
};

const styles = {
  gridWrapper: {
    flexGrow: 1,
    margin: "10px",
  },
};

// wip
// need to add a fetch more button to show initially the first 8 items and show more accordingly

class FavoritesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Grid
          container
          spacing={8}
          direction="row"
          justifyContent="center"
          className={classes.gridWrapper}
          alignItems="center"
        >
          {this.props.favImages.length === 0 && (
            <Grid
              container
              className={classes.gridWrapper}
              spacing={4}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Typography variant="h3" className={classes.title}>
                  No Favorites yet !
                </Typography>
              </Grid>
            </Grid>
          )}
          {this.props.favImages && this.props.favImages.length > 0 && (
            <Grid
              container
              className={classes.gridWrapper}
              spacing={4}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {this.props.favImages.map((favImage, i) => (
                <Grid key={i} item xs={12} md={4}>
                  <ImageCard disableFavButton={true} config={favImage} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

FavoritesPage.propTypes = {
  classes: PropTypes.any,
  favImages: PropTypes.any,
};

export default withStyles(styles)(
  connect(mapStoreStateToProps, mapDispatchToStore)(FavoritesPage)
);
