//Fetch API - GET, POST, DELETE
//lay danh sach user
function getUsers() {
    //
  fetch("https://jsonplaceholder.typicode.com/users")
  // du lieu nhan duoc
  // chuyen doi du lieu sang dang json
    .then(res => res.json())
    .then(data => console.log("GET:", data));
}
//them user
function addUser() {
  fetch("https://jsonplaceholder.typicode.com/users", {
    // Phuong thuc POST
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Du lieu gui di
    // Chuyen doi du lieu sang dang chuoi JSON
    body: JSON.stringify({
      name: "Test User",
      email: "test@gmail.com",
    }),
  })
    .then(res => res.json())
    .then(data => console.log("POST:", data));
}
//xoa user
function deleteUser() {
  fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "DELETE",
    
  }).then(() => console.log("DELETE done"));
}
