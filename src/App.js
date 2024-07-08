import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyWord, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = function () {
    setValue(counter + 1);
  };
  console.log("counter is update"); //state가 변경될 때마다 실행
  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    if (keyWord !== "" && keyWord.length > 5) {
      console.log("SERCH FOR: ", keyWord);
    }
  }, [keyWord]);
  return (
    <div>
      <input
        type="text"
        placeholder="serch here..."
        value={keyWord}
        onChange={onChange}
      />
      <h1 className={styles.title}>클릭 한 횟수: {counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
