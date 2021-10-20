
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { find } from 'lodash';
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

const styles = () => ({
    card: {
        position: 'relative',
        margin: "auto",
        objectFit: 'cover',
    },

    favorite: {
        color: "#e8e8e8",
        opacity: "0.7",
        "&:hover": {
            color: "#B8111E",
            opacity: "1",
        },
    },
   
    media: {
        height: 200,
    },
    title: {
        textAlign: "center",
        width: "100%"
    },
    cardWrapper: {
        width: "100%",
        position: "relative"
    },
    overlay: {
        position: 'absolute',
        top: '85%',
        left: '85%',
        // color: 'black',
        // backgroundColor: 'white'
    }
});


class ImageCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    handleFavClick(){
        const { config } = this.props;

        let payload = config;
        this.props.setFavorites(payload);
    }

    render() {

        const { classes, config } = this.props;

        let configID = config.id;

        let isFav = find(this.props.favImages, { "id": configID });

        return (
            <div className={classes.cardWrapper}>
                <Card elevation={5} className={classes.card} >
                    <CardMedia
                        // component="img"
                        className={classes.media}
                        image={config.images.downsized_medium.url}
                        title={config.images.title}
                    />
                    {
                        !this.props.disableFavButton &&
                        <div className={classes.overlay} onClick={this.handleFavClick} {...isFav ? { disabled: true } : ""}>
                            <FavoriteIcon fontSize="large" {...isFav ? { style: { color: "#B8111E" } } : ""} className={classes.favorite} color="secondary" />
                        </div>
                    }
                </Card>

            </div>
        );


    }

}

//Define the Properties Type
ImageCard.propTypes = {
    classes: PropTypes.any,
    config: PropTypes.func,
    setFavorites: PropTypes.func,
    favImages: PropTypes.string,
    disableFavButton: PropTypes.func,
};

ImageCard.defaultProps = {
};

export default withStyles(styles, { withTheme: true })(connect(mapStoreStateToProps, mapDispatchToStore)(ImageCard));