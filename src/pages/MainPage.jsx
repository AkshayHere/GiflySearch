import React, { Component } from "react";
import Grid from '@mui/material/Grid';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducer from '../redux/reducers';
import rootSaga from '../redux/saga';

import SearchPage from '../views/SearchPage';
import FavoritesPage from '../views/FavoritesPage';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

window.store = store;

const pageWrapperStyles = {
  overflow: "hidden"
};

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPage: "search"
    };
  }

  componentDidMount(){
    document.title = "Gifly Search"
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
    const { displayPage } = this.state;

    return (
      <React.Fragment>
        <div style={pageWrapperStyles}>
          <Provider store={store}>
            <HeaderComponent displayPage={displayPage} handleAppBarChange={this.handleAppBarChange} />
            <Grid container direction="row" justifyContent="center" alignItems="center">
              {
                displayPage && displayPage == "search" &&
                <SearchPage />
              }
              {
                displayPage && displayPage == "favorites" &&
                <FavoritesPage />
              }
            </Grid>
            <FooterComponent />
          </Provider>
        </div>
      </React.Fragment>
    );
  }
}

MainPage.propTypes = {};

export default MainPage;
