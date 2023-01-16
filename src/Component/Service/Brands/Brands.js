import React from 'react';
import logo from '../../../Images/logo-1.jpg';
import logo1 from '../../../Images/logo-2.jpg';

const Brands = () => {
  const image = [
    {
      _id: 1,
      image: logo,
    },
    {
      _id: 2,
      image: logo1,
    },
    {
      _id: 2,
      image: logo,
    },
    {
      _id: 4,
      image: logo1,
    },
  ]
    return (
        <div className="px-8 lg:px-36 mt-32">
        <div className=" max p-4 space-x-4">
  <div className="flex">
    {
      image.map(item => 
        <img src={item.image} className="mx-12" />
        )
      }
  </div> 
  {/* <div className="carousel-item">
    
  </div> 
  <div className="carousel-item">
    <img src="http://demo.ovathemes.com/dvents/wp-content/uploads/2017/06/logo-2.png" className="mx-12" />
  </div> 
  <div className="carousel-item">
    <img src="http://demo.ovathemes.com/dvents/wp-content/uploads/2017/06/logo-5.png" className="mx-12" />
  </div> 
  <div className="carousel-item">
    <img src="http://demo.ovathemes.com/dvents/wp-content/uploads/2017/06/logo-1.png" className="mx-12" />
  </div> 
  <div className="carousel-item">
    <img src="http://demo.ovathemes.com/dvents/wp-content/uploads/2017/06/logo-1.png" className="mx-12" />
  </div>  */}
</div>
</div>
    );
};

export default Brands;