import React from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native'
import { Card, CardItem } from 'native-base'
import styles from './styles/TodosItemStyles'

const TodosItem = ({ item, onRemove }) => {

  const onPressRemove = () => {
    const { onRemove, item } = props
    onRemove(item)
  }

  return (
    <Card style={styles.containerStyle}>
      <CardItem button style={styles.cardItemStyle} onPress={this.onItemPress}>
        <Text>{item.description}</Text>
        <TouchableOpacity styleonPress={onPressRemove}>
          <Text>X</Text>
        </TouchableOpacity>
      </CardItem>
    </Card>
  )
}

TodosItem.propTypes = {
  item: PropTypes.object,
  onRemove: PropTypes.func,
}

export default TodosItem
