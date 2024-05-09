import NavBar from "@/components/nav-bar";
import TestTransaction from "./test";
import CreateStore from "./test2";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex w-full items-center justify-end p-3 px-4">
        <NavBar />
        <p>Hello</p>
        <TestTransaction />
        <CreateStore />
      </div>
    </main>
  );
}
