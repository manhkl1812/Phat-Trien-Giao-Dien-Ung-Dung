import ProductCard from "./ProducCard";
import "./ProductList.css";


function ProductList() {
    return (
        <div className="product-list">
            <ProductCard name="SP 1" price={100000} />
            <ProductCard name="SP 2" price={200000} />
            <ProductCard name="SP 3" price={300000} />
        </div>
    );
}
export default ProductList;