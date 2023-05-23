"use client";

import { deleteTodo, getAllTodos } from "@/server";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const Posts = () => {
  const queryClient = useQueryClient();
  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
  });
  const mutation = useMutation({
    mutationKey: ["deleteTodo"],
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
  if (isLoading) return null;
  return (
    <div className="flex flex-col gap-4 p-8">
      {todos?.map((todo) => (
        <div key={todo.id} className="flex justify-between gap-2">
          <h1 className="text-2xl font-bold">{todo.label}</h1>
          <div
            className="text-red-600 hover:text-red-300 cursor-pointer"
            onClick={() =>
              mutation.mutate({
                id: todo.id,
              })
            }
          >
            {mutation.variables?.id === todo.id && mutation.isLoading
              ? "Deleting..."
              : "Delete"}
          </div>
        </div>
      ))}
    </div>
  );
};
