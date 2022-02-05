import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import styles from './styles';

class Details extends Component {
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
    Image.getSize(this.state.imageUri, (realWidth, realHeight) => {
      const newImageHeight = (this.state.imageWidth * realHeight) / realWidth;
      this.setState({imageHeight: newImageHeight});
    });
  };

  render() {
    const {people} = this.props;
    const {imageUri, imageWidth, imageHeight} = this.state;

    return (
      <View style={styles.container}>
        <Image
          source={{uri: imageUri}}
          style={[styles.image, {width: imageWidth, height: imageHeight}]}
        />
        <Text style={styles.name}>{people?.name || ''}</Text>
        <Text style={styles.nick}>{people?.nickname || ''}</Text>
        <Text style={styles.title}>Fecha de nacimiento</Text>
        <Text style={styles.text}>{people?.birthday || ''}</Text>
        <Text style={styles.title}>Estado actual</Text>
        <Text style={styles.text}>{people?.status || ''}</Text>
      </View>
    );
  }
}

export default Details;
