import { useContext } from "react";
import { ThemeContext } from "./them.jsx";

function UseContextDemo() {
  const theme = useContext(ThemeContext);

  return <h3>Theme hien tai: {theme}</h3>;
}

export default UseContextDemo;
