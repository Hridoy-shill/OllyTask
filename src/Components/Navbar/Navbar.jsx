import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className='flex gap-2 px-2'>
                <div className='w-full flex items-center'>
                    <img className='md:w-20 w-11' src="/public/logo.png" alt="" />
                    <p className='md:text-3xl'><span className='font-bold text-orange-400'>Photo</span> <span className='font-thin'>Fair</span></p>
                </div>
                <div className='md:w-full w-fit flex justify-center items-center md:visible'>Total:</div>
                <div className='w-full flex items-center justify-end'>
                    <button className="btn bg-orange-400 hover:bg-orange-500 font-bold text-white md:text-base"><FaRegTrashAlt className='font-bold'></FaRegTrashAlt> Delete</button>
                </div>
            </div>
            <div className='border-b-2 border-black md:max-w-7xl mx-auto md:mt-0 mt-2'></div>
        </div>
    );
};

export default Navbar;