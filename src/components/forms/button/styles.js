import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export const loadingColor = colors.navBar;
export default StyleSheet.create({
  button: {
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 200,
    backgroundColor: 'rgba(255,255,255,0.6)',
    alignSelf: 'center',
    minWidth: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: colors.navBar,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
