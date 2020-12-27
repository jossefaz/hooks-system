import Accordion from "./Accordion/Accordion";

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
const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
