import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    justifyContent: 'center',
  },
  title: {
    margin: 20,
    textAlign: 'center',
  },
  title1: {
    fontSize: 25,
    color: colors.green,
  },
  title2: {
    fontSize: 25,
    color: colors.white,
  },
});
