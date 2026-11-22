import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

export default function NoteItem({ note, onEdit, onDelete }) {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{note.text}</Text>
      <Pressable style={styles.editButton} onPress={() => onEdit(note)}>
        <Text style={styles.editText}>Edit</Text>
      </Pressable>
      <Pressable style={styles.deleteButton} onPress={() => onDelete(note.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    </View>
  );
}
