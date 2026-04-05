import { Link } from 'react-router-dom';

function LinkMenu() {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#ffffff' }}>
        <Link to="/" style={{ marginRight: '15px' }}> Trang chủ</Link>
        <Link to="/products" style={{ marginRight: '15px' }}> Sản phẩm</Link>
        <Link to="/about"> Giới thiệu</Link>
      </nav>
    </div>
  );
}
export default LinkMenu;