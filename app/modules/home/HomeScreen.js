import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { Container } from 'native-base'
import styles from './styles/HomeScreenStyle';
import CustomHeader from '../../components/CustomHeader';
import { Strings } from '../../constants';
import { useSelector, useDispatch } from 'react-redux'
import AddUpdateTodoModal from '../../components/AddUpdateTodoModal';
import { UPDATE_TODO, DELETE_TODO } from '../../redux/types';
import { getNewTodo } from '../../services/todoService';
import TodosItem from '../../components/TodosItem';
import { Colors } from '../../theme';

const HomeScreen = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [todo, setTodo] = useState(null)
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()
  const closeModal = () => setIsModalVisible(false)
  const showModal = () => setIsModalVisible(true)
  const onUpdateTodo = (t) => dispatch({type: UPDATE_TODO, todo: t})
  const onDeleteTodo = (t) => dispatch({type: DELETE_TODO, id: t.id})
  const keyExtractor = (item) => item.id;
  const onPressAddTodo = () => {
    const newTodo = getNewTodo('')
    setTodo(newTodo)
    showModal()
  }
  const renderItem = ({ item }) => (
    <View style={{height: 100, backgroundColor: Colors.primary}}>
    <TodosItem
      item={item}
      onRemove={onDeleteTodo}
    />
    </View>
  )

  return (
    <Container>
      <CustomHeader
        title={Strings.todos}
      />
      <TouchableOpacity onPress={onPressAddTodo}>
        <Text>{Strings.addTodo}</Text>
      </TouchableOpacity>
      <View style={styles.todosContainer}>
        <FlatList
          data={todos}
          contentContainerStyle={styles.listContainerStyle}
          keyExtractor={this.keyExtractor}
          renderItem={renderItem}
        />
      </View>
      {isModalVisible && (
        <AddUpdateTodoModal
          title={Strings.todo}
          item={todo}
          onClose={closeModal}
          onPress={onUpdateTodo}

        />
      )}
    </Container>
  );

}

export default HomeScreen;
