import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} AzerothCore UI. All rights reserved.</p>
            <p>Developed with ❤️ for the World of Warcraft community.</p>
        </footer>
    );
};

export default Footer;