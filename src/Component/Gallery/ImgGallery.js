import React, { useEffect, useState } from 'react';
import {FaSearchPlus} from 'react-icons/fa';
import image1 from '../../Images/ServiceImages/mehndi-3.jpg';
import image2 from '../../Images/ServiceImages/social-service-2.jpg';
import image6 from '../../Images/ServiceImages/mehndi-2.jpg';
import image3 from '../../Images/ServiceImages/dance-3.jpg';
import image4 from '../../Images/ServiceImages/birthday-3.jpg';
import image8 from '../../Images/ServiceImages/birthday-4.jpg';
import image5 from '../../Images/ServiceImages/social-service-3.jpg';
import image7 from '../../Images/ServiceImages/social-service-4.jpg';

const ImgGallery = () => {
    const imgData = [
        {
            _id: 1,
            img: image1,
            title: 'Wedding Events',
            tag: 'Wedding',
        },
        {
            _id: 2,
            img: image2,
            title: 'Social Meetings',
            tag: 'Social',
        },
        {
            _id: 3,
            img: image3,
            title: 'Wedding Events',
            tag: 'Wedding',
        },
        {
            _id: 4,
            img: image4,
            title: 'Birthday Parties',
            tag: 'Birthday',
        },
        {
            _id: 5,
            img: image5,
            title: 'Wedding Events',
            tag: 'Wedding',
        },
        {
            _id: 6,
            img: image6,
            title: 'Social Meetings',
            tag: 'Social',
        },
        {
            _id: 7,
            img: image7,
            title: 'Wedding Events',
            tag: 'Wedding',
        },
        {
            _id: 8,
            img: image8,
            title: 'Birthday Parties',
            tag: 'Birthday',
        },
    ]
    const [tag, setTag] = useState('all');
    const [allimgData, setAllimgData] = useState(imgData);
    useEffect(()=> {
        console.log(allimgData)
       if(tag === 'Birthday'){
         const filterimgData = imgData.filter(item => item.tag === 'Birthday');
         console.log(filterimgData);
         setAllimgData(filterimgData)
        }
        console.log(allimgData)
        if(tag === 'Wedding'){
            const filterimgData = imgData.filter(item => item.tag === 'Wedding');
            console.log(filterimgData);
            setAllimgData(filterimgData)
           }
           if(tag === 'Social'){
            const filterimgData = imgData.filter(item => item.tag === 'Social');
            console.log(filterimgData);
            setAllimgData(filterimgData)
           }
    }, [tag])
    return (
        <div className='my-20'>
             <div className="flex mb-5 justify-center gap-4">
                            {/* <button className={`button text-[18px] pb-2 text-primary ${tag === 'all' ? 'border-b-2 border-primary' : ''}`} onClick={()=> setAllimgData(imgData)}>All</button> */}
                            <button className={`button text-[18px] pb-2 text-primary ${tag === 'Wedding' ? 'border-b-2 border-primary' : ''}`} onClick={()=> setTag('Wedding')}>Wedding Events</button>
                            <button className={`button text-[18px] pb-2 text-primary ${tag === 'Birthday' ? 'border-b-2 border-primary' : ''}`} onClick={()=> setTag('Birthday')}>Birthday Events</button>
                            <button className={`button text-[18px] pb-2 text-primary ${tag === 'Social' ? 'border-b-2 border-primary' : ''}`} onClick={()=> setTag('Social')}>Social Events</button>
                        </div>
                        <div className="lg:mx-32 mx-5 grid gap-[1px] lg:grid-cols-4 grid-cols-2">
                        {
                            allimgData.map(item => (
                                <div key={item._id} className='relative'>
                                    <div className='absolute top-0'>

                                    <div className={`hover:bg-gray-900/80 transition-all hover:block lg:w-[315px] w-[100%] h-[210px] text-black/0 hover:text-white bg-center bg-cover`}>
                                    <h2 className='lg:w-[315px] absolute top-10 left-10 text-[18px] font-bold'>{item.title}</h2>
                                    <p className='absolute top-16 left-10'>Lorem ipsum dolor sit amet.</p>
                                    <span><FaSearchPlus className='hover:text-primary text-2xl absolute bottom-10 right-10' /></span>
                                    </div>
                                    <div>

                                    </div>

            </div>
            <img className='' src={item.img} alt="" />
                                </div>
                               

                            ))
                        }
                        </div>
        </div>
    );
};

export default ImgGallery;