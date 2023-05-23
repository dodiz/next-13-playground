import { dehydrate, Hydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils";
import { getAllTodos } from "@/server";
import { Posts } from "./Todos";
import { AddTodo } from "./AddTodo";

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["todos"], getAllTodos);
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <Posts />
      <AddTodo />
    </Hydrate>
  );
}
