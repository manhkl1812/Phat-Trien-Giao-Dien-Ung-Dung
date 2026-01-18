import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  ProductCard from './components/ProducCard.jsx'
import Button from './components/Button.jsx'

function App() {
  /*Bai tap 1 */

  // return (
  //   <div className="App">
  //     <ProductCard />
  //   </div>
  // )
  /*Bai tap 2 */
  
   return (
    <div style={{ padding: "40px", display: "flex", gap: "12px" }}>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
    </div>
  );
}

export default App
