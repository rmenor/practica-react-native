import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles, {placeholderTextColor} from './styles';

class Input extends Component {
  render() {
    const {
      label,
      value,
      error,
      style,
      placeholder,
      onChangeText,
      keyboardType,
    } = this.props;

    return (
      <View style={[styles.inputContainer, style]}>
        {label ? <Text style={styles.inputLabel}>{label}</Text> : null}
        <View style={styles.inputBorder}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
          />
        </View>
        {error ? <Text style={styles.inputError}>{error}</Text> : null}
      </View>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  style: PropTypes.any,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
};

Input.defaultProps = {
  keyboardType: 'default',
  value: '',
  placeholder: '',
  onChangeText: () => {},
  style: {},
};

export default Input;
