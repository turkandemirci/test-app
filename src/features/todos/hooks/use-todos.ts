import { ITodos } from "../types/todos.type";

export async function fetchServerSideData(): Promise<ITodos> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json()
  );

  return {
    title: res.title,
    userId: res.userId,
  };
}
