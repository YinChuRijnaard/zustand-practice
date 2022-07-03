// @ts-nocheck
import useStore from "./store/CounterStore";

const App = () => {
  const { count, decrementCount, incrementCount, resetCount } = useStore();

  return (
    <main className="mx-16 my-16 space-y-8 text-center">
      <h1 className="text-4xl">A &#40;very&#41; simple counter app</h1>
      <h2 className="italic">
        State managed using&nbsp;
        <a
          className="underline"
          href="https://github.com/pmndrs/zustand"
          target="_blank"
          rel="noreferrer"
        >
          Zustand
        </a>
        &nbsp; 🐻
      </h2>

      <hr />

      <p className="text-4xl">{count}</p>

      <div className="space-x-8 text-2xl">
        <button
          className="h-16 w-16 rounded-full bg-red-500"
          onClick={decrementCount}
        >
          -
        </button>
        <button
          className="h-16 w-16 rounded-full bg-green-500"
          onClick={incrementCount}
        >
          +
        </button>
      </div>

      <button
        className="rounded bg-gray-500 px-4 py-2 font-bold uppercase text-white"
        onClick={resetCount}
      >
        Reset
      </button>
    </main>
  );
};

export default App;
