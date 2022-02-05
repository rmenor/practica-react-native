import React, {Component} from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import styles, {loadingColor} from './styles';

class Button extends Component {
  render() {
    const {onPress, label, loading, style} = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, style]}
        onPress={onPress}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator color={loadingColor} />
        ) : (
          <Text style={styles.label}>{label}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  loading: PropTypes.bool,
  onPress: PropTypes.func,
  label: PropTypes.string,
  style: PropTypes.any,
};

Button.defaultProps = {
  label: '',
  loading: false,
  onPress: () => {},
  style: {},
};

export default Button;
