import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import reducer from '../redux/reducers';
import rootSaga from '../redux/saga';

import SearchPage from '../views/SearchPage';
import FavouritesPage from '../views/FavouritesPage';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

window.store = store;

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  pageWrapper: {
    overflow: "hidden"
  }
};

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPage: "search"
    };
  }

  componentDidMount(){
    document.title = "Gallereasy"
  }

  handleAppBarChange = (id) => {
    let displayScreen = id;

    if (displayScreen) {
      this.setState({
        displayPage: displayScreen
      });
    }
  }

  render() {
    const { classes } = this.props;
    const { displayPage } = this.state;

    return (
      <React.Fragment>
        <div className={classes.pageWrapper}>
          <Provider store={store}>
            <HeaderComponent displayPage={displayPage} handleAppBarChange={this.handleAppBarChange} />
            <Grid container direction="row" justify="center" alignItems="center">
              {
                displayPage && displayPage == "search" &&
                <SearchPage />
              }
              {
                displayPage && displayPage == "favourites" &&
                <FavouritesPage />
              }
            </Grid>
            <FooterComponent />
          </Provider>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(MainPage);
