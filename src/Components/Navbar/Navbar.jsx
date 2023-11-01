import React from 'react';

const Navbar = () => {
    return (
        <div className='flex w-full border-2 gap-2'>
            <div className='w-full border-2 flex items-center'>
                <img className='w-20' src="/public/logo.png" alt="" />
                <p className='text-3xl'><span className='font-bold text-orange-400'>Photo</span> <span className='font-extralight'>Fair</span></p>
            </div>
            <div className='w-full border-2'>div2</div>
            <div className='w-full border-2'>div3</div>
        </div>
    );
};

export default Navbar;