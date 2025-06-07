import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl">AzerothCore Database Editor</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#configs" className="hover:underline">Configurations</a></li>
                    <li><a href="#logs" className="hover:underline">Logs</a></li>
                    <li><a href="#database" className="hover:underline">Database</a></li>
                    <li><a href="#ai" className="hover:underline">AI Tools</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;