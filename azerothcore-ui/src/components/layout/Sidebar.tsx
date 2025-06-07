import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full">
      <div className="p-4">
        <h2 className="text-lg font-bold">AzerothCore Editor</h2>
      </div>
      <nav className="mt-4">
        <ul>
          <li>
            <Link to="/config-editor" className="block p-2 hover:bg-gray-700">
              Config Editor
            </Link>
          </li>
          <li>
            <Link to="/database-editor" className="block p-2 hover:bg-gray-700">
              Database Editor
            </Link>
          </li>
          <li>
            <Link to="/script-editor" className="block p-2 hover:bg-gray-700">
              Script Editor
            </Link>
          </li>
          <li>
            <Link to="/model-viewer" className="block p-2 hover:bg-gray-700">
              Model Viewer
            </Link>
          </li>
          <li>
            <Link to="/scene-controls" className="block p-2 hover:bg-gray-700">
              Scene Controls
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;