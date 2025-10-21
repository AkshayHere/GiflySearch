import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import React from "react";

const rootStyles = {
  flexGrow: 1,
  minHeight: "300px",
};

class LoaderComponent extends React.Component {
  render() {
    return (
      <Grid
        sx={rootStyles}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <CircularProgress thickness={7} />
        </Grid>
      </Grid>
    );
  }
}

LoaderComponent.propTypes = {};

export default LoaderComponent;
