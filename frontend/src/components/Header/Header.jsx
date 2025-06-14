import React from 'react';
import Slider from 'react-slick';
import './Header.css';

const Header = () => {
    const images = ['/header_img1.jpg', '/header_img2.jpg', '/header_img3.jpg'];
//    const images = ['.../as/header_img1.jpg', '.../assets/header_img2.jpg', '.../assets/header_img3.jpg'];
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    return (
        <div className='header'>
            <Slider {...settings} className='header-slider'>
                {images.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`slide-${index}`} className="header-image" />
                    </div>
                ))}
            </Slider>
            <div className='header-contents'>
                <h2>Order your favourite food here</h2>
                <p>
                    Choose from a diverse menu featuring a delectable array of dishes crafted with
                    the finest ingredients and culinary expertise. Our mission is to satisfy your
                    cravings and elevate your dining experience, one delicious meal at a time.
                </p>
                <button>View Menu</button>
            </div>
        </div>
    );
};

export default Header;



// import React from 'react'
// import './Header.css'

// const Header = () => {
//     return (
//         <div className='header'>
//             <div className='header-contents'>
//                 <h2>Order your favourite food here</h2>
//                 <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
//                 <button>View Menu</button>
//             </div>
//         </div>
//     )
// }

// export default Header
