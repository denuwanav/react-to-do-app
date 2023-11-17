import React from "react";

interface Todo {
  text: string;
  complete: boolean;
}

interface ToggleComplete {
  (todo: Todo): void;
}

interface TodoListItemsProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemsProps> = ({ todo, toggleComplete }) => {
  return (
    <li className={todo.complete ? "todo-row completed" : "todo-row"}>
      <label>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete} // Changed TodoListItem.complete to todo.complete
        />
        {todo.text}
      </label>
    </li>
  );
};
