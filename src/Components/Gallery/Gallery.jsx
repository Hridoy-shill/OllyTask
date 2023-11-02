import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/allImages')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    return (
        <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 text-center md:gap-3 md:p-0 lg:p-0 p-2 lg:space-y-0 md:space-y-0 space-y-2'>
            {
                images.map((image, index) => <div
                    key={index}
                    className={`border-2 ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
                >
                    <img className='object-cover' src={image.Image} alt="" />
                </div>)
            }
            <div>
                <p>drag and drop er kaj</p>
            </div>
        </div>
    );
};

export default Gallery;