import React, {useState} from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import {Container} from 'native-base';
import styles from './styles/HomeScreenStyle';
import CustomHeader from '../../components/CustomHeader';
import {Strings} from '../../constants';
import {useSelector, useDispatch} from 'react-redux';
import AddUpdateTodoModal from '../../components/AddUpdateTodoModal';
import {UPDATE_TODO, DELETE_TODO, UPDATE_REDUX_SAUCE_TODO, DELETE_REDUX_SAUCE_TODO} from '../../redux/types';
import {getNewTodo} from '../../services/todoService';
import TodosItem from '../../components/TodosItem';
import { Metrics } from '../../theme';

const HomeScreen = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [todo, setTodo] = useState(null);
  const appState = useSelector(state => state);
  const dispatch = useDispatch();
  const closeModal = () => setIsModalVisible(false);
  const showModal = () => setIsModalVisible(true);
  const onUpdateTodo = t =>
    dispatch({
      type: appState.selectReducer.isReduxSauce
        ? UPDATE_REDUX_SAUCE_TODO
        : UPDATE_TODO,
      todo: t,
    });
  const onDeleteTodo = t =>
    dispatch({
      type: appState.selectReducer.isReduxSauce
        ? DELETE_REDUX_SAUCE_TODO
        : DELETE_TODO,
      id: t.id,
    });
  const keyExtractor = item => item.id;
  const onPressAddTodo = () => {
    const newTodo = getNewTodo('');
    setTodo(newTodo);
    showModal();
  };
  const renderItem = ({item}) => (
    <TodosItem item={item} onRemove={onDeleteTodo} />
  );

  const getTodos = () => {
    const todos = appState.selectReducer.isReduxSauce
      ? appState.reduxSauceTodos.todos
      : appState.regularReduxTodos.todos;
    return todos;
  };

  return (
    <Container>
      <CustomHeader title={Strings.todos} />
      <TouchableOpacity
        style={[styles.button, {width: 150, margin: Metrics.doubleBaseMargin}]}
        onPress={onPressAddTodo}>
        <Text style={styles.buttonText}>{Strings.addTodo}</Text>
      </TouchableOpacity>
      <View style={styles.todosContainer}>
        <FlatList
          data={getTodos()}
          contentContainerStyle={styles.listContainerStyle}
          keyExtractor={keyExtractor}
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
};

export default HomeScreen;
