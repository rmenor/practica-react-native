import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import store from '../../config/redux';
import People from '../../components/pages/people';
import Details from '../../components/pages/details';
import colors from '../../assets/colors';
import PeopleAdd from '../../components/pages/people-add';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene
              key="People"
              title={'Personajes'}
              component={People}
              navigationBarStyle={{backgroundColor: colors.navBar}}
              titleStyle={{color: colors.white}}
              rightButtonTextStyle={{color: colors.white}}
              rightTitle="Añadir"
              onRight={() => Actions.push('PeopleAdd')}
            />
            <Scene
              key="Details"
              component={Details}
              back
              backButtonTintColor={colors.white}
              navigationBarStyle={{backgroundColor: colors.navBar}}
              titleStyle={{color: colors.white}}
            />
            <Scene
              key="PeopleAdd"
              title={'Crear Personaje'}
              component={PeopleAdd}
              back
              backButtonTintColor={colors.white}
              navigationBarStyle={{backgroundColor: colors.navBar}}
              titleStyle={{color: colors.white}}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;
