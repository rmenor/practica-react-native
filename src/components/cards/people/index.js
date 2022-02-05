import React, {Component} from 'react';
import {TouchableOpacity, Image, Dimensions, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class PeopleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: this.getImageUri(props.people),
      imageWidth: Dimensions.get('window').width / 2,
      imageHeight: 0,
    };
  }

  componentDidMount() {
    this.getImageHeight();
  }

  getImageUri = people => {
    const thumbnailPath = people?.img;
    if (!thumbnailPath || thumbnailPath.includes('image_not_available')) {
      return null;
    } else {
      return `${thumbnailPath}`;
    }
  };

  getImageHeight = () => {
    if (!this.state.imageUri) {
      return;
    }

    Image.getSize(this.state.imageUri, (realWidth, realHeight) => {
      const newImageHeight = (this.state.imageWidth * realHeight) / realWidth;
      this.setState({imageHeight: newImageHeight});
    });
  };

  render() {
    const {people, onPeoplePress} = this.props;
    const {imageUri, imageWidth, imageHeight} = this.state;

    return (
      <TouchableOpacity onPress={() => onPeoplePress(people)}>
        {imageUri ? (
          <Image
            source={{uri: imageUri}}
            style={[styles.image, {width: imageWidth, height: imageHeight}]}
          />
        ) : (
          <View style={{...styles.placeholderContainer, width: imageWidth}}>
            <Text style={styles.placeholderLabel}>{people?.name || ''}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

PeopleCard.defaultProps = {
  people: null,
  onPeoplePress: () => {},
};

PeopleCard.propTypes = {
  people: PropTypes.object.isRequired,
  onPeoplePress: PropTypes.func,
};

export default PeopleCard;
