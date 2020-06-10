import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import Styles from './Style';
import { Icon } from 'react-native-elements';

const ImageView = props => {
  const { images, selectedImage } = props;
  console.log('selected image:', images);

  return (
    <View>
      <View style={Styles.imageContainer}>
        {!!images && (
          <Image
            source={{ uri: images[selectedImage].src }}
            style={Styles.image}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent:
            !!images && (images.length === 2 || images.length === 5)
              ? 'flex-start'
              : 'space-between',
          // alignContent: 'flex-start',
        }}>
        {!!images &&
          images.length > 0 &&
          images.map((item, index) => {
            console.log(item);
            return (
              <View
                style={[
                  Styles.thumbnailContainer,
                  {
                    marginRight:
                      (index % 3 === 0 &&
                        (images.length === 2 || images.length === 5)) ||
                      (images.length === 5 && index === 1)
                        ? 8
                        : 0,
                  },
                ]}>
                <TouchableOpacity
                  onPress={() => props.updateState({ selectedImage: index })}
                  style={Styles.thubImageView}>
                  <Image source={{ uri: item.src }} style={Styles.thumImage} />
                </TouchableOpacity>
              </View>
            );
          })}
      </View>
    </View>
  );
};

export default ImageView;
