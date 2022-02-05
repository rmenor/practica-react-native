import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  image: {resizeMode: 'cover'},
  placeholderContainer: {
    backgroundColor: colors.main,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 280,
    padding: 20,
  },
  placeholderLabel: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
