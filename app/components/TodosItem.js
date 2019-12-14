import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';
import {Card, CardItem} from 'native-base';
import styles from './styles/TodosItemStyles';

const TodosItem = ({item, onRemove, onItemPress}) => {
  const onPressRemove = () => {
    onRemove(item);
  };

  const onPressItem = () => {
    onItemPress(item);
  };

  return (
    <Card style={styles.containerStyle}>
      <CardItem button style={styles.cardItemStyle} onPress={onPressItem}>
        <Text>{item.description}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={onPressRemove}>
          <Text style={styles.deleteText}>X</Text>
        </TouchableOpacity>
      </CardItem>
    </Card>
  );
};

TodosItem.propTypes = {
  item: PropTypes.object,
  onItemPress: PropTypes.func,
  onRemove: PropTypes.func,
};

export default TodosItem;
