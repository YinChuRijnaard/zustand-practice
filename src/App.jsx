const App = () => {
  return (
    <main className="mx-16 my-16 space-y-8 text-center">
      <h1 className="text-4xl">A simple counter app</h1>
      <h2 className="italic">State managed using Zustand 🐻</h2>

      <hr />

      <p className="text-4xl">0</p>

      <div className="space-x-8 text-2xl">
        <button className="h-16 w-16 rounded-full bg-red-500">-</button>
        <button className="h-16 w-16 rounded-full bg-green-500">+</button>
      </div>
    </main>
  );
};

export default App;
