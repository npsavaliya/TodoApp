export const isEmptyObject = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

export const getNewTodo = description => {
  return {id: `TODO${new Date().getTime()}`, description};
};

export const onUpdateTodo = (todos, todo) => {
  if (!Array.isArray(todos) && isEmptyObject(todo)) {
    return todos;
  }
  const todoIdToModify = todo.id ? todo.id : null;
  let isNew = true;
  let updatedTodos = todos.map(e => {
    const modifiedTodo = {...todo};
    if (todoIdToModify && e.id && todoIdToModify === e.id) {
      isNew = false;
      return modifiedTodo;
    }
    return e;
  });
  if (isNew) {
    updatedTodos = [...updatedTodos, todo];
  }
  return updatedTodos;
};

export const onDeleteTodo = (todos, id) => {
  if (!Array.isArray(todos)) {
    return todos;
  }
  const updatedTodos = todos.filter(e => e.id !== id);
  return updatedTodos;
};
