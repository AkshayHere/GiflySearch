import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import LoaderComponent from "../components/LoaderComponent";
import ImageCard from "../components/ImageCard";
import { connect } from "react-redux";
import { setSearchParam, searchImages, setOffset } from "../redux/actions";

const mapStoreStateToProps = (storeState) => {
  return {
    loading: storeState.loading,
    offset: storeState.offset,
    searchParams: storeState.searchParams,
    images: storeState.images,
  };
};

const mapDispatchToStore = (dispatch) => {
  return {
    setSearchParam: (payload) => dispatch(setSearchParam(payload)),
    setOffset: (payload) => dispatch(setOffset(payload)),
    searchImages: (payload) => dispatch(searchImages(payload)),
  };
};

const styles = {
  gridWrapper: {
    flexGrow: 1,
    margin: "10px",
  },
};

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
    };
  }

  handleChange = (event) => {
    let payload = event.target.value;

    this.setState({
      searchName: payload,
    });

    this.props.setSearchParam(payload);
    this.props.searchImages(payload);
  };

  handleFetchMore = () => {
    const { offset } = this.props;

    let payload = offset + 8;
    this.props.setOffset(payload);
    this.props.searchImages(payload);
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="center"
          className={classes.gridWrapper}
          alignItems="center"
        >
          <Grid item xs={12} md={8}>
            <TextField
              size="medium"
              fullWidth
              inputProps={{
                style: { height: "30px", fontSize: "25px" },
                placeholder: "Start Searching for Images!",
              }}
              onChange={this.handleChange}
              value={this.props.searchParams}
            />
          </Grid>
        </Grid>
        {this.props.loading && <LoaderComponent />}
        {!this.props.loading &&
          this.props.images &&
          this.props.images.length === 0 && (
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
                  No Images Found!
                </Typography>
              </Grid>
            </Grid>
          )}
        {!this.props.loading && (
          <Grid
            container
            className={classes.gridWrapper}
            spacing={4}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {this.props.images &&
              this.props.images.length > 0 &&
              this.props.images.map((image, i) => (
                <Grid key={i} item xs={12} md={4}>
                  <ImageCard config={image} />
                </Grid>
              ))}
          </Grid>
        )}
        {!this.props.loading &&
          this.props.images &&
          this.props.images.length > 0 && (
            <Grid
              container
              className={classes.gridWrapper}
              spacing={4}
              direction="row"
              justifyContent="center"
              style={{ marginBottom: "30px" }}
              alignItems="center"
            >
              <Grid item xs={12} md={4} lg={2}>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  onClick={this.handleFetchMore}
                  fullWidth
                >
                  Fetch More
                </Button>
              </Grid>
            </Grid>
          )}
      </React.Fragment>
    );
  }
}

SearchPage.propTypes = {
  classes: PropTypes.any,
  searchImages: PropTypes.any,
  offset: PropTypes.any,
  setOffset: PropTypes.any,
  searchParams: PropTypes.any,
  setSearchParam: PropTypes.any,
  images: PropTypes.any,
  loading: PropTypes.bool,
};

export default withStyles(styles)(
  connect(mapStoreStateToProps, mapDispatchToStore)(SearchPage)
);
