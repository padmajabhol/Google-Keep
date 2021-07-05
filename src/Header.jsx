import React from 'react';
import keep from './Images/keep.png';


const Header = () => {
    return <>
        <div className=" bg-gray-700 h-16 border-b-2 border-yellow-400 flex items-center   ">
            <img className="w-16 container ml-5" src={keep} alt='logo' />
            <h1 className="text-3xl pl-2 font-semibold text-yellow-400 font-mono">Keep</h1>

        </div>
    </>;
};

export default Header;