import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  ProductCard from './components/ProducCard.jsx'
import Button from './components/Button.jsx'
import Alert from './components/Alert.jsx'
import LoginForm from './components/LoginForm.jsx'
import ProductList from './components/ProductList.jsx'
import TitleChanger from '../../baitap/vite-project/src/components/useEffect.jsx'
import UseRefDemo from '../../baitap/vite-project/src/components/useRef.jsx'
import UseReducerDemo from '../../baitap/vite-project/src/components/useReducer.jsx'
import { ThemeContext } from "../../baitap/vite-project/src/components/them.jsx";
import UseContextDemo from "../../baitap/vite-project/src/components/useContext.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductLists from './components/ProductLists';
import LinkMenu from './components/link.jsx';
import NavlinkMenu from './components/Navlink.jsx';
function Home() {
  return <h3>Trang chủ</h3>;
}

function Products() {
  return <h3>Trang sản phẩm</h3>;
}

function About() {
  return <h3>Giới thiệu</h3>;
}
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
  // return <UseReducerDemo />;
  /*Bai tap review 1 hook useCOntext */
  // return (
  //   <ThemeContext.Provider value={"dark"}>
  //     <UseContextDemo />
  //   </ThemeContext.Provider>
  // );

  // return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/home" element={<Home />} />
  //         <Route path="/products" element={<ProductLists />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );








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
  
  /*Bai tap 4 */
  // return <LoginForm />;
  /*Bai tap 5 */
  // return <ProductList />;
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <LinkMenu />
        <hr />
        <NavlinkMenu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App
