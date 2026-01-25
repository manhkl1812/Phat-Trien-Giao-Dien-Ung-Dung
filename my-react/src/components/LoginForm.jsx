import "./LoginForm.css";
import { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Dang Nhan</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Dang Nhap</button>
            </form>
        </div>
    );
}

export default LoginForm;