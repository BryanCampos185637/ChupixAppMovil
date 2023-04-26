import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import {Box, Image} from 'native-base';
import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useFormikContext} from 'formik';

import {IonIcon} from './IonIcon';

interface Props {
  name: string;
}

export const ImageFormik = ({name}: Props) => {
  const {values} = useFormikContext<any>();
  const [uriPhoto, setUriPhoto] = useState(
    'https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg',
  );

  const SetImage = (image: Asset) => {
    setUriPhoto(image.uri!);
    const fileImage = {
      uri: image.uri,
      type: image.type,
      name: image.fileName,
    };
    values[name] = fileImage;
  };

  const takePhotoWithCamera = () => {
    launchCamera({mediaType: 'photo', quality: 0.5}, response => {
      if (response.didCancel) return;
      response.assets?.map(image => SetImage(image));
    });
  };

  const takePhotoWithAlbum = () => {
    launchImageLibrary({mediaType: 'photo', quality: 0.5}, response => {
      if (response.didCancel) return;
      response.assets?.map(image => SetImage(image));
    });
  };

  return (
    <Box justifyContent={'center'}>
      <Image
        size={250}
        borderRadius={200}
        source={{
          uri: uriPhoto,
        }}
        alt={`Text`}
      />
      <Box flexDirection={'row'} justifyContent={'center'}>
        <TouchableOpacity activeOpacity={0.6} onPress={takePhotoWithCamera}>
          <IonIcon name="camera" size={40} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={takePhotoWithAlbum}>
          <IonIcon name="image" size={40} />
        </TouchableOpacity>
      </Box>
    </Box>
  );
};
