import useLocalStorage from "./hooks/useLocalStorage";
import { convertCurrency } from "./helper/index";
import useCounter from "./hooks/useCount";
import useCopy from "./hooks/useCopy";
import useCustomLocalStorage from "./hooks/useCustomLocalStorage";
import { Index } from "./pages";
import Debounce from "./pages/Debounce";
function App() {
  const [state, setState] = useLocalStorage("user", {
    name: "Nabin",
    age: 19,
    email: "nabin@gmail.com",
  });

  console.log(convertCurrency(123000.57));

  const [copyText, setCopyText] = useCopy();

  const [data, setData] = useCustomLocalStorage("credential", {
    name: "Nabin",
    profession: "coder",
  });

  return (
    <div className="container flex flex-col w-full h-full justify-center items-center">
      <p>{state?.name}</p>
      <p>{state?.age}</p>
      <p>{state?.email}</p>
      <button
        className="text-md uppercase bg-purple-600 rounded-md py-2 w-auto text-white"
        onClick={() =>
          setState({ name: "john", age: 40, email: "john@gmail.com" })
        }
      >
        set data
      </button>

      <button onClick={() => setCopyText("This is copied text")}>
        copy these
      </button>
      <button onClick={() => setCopyText("coder are amazing ...")}>
        copy to clipboard
      </button>
      <p>{copyText ?? "nothing copied"}</p>
      <button
        onSubmit={() => setData({ name: "Nabin", profession: "programmer" })}
      >
        store in local db
      </button>

      <Index />
      <Debounce />
    </div>
  );
}

export default App;
