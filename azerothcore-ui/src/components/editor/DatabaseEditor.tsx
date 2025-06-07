import React, { useState, useEffect } from 'react';
import { fetchDatabaseEntries, updateDatabaseEntry } from '../../services/api';
import { DatabaseEntry } from '../../types/core';

const DatabaseEditor: React.FC = () => {
  const [entries, setEntries] = useState<DatabaseEntry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<DatabaseEntry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEntries = async () => {
      const data = await fetchDatabaseEntries();
      setEntries(data);
      setLoading(false);
    };
    loadEntries();
  }, []);

  const handleSelectEntry = (entry: DatabaseEntry) => {
    setSelectedEntry(entry);
  };

  const handleUpdateEntry = async () => {
    if (selectedEntry) {
      await updateDatabaseEntry(selectedEntry);
      setSelectedEntry(null);
      const updatedEntries = await fetchDatabaseEntries();
      setEntries(updatedEntries);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Database Editor</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id} onClick={() => handleSelectEntry(entry)}>
            {entry.name}
          </li>
        ))}
      </ul>
      {selectedEntry && (
        <div>
          <h3>Edit Entry: {selectedEntry.name}</h3>
          <input
            type="text"
            value={selectedEntry.value}
            onChange={(e) => setSelectedEntry({ ...selectedEntry, value: e.target.value })}
          />
          <button onClick={handleUpdateEntry}>Update</button>
        </div>
      )}
    </div>
  );
};

export default DatabaseEditor;