import Accordion from "./components/Accordion/Accordion";
import Search from "./components/Search/Search";
import DropDown from "./components/DropDown/DropDown";
import { useState } from "react";
const items = [
  {
    title: "What is react",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React ?",
    content: "React is a favorite JS library",
  },
  {
    title: "How using React",
    content: "With component",
  },
];

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <DropDown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
