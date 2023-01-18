import React from 'react';
import SmallBtn from '../../SmallBtn';

const Specialist = ({specialist}) => {
    const {image, title, des, btn} = specialist;
    return (
        <div>
            <div className="card m-0 w-92 ">
  <div className="card-body">
  <div className="flex mb-3">
  <figure>{image}</figure>
    <h2 className="card-title ml-2">{title}</h2>
  </div>
    <p>{des}</p>
</div>
  </div>
<div className="ml-6">
{
    btn && <SmallBtn/>
  }
</div>
        </div>
    );
};

export default Specialist;