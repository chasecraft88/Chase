import React, { useState, useEffect } from 'react';
import { fetchConfig, saveConfig } from '../../services/api';
import Button from '../common/Button';
import Input from '../common/Input';

const ConfigEditor: React.FC = () => {
    const [config, setConfig] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadConfig = async () => {
            try {
                const data = await fetchConfig();
                setConfig(data);
            } catch (err) {
                setError('Failed to load configuration');
            } finally {
                setLoading(false);
            }
        };

        loadConfig();
    }, []);

    const handleChange = (key: string, value: string) => {
        setConfig((prevConfig: any) => ({
            ...prevConfig,
            [key]: value,
        }));
    };

    const handleSave = async () => {
        try {
            await saveConfig(config);
            alert('Configuration saved successfully');
        } catch (err) {
            setError('Failed to save configuration');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Configuration Editor</h2>
            {Object.keys(config).map((key) => (
                <div key={key}>
                    <label>{key}</label>
                    <Input
                        value={config[key]}
                        onChange={(e) => handleChange(key, e.target.value)}
                    />
                </div>
            ))}
            <Button onClick={handleSave}>Save Configuration</Button>
        </div>
    );
};

export default ConfigEditor;