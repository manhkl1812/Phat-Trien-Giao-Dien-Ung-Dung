import React, {useState , useEffect} from "react";
function API(){

    const [users, setUsers] = useState([]);
    const [newusers, setNewUsers] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");

    // const handleChange = (e) => {
    //     const keyword = e.target.value.toLowerCase();
    //     setSearch(keyword);
    //     const filteredPost = posts.filter(post => post.title.toLowerCase().includes(keyword));
    //     setFiltered(filteredPost);
    // }
    // useEffect(() =>{
    //     // fetch('https://jsonplaceholder.typicode.com/users')
    //     // .then(reponse => reponse.json())
    //     // .then(data => setUsers(data))
    //     // .catch(err => console.log(err))
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true);
    //             const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //             if(!res) throw new Error("Network response was not ok");
    //             const data = await res.json();
    //             setTimeout(() => {
    //                 setPosts(data);
    //                 setFiltered(data);
    //                 setLoading(false);

    //             }, 2000);
    //         } catch (error) {  
    //             setError(error.message);             
    //         }
    //     }
    //     fetchData();
    // }, [])

    // const handleChange = (e) => {
    //     const user = e.target.value;
    //     setUsers(user);
    // }
    //
    const handleSearch = (e) =>{
        const keyword = e.target.value.toLowerCase();
        setSearch(keyword);
        const filteredUser = users.filter(user => user.name.toLowerCase().includes(keyword));
        setFiltered(filteredUser);
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch ('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
                setFiltered(data);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    //Post
    const handleAdd = async (e) => {
        e.preventDefault();
        if(!newusers.trim()) return;
        const user = {name: newusers}
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(user)
            })
            if(!response.ok)    throw new Error("Failed to add user");
            const data = await response.json();
            setUsers(users => [...users, data]);
            setNewUsers("");
            
        } catch (error) {
            console.log(error);
            
        }

    }
    //Delete
    const handleDelte = async (id) =>{
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{method: 'DELETE'})
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.log(error);
        }


    }

    //Search 
    
    return(<div>
        <h1>List User</h1>
        <input type = "text" value= {newusers} onChange={(e) => setNewUsers(e.target.value)}></input>3]
        <button onClick={handleAdd}>Add</button>
         <button onClick={() => handleDelte(user.id)}>Delete</button>
        {users.map(user => (
            <p key={user.id}>Name: {user.name}            

            </p>
            
        ))}





    </div>)


    // return(<div>
    //     <h1>List User</h1>
    //     {loading && <p>Loading...</p>}
    //     {error && <p>Error: {error}</p>}
    //     <input type = "text" value = {search} onChange={handleChange}></input>
    //     {!loading && !error && (
    //         <div>
    //             {filtered.map(post => (
    //                 <p key={post.id}>Title: {post.title}</p>
    //             ))}
    //         </div>
    //     )}
    // </div>)

    

    // const [todos, setTodos] = useState([]);
    // const [newToDo, setNewToDo] = useState("");
    // const [loading,setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // //GET
    // useEffect(()=>{
    //     const fetchTodos = async () =>{
    //             try {
    //                 const response = await fetch('http://localhost:3001/todos');
    //                 const data = await response.json();
    //                 setTodos(data);
                    
    //             } catch (error) {
    //                 setError(error.message);
                    
    //             } finally {
    //                 setLoading(false);                
    //         }
    //     }        
    //     fetchTodos();
    // },[])
//ADD
    // const handleAdd = async (e) =>{
    //     e.preventDefault();
    //     if(!newToDo.trim()) return;
    //     const todo = {title: newToDo};
    //     try {
    //         const  response = await fetch('http://localhost:3001/todos',{
    //             method: 'POST',
    //             headers: {"Content-Type": "application/json"},
    //             body: JSON.stringify(todo)
    //         });
    //         if(!response.ok) throw new Error("Failed to add todo"); 
    //         const data = await response.json();  
    //         setTodos([...todos, data]);
    //         setNewToDo("");

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    



    }

    // return (<div>
    // <h1>Todo List</h1>
    // <input type = "text" value={newToDo} onChange={(e) => setNewToDo(e.target.value)}></input>
    // <button onClick={handleAdd}>Add</button>

    // {todos.map(todo => (
    //     <p key = {todo.id}>title: {todo.title}</p>
    // ))}



    // </div>)

export default API;