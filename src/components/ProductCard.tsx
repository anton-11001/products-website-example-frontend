import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-thumbnail"
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-brand">{product.brand}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-details">
          <span className="product-price">${product.price}</span>
          {product.discountPercentage > 0 && (
            <span className="product-discount">
              -{product.discountPercentage}%
            </span>
          )}
          <span className="product-rating">⭐ {product.rating}</span>
        </div>
        <p className="product-stock">In stock: {product.stock}</p>
      </div>
    </div>
  );
}
