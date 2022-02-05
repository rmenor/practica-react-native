import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export const placeholderTextColor = colors.grey;
export default StyleSheet.create({
  inputContainer: {},
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 8,
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, 0.6)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  input: {color: colors.white, fontSize: 16},
  inputError: {
    textAlign: 'right',
    fontSize: 12,
    color: colors.red,
    marginTop: 6,
    textTransform: 'lowercase',
  },
});
