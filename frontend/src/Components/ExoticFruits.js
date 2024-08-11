import React from 'react';
import './ExoticFruits.css'; // Import the CSS file for styling
import Categoriesbar from './Categoriesbar';
import Footer from './Footer';
import { useCart } from './Cartcontext';


const products = [
  { id: 1, name: 'Product 1', brand: 'Brand A', kg: '1kg', price: '$10', image: 'https://skinkraft.com/cdn/shop/articles/Evidence-Based_0c2e7cf7-9a14-438f-a65b-ab7cce47c279_1024x400.jpg?v=1642487732' },
  { id: 2, name: 'Product 2', brand: 'Brand B', kg: '2kg', price: '$20', image: 'https://bk.brooklynfare.com/cdn/shop/products/3338322201_25bcd33d-fa0c-4aa1-b991-03093b79bda9.jpg?v=1675651086' },
  { id: 3, name: 'Product 3', brand: 'Brand C', kg: '1.5kg', price: '$15', image: 'https://www.qualityfood.ae/cdn/shop/products/dragon-fruit-500g-895134_grande.jpg?v=1672843094' },
  { id: 4, name: 'Product 4', brand: 'Brand D', kg: '3kg', price: '$30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gvmvwdCqQ58dsw32DJMnajNmIG6C6SlfbTOGmQtK67Itz0nU0-wjP1APDVqjZM5RNzU&usqp=CAU' },
  { id: 5, name: 'Product 5', brand: 'Brand E', kg: '1kg', price: '$10', image: 'https://nearlynakedveg.co.uk/cdn/shop/products/Depositphotos_3846311_S.jpg?v=1681391583' },
  { id: 6, name: 'Product 6', brand: 'Brand F', kg: '2kg', price: '$20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3h9w-DgwrsyRcZRv_AQ2VH1LbmA45EI4YYfq2TeD6z-ogbSwSXgxE9g683qnu6XKFR4&usqp=CAU' },
  { id: 7, name: 'Product 7', brand: 'Brand G', kg: '1.5kg', price: '$15', image: 'https://5.imimg.com/data5/SELLER/Default/2024/4/413944632/JF/RJ/NG/12070649/exotic-blackberry-dried-500x500.jpg' },
  { id: 8, name: 'Product 8', brand: 'Brand H', kg: '3kg', price: '$30', image: 'https://forestfruits.com.au/wp-content/uploads/2021/08/custard-apple-fresh-each1-600x600.jpg' },
  { id: 9, name: 'Product 9', brand: 'Brand I', kg: '1kg', price: '$10', image: 'https://ripeme.com/wp-content/uploads/potato.jpg' },
  // Add more products as needed

];
  function ExoticFruits() {
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

export default ExoticFruits;
