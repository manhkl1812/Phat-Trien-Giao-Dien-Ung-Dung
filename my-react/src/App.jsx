import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  ProductCard from './components/ProducCard.jsx'
import Button from './components/Button.jsx'
import Alert from './components/Alert.jsx'
import LoginForm from './components/LoginForm.jsx'
import ProductList from './components/ProductList.jsx'

function App() {
  /*Bai tap 1 */

  // return (
  //   <div className="App">
  //     <ProductCard />
  //   </div>
  // )
  /*Bai tap 2 */
  
  //  return (
  //   <div style={{ padding: "40px", display: "flex", gap: "12px" }}>
  //     <Button type="primary">Primary</Button>
  //     <Button type="success">Success</Button>
  //     <Button type="danger">Danger</Button>
  //   </div>
  // );
  /*Bai tap 3 */
  // const [alertType, setAlertType] = useState("");
  // return (
  //   <div style={{ padding: "40px" }}>
  //   <div style={{ display: "flex", gap: "12px" }}>
  //     <Button type="success" onClick={() => setAlertType("thanh cong")}>thanh cong</Button>
  //     <Button type="warning" onClick={() => setAlertType("canh bao")}>canh bao</Button>
  //     <Button type="danger" onClick={() => setAlertType("loi")}>loi</Button>
  //   </div> <Alert type={alertType} tinNhan={`Day la ${alertType}`}/></div>
  // );
  /*Bai tap 4 */
  // return <LoginForm />;
  /*Bai tap 5 */
  return <ProductList />;
}


export default App
