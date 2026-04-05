import { Outlet, Link } from 'react-router-dom';

function Root() {
  return (
    <div>
      <h1>TRANG CHỦ</h1>
      
      <nav style={{ 
        padding: '10px', 
        backgroundColor: '#f0f0f0',
        marginBottom: '20px'
      }}>
        <Link to="/user" style={{ marginRight: '15px' }}>User</Link>
        <Link to="/guest" style={{ marginRight: '15px' }}>Guest</Link>
        <Link to="/product">Product</Link>
      </nav>
      
      <Outlet />
    </div>
  );
}
export default Root;