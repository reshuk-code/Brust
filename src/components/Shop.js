
// import React from 'react';
// import Logo from './images/logo.png';
// import product1 from './images/product-1.jpg';
// import product2 from './images/product-2.jpg';
// import product3 from './images/product-3.jpg';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const MainContent = () => {
//   const navigate = useNavigate(); // Use useNavigate

//   const handleBuyClick = () => {
//     // Navigate to the shop page
//     navigate('/home');
//   };
// }
// const Shop = () => {
//   return (
//     <div className='body'>
//     <nav className="navbar navbar-expand-lg">
//       <nav class="navbar">
//         <a class="navbar-brand" href="/home">
//           <img src={Logo}  alt=""/>
//         </a>
//       </nav>
//       <button class="bg-alert navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <a className="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
//           </li>
//           <li className="nav-item active">
//             <a className="nav-link" href="#">Energy Drinks</a>
//           </li>
//           <li className="nav-item button ">
//             <button><i class="fa-sharp fa-solid fa-cart-shopping"></i></button>
//           </li>
          
//         </ul>
//         <div className="Arrival-Notice">
//           <h2><span>...</span></h2>
//         </div>
//       </div>
//     </nav>

//     <div className="card-deck">
//   <div className="card">
//     <img src={product1} className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">Brust - Watermelon</h5>
//       <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//       <div className="buy-now">
//         <button>Buy</button>
//         <button>Add to cart</button>
//       </div>
//     </div>
//   </div>
//   <div className="card">
//     <img src={product2} className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">Brust - Lemon</h5>
//       <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//     <div className="buy-now">
//       <button>Buy</button>
//       <button>Add to cart</button>
//     </div>
//     </div>
//   </div>
//   <div className="card">
//     <img src={product3} className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">Brust - Orange</h5>
//       <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//       <div className="buy-now">
//         <button>Buy</button>
//         <button>Add to cart</button>
//       </div>
//     </div>
//   </div>
// </div>
   
//   </div>
//   );
// };

// export default Shop;


import React, { useState } from 'react';
import Logo from './images/logo.png';
import product1 from './images/product-1.jpg';
import product2 from './images/product-2.jpg';
import product3 from './images/product-3.jpg';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Brust - Watermelon', img: product1 },
  { id: 2, name: 'Brust - Lemon', img: product2 },
  { id: 3, name: 'Brust - Orange', img: product3 },
];

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleIncreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        )
    );
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className='body'>
      <nav className="navbar navbar-expand-lg">
        <nav className="navbar">
          <a className="navbar-brand" href="/home">
            <img src={Logo} alt="Logo" />
          </a>
        </nav>
        <button
          className="bg-alert navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Energy Drinks
              </a>
            </li>
            <li className="nav-item ml-auto">
              <button className="btn cart-icon"onClick={handleShowCart}>
                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
              </button>
            </li>
          </ul>
          <div className="Arrival-Notice">
            <h2>
              <span>...</span>
            </h2>
          </div>
        </div>
      </nav>

      <div className="card-deck">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="buy-now">
                <button onClick={() => handleAddToCart(product)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showCart && (
        <div className="cart-popup">
          <h2>Cart</h2>
          <button onClick={handleShowCart} className="close-popup">X</button>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <img src={item.img} alt={item.name} style={{ width: '50px' }} />
                  <span>{item.name}</span>
                  <span>Quantity: {item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                  <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Shop;
