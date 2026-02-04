import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button.jsx'
import Alert from './components/Alert.jsx'
import TitleChanger from './components/useEffect.jsx'
import UseRefDemo from './components/useRef.jsx'
import UseReducerDemo from './components/useReducer.jsx'
import { ThemeContext } from "./components/them.jsx";
import UseContextDemo from "./components/useContext.jsx";

function App() {

  /*Bai tap review 1 hook useState */
  // const [alertType, setAlertType] = useState("");
  // return (
  //   <div style={{ padding: "40px" }}>
  //   <div style={{ display: "flex", gap: "12px" }}>
  //     <Button type="success" onClick={() => setAlertType("thanh cong")}>thanh cong</Button>
  //     <Button type="warning" onClick={() => setAlertType("canh bao")}>canh bao</Button>
  //     <Button type="danger" onClick={() => setAlertType("loi")}>loi</Button>
  //   </div> <Alert type={alertType} tinNhan={`Day la ${alertType}`}/></div>
  // );
    /*Bai tap review 1 hook useEffect */
  // return <TitleChanger />;
    /*Bai tap review 1 hook useRef */
  // return <UseRefDemo />;
    /*Bai tap review 1 hook useReducer */
  return <UseReducerDemo />;
  /*Bai tap review 1 hook useCOntext */
  // return (
  //   <ThemeContext.Provider value={"dark"}>
  //     <UseContextDemo />
  //   </ThemeContext.Provider>
  // );




}


export default App
