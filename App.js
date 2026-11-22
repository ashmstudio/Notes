import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import { loadNotes, saveNotes } from './StorageService';
import NoteItem from './NoteItem';
import styles from './styles';

export default function App() {
  const [notes, setNotes] = useState([]);      // the list of notes
  const [text, setText] = useState('');        // what is typed in the input
  const [editingId, setEditingId] = useState(null); // null = adding, otherwise = editing that note

  // READ: runs once when the app opens, loads saved notes from storage.
  useEffect(() => {
    async function fetchSavedNotes() {
      const saved = await loadNotes();
      setNotes(saved);
    }
    fetchSavedNotes();
  }, []);

  // Helper: update the screen (state) AND the device storage together,
  // so they always stay in sync.
  async function updateNotes(newNotes) {
    setNotes(newNotes);
    await saveNotes(newNotes);
  }

  // CREATE or UPDATE, depending on whether we are editing.
  async function handleSave() {
    const trimmed = text.trim();
    if (trimmed === '') return;

    if (editingId === null) {
      // CREATE: add a new note
      const newNote = { id: Date.now().toString(), text: trimmed };
      await updateNotes([...notes, newNote]);
    } else {
      // UPDATE: replace the text of the note being edited
      const changed = notes.map((n) =>
        n.id === editingId ? { ...n, text: trimmed } : n
      );
      await updateNotes(changed);
      setEditingId(null);
    }
    setText('');
  }

  // Start editing: put the note's text in the input box.
  function handleEdit(note) {
    setText(note.text);
    setEditingId(note.id);
  }

  // DELETE: keep every note except the one with this id.
  async function handleDelete(id) {
    const remaining = notes.filter((n) => n.id !== id);
    await updateNotes(remaining);
    if (editingId === id) {
      setEditingId(null);
      setText('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Notes</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Write a note..."
          value={text}
          onChangeText={setText}
        />
        <Pressable style={styles.addButton} onPress={handleSave}>
          <Text style={styles.addButtonText}>
            {editingId === null ? 'Add' : 'Save'}
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteItem note={item} onEdit={handleEdit} onDelete={handleDelete} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No notes yet.</Text>}
      />
    </View>
  );
}
