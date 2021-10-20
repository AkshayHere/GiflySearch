import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

const MainPage = (
  lazy(() => (
    import('./pages/MainPage')
  ))
)


class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route exact path={"/"} >
                <MainPage />
              </Route>  
            </Switch>
          </Suspense>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
