import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Homepage.css'; // Import the CSS file
import Navbar from './Navbar'; // Import the Navbar component
import Login from './Login';
import Register from './Register';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import Adminlogin from './Adminlogin';
import Admin from './Admin';
import Footer from'./Footer';
import Header from './Header';
// import Adminlogin from './Adminlogin';
// import AdminLayout from './AdminLayout';
// import AdminLayout from './AdminLayout';
// import Adminlogin from './Adminlogin';
// import brand1 from '../assets/brand1.jpg';
// import brand2 from '../assets/brand2.jpg';
// import brand3 from '../assets/brand3.jpg';

// Home component
function Homepage() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <HomeCarousel />
      <h2 className='fruits'>SHOP BY CATEGORY</h2>
      <div className="categories-container">
        <div className="category">
          <img src="https://hips.hearstapps.com/hmg-prod/images/pomegranate-1558625011.jpg?crop=1xw:1xh;center,top&resize=640:*" alt="Fruits" />
          <span>Fruits</span>
        </div>
        <div className="category">
          <img src="https://www.vikhrolicucina.com/uploads/stories/1658311473_mixvegetable.jpg" alt="Vegetables" />
          <span>Vegetables</span>
        </div>
        <div className="category">
          <img src="https://thumbs.dreamstime.com/z/cans-beverages-19492376.jpg" alt="Beverages" />
          <span>Beverages</span>
        </div>
        <div className="category">
          <img src="https://cdn.craft.cloud/224393fa-1975-4d80-9067-ada3cb5948ca/assets/Soft-and-Chewy-Chocolate-Chip-Cookie-Recipe-450x300_2022.jpg" alt="Bakery" />
          <span>Bakery</span>
        </div>
        <div className="category">
          <img src="https://5.imimg.com/data5/UO/CY/LB/SELLER-8078547/snacks-packing-pouch.jpg" alt="Snacks" />
          <span>Snacks</span>
        </div>
        <div className="category">
          <img src="https://media.healthyfood.com/wp-content/uploads/2017/03/Ask-the-experts-Raw-chicken.jpg" alt="Non-veg" />
          <span>Non-veg</span>
        </div>
        <div className="category">
          <img src="https://media.sciencephoto.com/image/c0244079/800wm" alt="Household" />
          <span>Household</span>
        </div>
        <div className="category">
          <img src="https://www.greenpan.us/cdn/shop/products/GP_RESERVE_NavyBlue_10pc_Outline1-1200x1200-bd93c0f.jpg?v=1640967134" alt="Kitchenware" />
          <span>Kitchenware</span>
        </div>
        <div className="category">
          <img src="https://safaribags.com/cdn/shop/files/Wing-16_BP_N_Black_02.jpg?v=1707721405" alt="Bags" />
          <span>Bags</span>
        </div>
        <div className="category">
          <img src="https://www.efghfoods.com/wp-content/uploads/2022/06/general_544923805.jpg" alt="Spices" />
          <span>Spices</span>
        </div>
        <div className="category">
          <img src="https://i.pinimg.com/564x/ec/60/9f/ec609f0a8d225d1a2e42dcf74fe0e80d.jpg" alt="Fashion" />
          <span>Fashion</span>
        </div>
        <div className="category">
          <img src="https://image.made-in-china.com/202f0j00kIKqtRiJbocU/Beaver-Baby-Shampoo-Natural-Safe-Baby-Care-Kit-for-Mums-and-Babies.jpg" alt="Babycare" />
          <span>Babycare</span>
        </div>
        {/* Add more categories if needed */}
      </div>
      <h2 className='offer'>OFFERS</h2>
      <div className="brand-cards-container">
        <div className="brand-card">
          <img src="https://www.shoppre.com/img/images/personal-shopper-wow-offer.jpg" alt="Brand 1" />

        </div>
        <div className="brand-card">
          <img src="https://pbfy.com/wp-content/uploads/2021/05/PBFY-First-purchase-5OFF.png" alt="Brand 2" />
        </div>
        <div className="brand-card">
          <img src="https://www.pondicherryshopping.com/image/catalog/get500off.jpg" alt="Brand 3" />
        </div>
        <div className="brand-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvPN5D2RtsDvi0kZ_7VfzoPYjY7N47Z88XLEzaq-QWR2F78AvHaI16QKZctRZppT5nTs4&usqp=CAU" alt="Brand 3" />
        </div>
        <div className="brand-card">
          <img src="https://ship.shoppre.com/wp-content/uploads/2019/05/shoppre-offers.png" alt="Brand 3" />
        </div>
        <div className="brand-card">
          <img src="https://uploads.commoninja.com/searchengine/wordpress/first-purchase-discount-for-woocommerce.jpg" alt="Brand 3" />
        </div>
        {/* Add more brand cards as needed */}
      </div>
      <h2 className='fruits'> Fruits and Vegetables</h2>
      <div className="product-cards-container">
        <div className="product-card">
          <img src="https://m.media-amazon.com/images/I/71S6oQqVa5L.AC_UF1000,1000_QL80.jpg" alt="Product 1" />
          <div className="product-info">
            <span className="product-name">Fresh Vegetables</span>
            <span className="product-price">MIN 27% OFF</span>
          </div>
        </div>
        <div className="product-card">
          <img src="https://t3.ftcdn.net/jpg/02/47/00/00/360_F_247000004_RPLyD5P1C8dIJg4ecU2PnNUpGX1sjhA0.jpg" alt="Product 2" />
          <div className="product-info">
            <span className="product-name">Fresh Fruits</span>
            <span className="product-price">MIN 27% OFF</span>
          </div>
        </div>
        <div className="product-card">
          <img src="https://www.liveeatlearn.com/wp-content/uploads/2023/01/junglesop.jpg" alt="Product 3" />
          <div className="product-info">
            <span className="product-name">Cuts & Exotics</span>
            <span className="product-price">MIN 27% OFF</span>
          </div>
        </div>
        <div className="product-card">
          <img src="https://img.freepik.com/premium-photo/spicy-herbs-slice-lemon-white-background-sage-thyme-tarragon-composition-herbs_101963-819.jpg" alt="Product 3" />
          <div className="product-info">
            <span className="product-name">Herbs & Seasanings</span>
            <span className="product-price">MIN 27% OFF</span>
          </div>
        </div>
        <div className="product-card">
          <img src="https://img.freepik.com/premium-photo/spicy-herbs-slice-lemon-white-background-sage-thyme-tarragon-composition-herbs_101963-819.jpg" alt="Product 3" />
          <div className="product-info">
            <span className="product-name">Herbs & Seasanings</span>
            <span className="product-price">MIN 27% OFF</span>
          </div>
        </div>
        <h2 className=''>Your Daily Staples</h2>
        <div className="different-product-cards-container">
        <div className="different-product-card">
          <img src="https://kiranamarket.com/wp-content/uploads/2020/12/wheat-flour.jpg" alt="flour" />
          <div className="different-product-info">
            <span className="different-product-name">Atta & Flour</span>
           
          </div>
        </div>
        <div className="different-product-card">
          <img src="https://t4.ftcdn.net/jpg/05/02/70/05/360_F_502700549_RFCRi0bIL5ADXLfbP4Q3qUYtWYGR9g8V.jpg" alt="Rice" />
          <div className="different-product-info">
            <span className="different-product-name">Rice & Rice Products</span>
           
          </div>
        </div>
        <div className="different-product-card">
          <img src="https://as1.ftcdn.net/v2/jpg/04/36/33/00/1000_F_436330088_an7Pv2naOQxIGiC6X34m5fHD9Vu2SOBt.jpg" alt="Dals" />
          <div className="different-product-info">
            <span className="different-product-name">Dals & Pulses</span>
            
          </div>
        </div>
        <div className="different-product-card">
          <img src="https://qph.cf2.quoracdn.net/main-qimg-771d07b3c07f38b1679174c4ffedcf4f-lq" alt="Oils" />
          <div className="different-product-info">
            <span className="different-product-name">Oils & Ghee</span>
            
          </div>
        </div>
        <div className="different-product-card">
          <img src="https://shreejifoods.in/cdn/shop/products/almonds-regular.jpg?v=1612532758" alt="Dry fruits" />
          <div className="different-product-info">
            <span className="different-product-name">Dry Fruits</span>
            
          </div>
        </div>
        <div className="different-product-card">
          <img src="https://image1.jdomni.in/product/19082020/6A/A6/A1/DC23F56485E76E586D8C02A919_1597851862808.jpg" alt="Sugar" />
          <div className="different-product-info">
            <span className="different-product-name">Jaggery</span>
            
          </div>
          </div>
      

      <div className='heading-big'>DISCOVER MORE</div>
      <div className='head-div'>
        <div className='disco-mor'>Offer</div>
        <div className='disco-mor'>Organic</div>
        <div className='disco-mor'>Health</div>
        <div className='disco-mor'>Gifts</div>
      </div>
      </div>
    </div>
<Footer/>
    </div>
  );
}     
   
  // Categories component


// About component

// Contact component

// Carousel component
function HomeCarousel() {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={1400}>
      <div>
        <img src={img3} alt="Slide 1" />
      </div>
      <div>
        <img src={img2} alt="Dairy Products" />
      </div>
      <div>
        <img src={img1} alt="Bakery Items" />
      </div>
    </Carousel>
  );
}


// // Main HomePage component
// function Homepage() {
//   return (
//       <div className="homepage-wrapper">
//         <Navbar /> {/* Use the Navbar component here */}
        
//       </div>
    
//   );
// }

export default Homepage;


