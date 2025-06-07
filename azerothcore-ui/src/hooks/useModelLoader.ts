import { useState, useEffect } from 'react';

const useModelLoader = (modelUrl: string) => {
    const [model, setModel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadModel = async () => {
            try {
                const response = await fetch(modelUrl);
                if (!response.ok) {
                    throw new Error('Failed to load model');
                }
                const modelData = await response.json();
                setModel(modelData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadModel();
    }, [modelUrl]);

    return { model, loading, error };
};

export default useModelLoader;