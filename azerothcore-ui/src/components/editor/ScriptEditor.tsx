import React, { useState, useEffect } from 'react';
import { useAzerothCore } from '../../hooks/useAzerothCore';
import { Button } from '../common/Button';
import { Input } from '../common/Input';

const ScriptEditor: React.FC = () => {
    const { fetchScripts, saveScript } = useAzerothCore();
    const [scripts, setScripts] = useState([]);
    const [selectedScript, setSelectedScript] = useState(null);
    const [scriptContent, setScriptContent] = useState('');

    useEffect(() => {
        const loadScripts = async () => {
            const fetchedScripts = await fetchScripts();
            setScripts(fetchedScripts);
        };
        loadScripts();
    }, [fetchScripts]);

    const handleScriptSelect = (script) => {
        setSelectedScript(script);
        setScriptContent(script.content);
    };

    const handleSave = async () => {
        if (selectedScript) {
            await saveScript(selectedScript.id, scriptContent);
            alert('Script saved successfully!');
        }
    };

    return (
        <div className="script-editor">
            <h2>Edit Scripts</h2>
            <div className="script-list">
                {scripts.map((script) => (
                    <Button key={script.id} onClick={() => handleScriptSelect(script)}>
                        {script.name}
                    </Button>
                ))}
            </div>
            {selectedScript && (
                <div className="editor">
                    <h3>Editing: {selectedScript.name}</h3>
                    <Input
                        value={scriptContent}
                        onChange={(e) => setScriptContent(e.target.value)}
                        multiline
                    />
                    <Button onClick={handleSave}>Save Script</Button>
                </div>
            )}
        </div>
    );
};

export default ScriptEditor;