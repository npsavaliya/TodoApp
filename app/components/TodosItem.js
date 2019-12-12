import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';
import {Card, CardItem} from 'native-base';
import styles from './styles/TodosItemStyles';

const TodosItem = ({item, onRemove}) => {
  const onPressRemove = () => {
    onRemove(item);
  };

  return (
    <Card style={styles.containerStyle}>
      <CardItem button style={styles.cardItemStyle} onPress={this.onItemPress}>
        <Text>{item.description}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={onPressRemove}>
          <Text>X</Text>
        </TouchableOpacity>
      </CardItem>
    </Card>
  );
};

TodosItem.propTypes = {
  item: PropTypes.object,
  onRemove: PropTypes.func,
};

export default TodosItem;
