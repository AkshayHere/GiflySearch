import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

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

const StyledToolbar = styled(Toolbar)(() => ({
  '& .buttons': {
    display: "block",
    marginRight: 0,
    marginLeft: "auto",
  },
}));

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleAppBarChange = (event) => {
    this.props.handleAppBarChange(event.target.id);
  };

  render() {
    const { displayPage } = this.props;

    return (
      <React.Fragment>
        <AppBar position="static" color="primary">
          <StyledToolbar>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              <strong>Gifly</strong>Search
            </Typography>
            <div className="buttons">
              <Button color="inherit" onClick={this.handleAppBarChange}>
                <Typography
                  id={"search"}
                  variant="h5"
                >
                  {displayPage == "search" ? (
                    <strong style={{ color: 'blue' }}>
                      <i>Search</i>
                    </strong>
                  ) : (
                    "Search"
                  )}
                </Typography>
              </Button>
              <Button color="inherit" onClick={this.handleAppBarChange}>
                <Typography
                  id={"favorites"}
                  variant="h5"
                >
                  {displayPage == "favorites" ? (
                    <strong>
                      <i>Favorites</i>
                    </strong>
                  ) : (
                    "Favorites"
                  )}
                  {this.props.favImages.length > 0 &&
                    " (" + this.props.favImages.length + ")"}
                </Typography>
              </Button>
            </div>
          </StyledToolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

//Define the Properties Type
HeaderComponent.propTypes = {
  displayPage: PropTypes.any,
  handleAppBarChange: PropTypes.func,
  favImages: PropTypes.any,
};

HeaderComponent.defaultProps = {};

export default connect(mapStoreStateToProps, mapDispatchToStore)(HeaderComponent);
