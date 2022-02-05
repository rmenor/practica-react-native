import React, {useState, useCallback} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {launchImageLibrary} from 'react-native-image-picker';
import Input from '../../forms/input';
import Button from '../../forms/button';
import styles from './styles';

const PeopleAdd = ({people, onSubmit, loading}) => {
  const [img, setImage] = useState(people?.img ? {uri: people?.img} : null);
  const [name, setName] = useState(people?.name || '');
  const [birthday, setBirthday] = useState(people?.birthday?.toString() || '');
  const [errors, setErrors] = useState({});

  const validateForm = useCallback(() => {
    let valid = true;
    let newErrors = {};

    if (!img) {
      newErrors.image = 'seleccione una imagen';
      valid = false;
    }

    if (!name) {
      newErrors.name = 'campo obligatorio';
      valid = false;
    }

    if (!birthday) {
      newErrors.birthday = 'campo obligatorio';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }, [img, name, birthday]);

  const onSubmitForm = useCallback(() => {
    const valid = validateForm();
    if (!valid) {
      return;
    }

    const data = {
      img: img?.base64 ? `data:image/jpeg;base64,${img?.base64}` : null,
      name: name,
      birthday: birthday,
    };
    onSubmit(data);
  }, [img, name, birthday, onSubmit, validateForm]);

  const onOpenImageLibrary = () => {
    const imageOptions = {
      mediaType: 'photo',
      maxWidth: 1280,
      maxHeight: 1280,
      includeBase64: true,
    };
    launchImageLibrary(imageOptions, media => {
      if (media.assets?.length) {
        setImage(media.assets[0]);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingScrollView>
        <Input
          label={'Nombre: '}
          placeholder={'Nombre del personaje...'}
          value={name}
          onChangeText={setName}
          style={styles.input}
          error={errors?.name}
        />

        <Input
          label={'Fecha nacimiento: '}
          placeholder={'Fecha de nacimiento...'}
          value={birthday}
          onChangeText={setBirthday}
          style={styles.input}
          error={errors?.birthday}
          keyboardType="numeric"
        />

        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.imageButtonContainer}
            onPress={onOpenImageLibrary}>
            {img ? (
              <Image style={styles.image} source={{uri: img.uri}} />
            ) : null}
            <View style={styles.imageButton}>
              <Text style={styles.imageButtonLabel}>
                {img ? 'Editar imagen' : 'Seleccionar imagen'}
              </Text>
            </View>
          </TouchableOpacity>
          {errors?.img ? (
            <Text style={styles.error}>{'seleccione una imagen'}</Text>
          ) : null}
        </View>

        <Button
          label={people ? 'Editar' : 'Crear'}
          loading={loading}
          onPress={onSubmitForm}
        />
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  );
};

export default PeopleAdd;
