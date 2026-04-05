import { NavLink } from 'react-router-dom';

function NavLinkMenu() {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#ffffff' }}>
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            marginRight: '15px',
            color: isActive ? 'red' : 'black',
            fontWeight: isActive ? 'bold' : 'normal',
            backgroundColor: isActive ? '#ffebee' : 'transparent',
          })}
        >
        Trang chủ
        </NavLink>
        
        <NavLink 
          to="/products"
          style={({ isActive }) => ({
            marginRight: '15px',
            color: isActive ? 'red' : 'black',
            backgroundColor: isActive ? '#ffebee' : 'transparent',
          })}
        >
          Sản phẩm
        </NavLink>
        
        <NavLink 
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'black',
            backgroundColor: isActive ? '#ffebee' : 'transparent',
          })}
        >
        Giới thiệu
        </NavLink>
      </nav>
    </div>
  );
}
export default NavLinkMenu;