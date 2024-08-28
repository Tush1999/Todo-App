export const getTodoMapping = (todos) =>
  todos.reduce((mapping, task) => {
    const { status } = task;
    mapping[status] = mapping[status] ? [...mapping[status], task] : [task];
    return mapping;
  }, {});
