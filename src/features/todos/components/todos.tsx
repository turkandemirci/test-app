import { fetchServerSideData } from "../hooks/use-todos";

export default async function Todos() {
  const serverData = await fetchServerSideData();

  return <div>{serverData.title}</div>;
}
