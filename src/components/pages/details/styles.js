import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'flex-start',
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: colors.green,
  },
  name: {
    fontSize: 45,
    color: colors.white,
    marginBottom: 5,
  },
  nick: {
    fontSize: 18,
    color: colors.white,
    marginBottom: 45,
  },
  image: {
    borderRadius: 20,
  },
  text: {
    color: colors.white,
    marginBottom: 15,
  },
});
