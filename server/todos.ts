import { Todo } from "@/types";
const wait = (ms: number = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const todos: Todo[] = [
  {
    id: "1",
    label: "Todo 1",
  },
];

export const getAllTodos = async () => {
  return todos;
};

export const addTodo = async ({ label }: { label: string }): Promise<Todo> => {
  const newTodo = {
    id: (todos.length + 1).toString(),
    label,
  };
  await wait();
  todos.push(newTodo);
  return newTodo;
};

export const deleteTodo = async ({ id }: { id: string }): Promise<Todo> => {
  const index = todos.findIndex((todo) => todo.id === id);
  const deletedTodo = todos[index];
  todos.splice(index, 1);
  await wait();
  return deletedTodo;
};
