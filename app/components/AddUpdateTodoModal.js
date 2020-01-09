import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Text,
  Image,
} from 'react-native';
import {Card, CardItem} from 'native-base';
import styles from './styles/AddUpdateTodoModalStyles';
import {Images} from '../theme';
import {Strings} from '../constants';

const AddUpdateTodoModal = ({title, item, onPress, onClose}) => {
  const [description, setDescription] = useState(item.description);

  const onPressButton = () => {
    onPress({...item, description});
    onClose();
  };

  const onClearText = () => {
    setDescription('');
  };

  return (
    <KeyboardAvoidingView
      style={[styles.fullScreenModalContainerStyle]}
      behavior="padding"
      enabled>
      <Card style={styles.containerStyle}>
        <View style={styles.titleBoxViewStyle}>
          <View style={styles.titleViewStyle}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <TouchableOpacity
            style={styles.closeIconButtonStyle}
            onPress={onClose}>
            <View style={styles.closeIconViewStyle}>
              <Image
                source={Images.closeIconBlue}
                style={styles.closeIconStyle}
              />
            </View>
          </TouchableOpacity>
        </View>
        <CardItem button style={styles.cardItemStyle}>
          <TextInput
            style={styles.inputContainer}
            multiline
            numberOfLines={4}
            onChangeText={setDescription}
            value={description}
          />
          {description.length > 0 && (
            <TouchableOpacity onPress={onClearText}>
              <Text>X</Text>
            </TouchableOpacity>
          )}
        </CardItem>
        {onPress && (
          <TouchableOpacity onPress={onPressButton}>
            <Text>{Strings.done}</Text>
          </TouchableOpacity>
        )}
      </Card>
    </KeyboardAvoidingView>
  );
};

AddUpdateTodoModal.propTypes = {
  title: PropTypes.string,
  item: PropTypes.object,
  onPress: PropTypes.func,
  onClose: PropTypes.func,
};

export default AddUpdateTodoModal;
