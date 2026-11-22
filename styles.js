import { StyleSheet } from 'react-native';

// Color palette: change these in one place to restyle the whole app!
const colors = {
  background: '#EEF2FF',   // soft light blue-purple
  primary: '#5B4BDB',      // purple (title, Add button)
  editing: '#F59E0B',      // orange (Save button while editing)
  card: '#FFFFFF',
  text: '#1F2937',
  muted: '#6B7280',
  edit: '#3B82F6',         // blue
  delete: '#EF4444',       // red
  border: '#C7D2FE',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
  },
  inputRow: { flexDirection: 'row', marginBottom: 16 },
  input: {
    flex: 1,
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    marginRight: 8,
    color: colors.text,
  },
  addButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
  empty: { textAlign: 'center', color: colors.muted, marginTop: 30 },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderLeftWidth: 6,
    borderLeftColor: colors.primary,
  },
  noteText: { flex: 1, fontSize: 16, color: colors.text },
  editButton: {
    marginLeft: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: colors.edit,
  },
  editText: { color: '#fff', fontWeight: 'bold' },
  deleteButton: {
    marginLeft: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: colors.delete,
  },
  deleteText: { color: '#fff', fontWeight: 'bold' },
});
