import React from 'react';
import Logo from './images/logo.png';
import product1 from './images/product-1.jpg';
import product2 from './images/product-2.jpg';
import product3 from './images/product-3.jpg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const MainContent = () => {
  const navigate = useNavigate(); // Use useNavigate

  const handleBuyClick = () => {
    // Navigate to the shop page
    navigate('/shop');
  };
  return (
    <div className='body'>
      <nav className="navbar navbar-expand-lg">
        <nav class="navbar">
          <a class="navbar-brand" href="#">
            <img src={Logo} alt=""/>
          </a>
        </nav>
        <button class="bg-alert navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop">Energy Drinks</a>
            </li>
          </ul>
          <div className="Arrival-Notice">
            <h2><span>...</span></h2>
          </div>
        </div>
      </nav>
      <div id="slider-go" className='gogo'>
        <div className='Arrival-Notice arrival'>
          <h2>Our <span>Brusty...</span><br />New Arrivals <span>...</span></h2>
        </div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={product1} alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={product2} alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={product3} alt="Third slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="netx-button">
          <button onClick={handleBuyClick}>Make a Buy</button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
