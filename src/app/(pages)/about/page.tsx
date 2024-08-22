import Todos from "@/features/todos/components/todos";

export default async function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      about
      <img src="./img.png" alt="My Image" width={500} height={300} />
      <Todos></Todos>
    </main>
  );
}
