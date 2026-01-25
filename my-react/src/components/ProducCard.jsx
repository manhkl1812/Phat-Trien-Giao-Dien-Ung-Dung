import "./ProductCard.css";
import reactLogo from '../assets/ao.jpg';
function ProductCard() {
  return (
    <div className="product-card">
      <img src={reactLogo} alt="Product" className="product-image"/>
      <h3 className="product-name">Áo thun nam</h3>
      <p className="product-price">199.000đ</p>
      <button className="add-btn">Mua</button>
    </div>
  );
}

export default ProductCard;
