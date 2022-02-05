import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import store from '../../config/redux';
import Home from '../../components/home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="MI APP" component={Home} />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;
