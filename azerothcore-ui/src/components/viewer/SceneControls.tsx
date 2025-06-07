import React from 'react';

const SceneControls: React.FC = () => {
    const handleZoomIn = () => {
        // Logic for zooming in the model
    };

    const handleZoomOut = () => {
        // Logic for zooming out the model
    };

    const handleRotateLeft = () => {
        // Logic for rotating the model to the left
    };

    const handleRotateRight = () => {
        // Logic for rotating the model to the right
    };

    return (
        <div className="scene-controls">
            <button onClick={handleZoomIn}>Zoom In</button>
            <button onClick={handleZoomOut}>Zoom Out</button>
            <button onClick={handleRotateLeft}>Rotate Left</button>
            <button onClick={handleRotateRight}>Rotate Right</button>
        </div>
    );
};

export default SceneControls;