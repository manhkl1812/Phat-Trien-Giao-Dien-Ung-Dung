import React, {useState} from "react";

function Asd (){
   const [name, setName] = useState("");


   const handleChange =(e) => {
    setName(e.target.value);
   }

   return(<div>
    <p>Name : {name}</p>
    <input type = "text" value = {name} onChange={handleChange}></input>
    


   </div>)



}
export default Asd;