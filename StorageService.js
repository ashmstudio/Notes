import AsyncStorage from '@react-native-async-storage/async-storage';

// The "name tag" our notes are stored under on the device.
const STORAGE_KEY = '@notes_list';

// READ: get the saved notes (a string), turn it back into an array.
export async function loadNotes() {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    // If nothing was saved yet, getItem returns null -> start with an empty list.
    return json !== null ? JSON.parse(json) : [];
  } catch (error) {
    console.log('Error loading notes:', error);
    return [];
  }
}

// WRITE: turn the array into a string, then save it.
export async function saveNotes(notes) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.log('Error saving notes:', error);
  }
}
