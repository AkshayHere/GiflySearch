import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { find } from "lodash";
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

const StyledCard = styled(Card)(() => ({
  position: "relative",
  margin: "auto",
  objectFit: "cover",
  transition: "transform .2s ease-in-out",
  "&:hover": {
    transform: "scale3d(1.05, 1.05, 1)",
  },
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  height: 200,
}));

const StyledFavoriteIcon = styled(FavoriteIcon)(() => ({
  color: "#e8e8e8",
  opacity: "0.7",
  "&:hover": {
    color: "#B8111E",
    opacity: "1",
  },
}));

const cardWrapperStyles = {
  width: "100%",
  position: "relative",
};

const overlayStyles = {
  position: "absolute",
  top: "85%",
  left: "85%",
};

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageData: {},
    };
  }

  handleFavClick(config) {
    let payload = config;
    this.props.setFavorites(payload);
  }

  render() {
    const { config } = this.props;
    let configID = config.id;

    let isFav = find(this.props.favImages, { id: configID });

    return (
      <div style={cardWrapperStyles}>
        <StyledCard elevation={5}>
          <StyledCardMedia
            image={config.images.downsized_medium.url}
            title={config.images.title}
          />
          {!this.props.disableFavButton && (
            <div
              style={overlayStyles}
              onClick={() => this.handleFavClick(config)}
              {...(isFav ? { disabled: true } : "")}
            >
              <StyledFavoriteIcon
                fontSize="large"
                {...(isFav ? { style: { color: "#B8111E" } } : "")}
                color="secondary"
              />
            </div>
          )}
        </StyledCard>
      </div>
    );
  }
}

//Define the Properties Type
ImageCard.propTypes = {
  config: PropTypes.object,
  setFavorites: PropTypes.func,
  favImages: PropTypes.array,
  disableFavButton: PropTypes.bool,
};

ImageCard.defaultProps = {
  favImages: [],
  disableFavButton: false,
};

export default connect(mapStoreStateToProps, mapDispatchToStore)(ImageCard);
