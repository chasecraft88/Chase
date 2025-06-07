import React, { useEffect, useRef } from 'react';
import { useModelLoader } from '../../hooks/useModelLoader';

const ModelViewer: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const { loadModel } = useModelLoader();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('webgl');
            if (context) {
                // Initialize WebGL context and load the model
                loadModel(context);
            }
        }
    }, [loadModel]);

    return (
        <div className="model-viewer">
            <canvas ref={canvasRef} width={800} height={600} />
        </div>
    );
};

export default ModelViewer;