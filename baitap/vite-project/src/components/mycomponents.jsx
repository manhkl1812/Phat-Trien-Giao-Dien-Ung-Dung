import React, {useState} from "react";


function Mycomponents(){
    const [user, setUser] = useState({
        name : "",
        email : "",
        age : ""
    });

    const handleChange =(e) => {
        const [name, value] = e.target;
        setUser({...user, [name]: value});
    } 


    return (<div>
        <p>Name : {user.name}</p>
        <p>Email : {user.email}</p>
        <p>Age : {user.age}</p>
        <div>
            <lable >Name:</lable>
            <input type = "text" name = "name" value = {user.name} onChange={handleChange} />
            <br></br>
            <lable >Email:</lable>
            <input type = "email" name = "email" value = {user.email} onChange={handleChange} />
            <br></br>
            <lable >Age:</lable>
            <input type = "number" name = "age" value = {user.age} onChange={handleChange} />
            <br></br>
            <button type="submit">Submit</button>
        </div>
        


    </div>)


}
export default Mycomponents;