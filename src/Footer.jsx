import React from 'react';

const Footer = () => {

    const year = new Date().getFullYear();

    return <>
        <footer className=" fixed bottom-0 w-screen left-0 w-5/6  bg-gray-700 grid justify-center border-t-2 border-yellow-400" >
            <p className="text-yellow-400 font-mono">copyright {year}. Built with love by Padmaja.</p>

        </footer>
    </>;
};

export default Footer;