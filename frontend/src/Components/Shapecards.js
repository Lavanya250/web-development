import React from 'react';
import './Shapecards.css'; // Import the CSS file for styling
import Categoriesbar from './Categoriesbar';
import Footer from './Footer';
import { useCart } from './Cartcontext';

const products = [
  { id: 1, name: 'Product 1', brand: 'Brand A', kg: '1kg', price: '$10', image: 'https://cdn.ecommercedns.uk/files/9/252449/9/38242799/download-7.jpg' },
  { id: 2, name: 'Product 2', brand: 'Brand B', kg: '2kg', price: '$20', image: 'https://cdn.britannica.com/72/170772-050-D52BF8C2/Avocado-fruits.jpg' },
  { id: 3, name: 'Product 3', brand: 'Brand C', kg: '1.5kg', price: '$15', image: 'https://chemwatch.net/wp-content/uploads/2021/11/image-6.jpeg' },
  { id: 4, name: 'Product 4', brand: 'Brand D', kg: '3kg', price: '$30', image: 'https://m.media-amazon.com/images/I/31o6kOLfraS._AC_UF1000,1000_QL80_.jpg' },
  { id: 5, name: 'Product 5', brand: 'Brand E', kg: '1kg', price: '$10', image: 'https://cdn.ecommercedns.uk/files/7/237157/0/39713730/red-banana.jpg' },
  { id: 6, name: 'Product 6', brand: 'Brand F', kg: '2kg', price: '$20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9x8v5sUJt9qUVVrE8lLwquMV8J0ffXtunLg&s' },
  { id: 7, name: 'Product 7', brand: 'Brand G', kg: '1.5kg', price: '$15', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg' },
  { id: 8, name: 'Product 8', brand: 'Brand H', kg: '3kg', price: '$30', image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg' },
  { id: 9, name: 'Product 9', brand: 'Brand I', kg: '1kg', price: '$10', image: 'https://ripeme.com/wp-content/uploads/potato.jpg' },
  // Add more products as needed
];

function Shapecards() {
  const { addToCart } = useCart(); // Get addToCart function from context

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to the cart
  };

  return (
    <div className="page-container1">
      <Categoriesbar />
      <div className="product-cards-container1">
        {products.map(product => (
          <div className="product-card1" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info1">
              <span className="product-name1">{product.name}</span>
              <span className="product-brand">{product.brand}</span>
              <span className="product-kg">{product.kg}</span>
              <span className="product-price1">{product.price}</span>
              <div className="product-buttons1">
                <button className="add-to-cart1" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                <button className="buy-now1">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Shapecards;
