import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
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

const gridWrapperStyles = {
  flexGrow: 1,
  margin: "10px",
};

// wip
// need to add a fetch more button to show initially the first 8 items and show more accordingly

class FavoritesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <React.Fragment>
        <Grid
          container
          spacing={8}
          direction="row"
          justifyContent="center"
          sx={gridWrapperStyles}
          alignItems="center"
        >
          {this.props.favImages.length === 0 && (
            <Grid
              container
              sx={gridWrapperStyles}
              spacing={4}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Typography variant="h3" sx={{ textAlign: 'center' }}>
                  No Favorites yet !
                </Typography>
              </Grid>
            </Grid>
          )}
          {this.props.favImages && this.props.favImages.length > 0 && (
            <Grid
              container
              sx={gridWrapperStyles}
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
  favImages: PropTypes.any,
};

export default connect(mapStoreStateToProps, mapDispatchToStore)(FavoritesPage);
